import BrushIcon from "@mui/icons-material/Brush";
import {
  Box,
  FilledInput,
  FormControl,
  FormGroup,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useGetStatuses, useGetTags } from "lib/supabase/feedbackList";
import { useRouter } from "next/router";
import React, { BaseSyntheticEvent, FormEvent } from "react";
import { supabase } from "utils/supabaseClient";

import StyledBox from "@/components/box";
import Button from "@/components/button";
import DecorativeCircle from "@/components/decorative-circle";
import TextField from "@/components/text-field";
import { COLORS } from "@/styles/theme/themeOptions";

import DeleteButton from "../delete-button";
import FormPage from "../form-page";

interface Props {
  title: string;
}

const UpdateFeedbackForm = ({ title }: Props) => {
  const { data: tags } = useGetTags();
  const { data: statuses } = useGetStatuses();
  const [selectedTag, setSelectedTag] = React.useState("");
  const [selectedStatus, setSelectedStatus] = React.useState("");

  const router = useRouter();
  const { id } = router.query;

  const handleTagChange = (event: SelectChangeEvent) => {
    setSelectedTag(event.target.value);
  };

  const handleStatusChange = (event: SelectChangeEvent) => {
    setSelectedStatus(event.target.value);
  };

  const handleEdit = async (e: BaseSyntheticEvent) => {
    const { data, error } = await supabase.from("suggestions").upsert({
      description: e.target.detail.value,
      id: id,
      statusID: selectedStatus,
      tagID: selectedTag,
      title: e.target.title.value,
    });

    if (error) {
      console.log("Error: ", error);
    }

    if (data) {
      console.log("Edited successfully");
    }
  };

  return (
    <FormPage>
      <FormControl>
        <StyledBox
          component="form"
          onSubmit={(e: FormEvent<HTMLDivElement>) => handleEdit(e)}
          sx={{ backgroundColor: COLORS.primary.white, px: 6, py: 5 }}
        >
          <DecorativeCircle>
            <BrushIcon fontSize="large" htmlColor={COLORS.primary.white} />
          </DecorativeCircle>
          <Typography variant="h1" sx={{ my: 4 }}>
            {title}
          </Typography>
          <Typography variant="h4">Feedback Title</Typography>
          <Typography variant="body2">
            Add a short, descriptive headline
          </Typography>
          <TextField id="feedback-title" name="title" />
          <FormGroup>
            <Typography variant="h4">Category</Typography>
            <Typography variant="body2">
              Choose a category for your feedback
            </Typography>

            <Select
              labelId="tag-select-label"
              id="tag-select"
              input={<FilledInput disableUnderline fullWidth />}
              value={selectedTag}
              label="tags"
              onChange={handleTagChange}
              sx={{
                backgroundColor: COLORS.background,
                borderRadius: 2,
                my: 2,
              }}
            >
              {tags?.map((tag) => (
                <MenuItem key={tag.id} value={tag.id}>
                  {tag.name}
                </MenuItem>
              ))}
            </Select>
          </FormGroup>
          <FormControl>
            <Typography variant="h4">Update Status</Typography>
            <Typography variant="body2">Change feedback state</Typography>
            <Select
              labelId="status-select-label"
              id="status-select"
              value={selectedStatus}
              label="status"
              onChange={handleStatusChange}
              input={<FilledInput disableUnderline fullWidth />}
              sx={{
                backgroundColor: COLORS.background,
                borderRadius: 2,
                my: 2,
              }}
            >
              {statuses?.map((status) => (
                <MenuItem key={status.id} value={status.id}>
                  {status.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Typography variant="h4">Feedback Detail</Typography>
          <Typography variant="body2">
            Include any specific comments on what should be improved, added,
            etc.{" "}
          </Typography>
          <TextField id="feedback-detail" height={100} name="detail" />

          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
              mt: 2,
            }}
          >
            <DeleteButton id={id} />
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                backgroundColor={COLORS.primary.navy}
                onClick={() => router.push("/")}
              >
                Cancel
              </Button>
              <Button type="submit" sx={{ ml: 2 }}>
                Update
              </Button>
            </Box>
          </Box>
        </StyledBox>
      </FormControl>
    </FormPage>
  );
};

export default UpdateFeedbackForm;

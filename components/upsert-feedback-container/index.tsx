import {
  Grid,
  Box,
  Typography,
  MenuItem,
  Select,
  FilledInput,
  FormControl,
  SelectChangeEvent,
  FormGroup,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import StyledBox from "@/components/box";
import Button from "@/components/button";
import TextField from "@/components/text-field";
import { COLORS } from "@/styles/theme/themeOptions";
import AddIcon from "@mui/icons-material/Add";
import BrushIcon from "@mui/icons-material/Brush";
import DecorativeCircle from "@/components/decorative-circle";
import { useGetStatuses, useGetTags } from "lib/supabase/feedbackList";
import { supabase } from "utils/supabaseClient";
import React, { FormEvent } from "react";
import DeleteButton from "../delete-button";

interface Props {
  role: string;
  title: string;
}

const UpsertFeedbackContainer = ({ role, title }: Props) => {
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

  const handleSubmit = async (e: any) => {
    const { data, error } = await supabase.from("suggestions").insert([
      {
        title: e.target.title.value,
        description: e.target.detail.value,
        tagID: selectedTag,
      },
    ]);

    if (error) {
      console.log("Error: ", error);
    }

    if (data) {
      console.log("Added successfully");
    }
  };

  const handleEdit = async (e: any) => {
    const { data, error } = await supabase.from("suggestions").upsert({
      id: id,
      title: e.target.title.value,
      description: e.target.detail.value,
      tagID: selectedTag,
      statusID: selectedStatus,
    });

    if (error) {
      console.log("Error: ", error);
    }

    if (data) {
      console.log("Edited successfully");
    }
  };

  return (
    <Grid
      sx={{
        mt: 2,
      }}
      justifyContent="center"
      container
      spacing={2}
    >
      <Grid item md={5}>
        <Box sx={{ mb: 8 }}>
          <Typography
            sx={{ color: COLORS.primary.navy, fontWeight: 700 }}
            variant="body2"
          >
            <Link href="/">{`< Go Back`}</Link>
          </Typography>
        </Box>
        <FormControl>
          <StyledBox
            component="form"
            onSubmit={(e: FormEvent<HTMLDivElement>) => {
              role === "edit" ? handleEdit(e) : handleSubmit(e);
            }}
            sx={{ backgroundColor: COLORS.primary.white, px: 6, py: 5 }}
          >
            <DecorativeCircle>
              {role === "edit" ? (
                <BrushIcon fontSize="large" htmlColor={COLORS.primary.white} />
              ) : (
                <AddIcon fontSize="large" htmlColor={COLORS.primary.white} />
              )}
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
              {role === "edit" ? (
                <>
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
                </>
              ) : null}
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
              {role === "edit" ? <DeleteButton id={id} /> : null}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  backgroundColor={COLORS.primary.navy}
                  onClick={() => router.push("/")}
                >
                  Cancel
                </Button>
                <Button type="submit" sx={{ ml: 2 }}>
                  {role === "edit" ? "Update" : "Add Feedback"}
                </Button>
              </Box>
            </Box>
          </StyledBox>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default UpsertFeedbackContainer;

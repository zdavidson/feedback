import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { COLORS } from "../../../../styles/theme/themeOptions";
import StyledBox from "../../../shared/Box";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Link from "../../../shared/Link";

interface Props {
  id: number;
  description: string;
  title: string;
  tags: [string];
  upvotes: number;
  comments: number;
}

const SuggestionCard = ({
  id,
  description,
  title,
  tags,
  upvotes,
  comments,
}: Props) => {
  const [upvoteCount, setUpvoteCount] = useState(upvotes);

  const handleUpvote = () => {
    setUpvoteCount(upvoteCount + 1);
  };

  return (
    /// change to grid
    <StyledBox
      sx={{
        alignItems: "center",
        backgroundColor: COLORS.primary.white,
        color: COLORS.secondary.navy,
        display: "flex",
        justifyContent: "space-between",
        px: 4,
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Button
          onClick={handleUpvote}
          sx={{
            alignItems: "center",
            backgroundColor: COLORS.background,
            color: "black",
            flexDirection: "column",
            height: "fit-content",
            py: 1,
            px: 0,
          }}
        >
          <span
            style={{
              color: COLORS.primary.blue,
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            ^
          </span>
          <Typography sx={{ fontWeight: 700 }} variant="body2">
            {upvoteCount}
          </Typography>
        </Button>
        <Box sx={{ mx: 4 }}>
          <Box>
            <Link href={`/suggestions/${id}`}>
              <Typography variant="h3">{title}</Typography>
            </Link>
            <Typography variant="body2">{description}</Typography>
          </Box>
          <StyledBox
            sx={{
              backgroundColor: COLORS.background,
              m: 0,
              mt: 2,
              py: 0.75,
              px: 2.25,
              width: "fit-content",
            }}
          >
            <Typography
              sx={{ color: COLORS.primary.blue, fontWeight: 700 }}
              variant="body2"
            >
              {tags}
            </Typography>
          </StyledBox>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <ChatBubbleIcon sx={{ color: "#CDD2EE", mx: 2 }} />
        <Typography sx={{ fontWeight: 700 }} variant="body1">
          {comments}
        </Typography>
      </Box>
    </StyledBox>
  );
};

export default SuggestionCard;

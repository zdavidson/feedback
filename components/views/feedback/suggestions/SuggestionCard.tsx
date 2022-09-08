import { Box, Typography } from "@mui/material";
import { COLORS } from "@/styles/theme/themeOptions";
import StyledBox from "@/components/shared/Box";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Link from "@/components/shared/Link";
import Upvotes from "./components/Upvotes";

interface Props {
  suggestion: {
    id: number;
    title: string;
    description: string;
    tags: [string];
    upvotes: number;
    comments: number;
  };
}

const SuggestionCard = ({ suggestion }: Props) => {
  return (
    /// change to grid
    <StyledBox
      sx={{
        alignItems: "center",
        color: COLORS.secondary.navy,
        display: "flex",
        justifyContent: "space-between",
        px: 4,
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Upvotes upvotes={suggestion.upvotes} />
        <Box sx={{ mx: 4 }}>
          <Box>
            <Link href={`/suggestions/${suggestion.id}`}>
              <Typography variant="h3">{suggestion.title}</Typography>
            </Link>
            <Typography variant="body2">{suggestion.description}</Typography>
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
              {suggestion.tags}
            </Typography>
          </StyledBox>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <ChatBubbleIcon sx={{ color: "#CDD2EE", mx: 2 }} />
        <Typography sx={{ fontWeight: 700 }} variant="body1">
          {suggestion.comments}
        </Typography>
      </Box>
    </StyledBox>
  );
};

export default SuggestionCard;

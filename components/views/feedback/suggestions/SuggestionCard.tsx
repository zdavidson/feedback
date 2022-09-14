import { Box, Typography } from "@mui/material";
import { COLORS } from "@/styles/theme/themeOptions";
import StyledBox from "@/components/shared/Box";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Link from "@/components/shared/Link";
import Upvotes from "@/components/shared/Upvotes";
import Tags from "@/components/shared/Tags";

interface Props {
  suggestion: {
    id: number;
    title: string;
    description: string;
    tags: { name: string };
    upvotes: number;
    comments: [];
  };
}

const SuggestionCard = ({ suggestion }: Props) => {
  return (
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
        <Upvotes
          suggestionID={suggestion.id}
          sx={{ flexDirection: "column" }}
          upvotes={suggestion.upvotes}
        />
        <Box sx={{ mx: 4 }}>
          <Box>
            <Link href={`/suggestions/${suggestion.id}`}>
              <Typography variant="h3">{suggestion.title}</Typography>
            </Link>
            <Typography variant="body2">{suggestion.description}</Typography>
          </Box>
          <Tags tag={suggestion.tags?.name} />
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <ChatBubbleIcon sx={{ color: "#CDD2EE", mx: 2 }} />
        <Typography sx={{ fontWeight: 700 }} variant="body1">
          {suggestion.comments.length}
        </Typography>
      </Box>
    </StyledBox>
  );
};

export default SuggestionCard;

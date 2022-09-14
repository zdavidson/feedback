import { Box, Typography } from "@mui/material";
import StyledBox from "@/components/shared/Box";
import CircleIcon from "@mui/icons-material/Circle";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { COLORS } from "@/styles/theme/themeOptions";
import Tags from "@/components/shared/Tags";
import Upvotes from "@/components/shared/Upvotes";
import { useMemo, useState } from "react";
import Link from "@/components/shared/Link";

interface Props {
  suggestion: any;
}

const RoadmapCard = ({ suggestion }: Props) => {
  const [color, setColor] = useState("");

  useMemo(() => {
    if (suggestion.statuses.name === "Planned") {
      setColor(COLORS.tertiary.tangerine);
    } else if (suggestion.statuses.name === "In-Progress") {
      setColor(COLORS.primary.magenta);
    } else {
      setColor(COLORS.tertiary.lightBlue);
    }
  }, [color]);

  console.log(suggestion);

  return (
    <StyledBox
      sx={{
        boxSizing: "border-box",
        borderTop: `6px solid ${color}`,
        mt: 3,
        mx: 0,
      }}
    >
      <Typography
        sx={{ alignItems: "center", display: "flex", mb: 1.5 }}
        variant="body1"
      >
        <CircleIcon
          sx={{
            color: color,
            fontSize: 8,
            mr: 2,
          }}
        />
        {suggestion.statuses.name}
      </Typography>
      <Link href={`/suggestions/${suggestion.id}`}>
        <Typography variant="h3">{suggestion.title}</Typography>
      </Link>
      <Typography variant="body1">{suggestion.description}</Typography>
      <Tags tag={suggestion.tags.name} />
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Upvotes
          suggestionID={suggestion.id}
          sx={{
            display: "flex",
            height: 40,
            justifyContent: "space-between",
            px: 1.75,
            width: 60,
          }}
          upvotes={suggestion.upvotes}
        />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ChatBubbleIcon sx={{ color: "#CDD2EE", mx: 2 }} />
          <Typography sx={{ fontWeight: 700 }} variant="body1">
            {suggestion.comments.length}
          </Typography>
        </Box>
      </Box>
    </StyledBox>
  );
};

export default RoadmapCard;

import { Typography } from "@mui/material";
import { COLORS } from "../../../../styles/theme/themeOptions";
import StyledBox from "../../../shared/StyledBox";

interface FeedbackCardProps {
  description: string;
  title: string;
}

const FeedbackCard = ({ description, title }: FeedbackCardProps) => {
  return (
    <StyledBox
      sx={{
        backgroundColor: COLORS.primary.white,
        color: COLORS.secondary.navy,
      }}
    >
      <Typography variant="h3">{title}</Typography>
      <Typography variant="body1">{description}</Typography>
    </StyledBox>
  );
};

export default FeedbackCard;

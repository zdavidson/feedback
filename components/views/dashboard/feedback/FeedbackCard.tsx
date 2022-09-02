import { Typography } from "@mui/material";
import { COLORS } from "../../../../styles/theme/themeOptions";
import StyledBox from "../../../shared/StyledBox";

const FeedbackCard = () => {
  return (
    <StyledBox
      sx={{
        backgroundColor: COLORS.primary.white,
        color: COLORS.secondary.navy,
      }}
    >
      <Typography variant="h3">Feedback Card</Typography>
      Description{" "}
    </StyledBox>
  );
};

export default FeedbackCard;

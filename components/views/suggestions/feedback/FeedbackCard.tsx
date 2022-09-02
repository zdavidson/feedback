import { Typography } from "@mui/material";
import { COLORS } from "../../../../styles/theme/themeOptions";
import StyledBox from "../../../shared/StyledBox";

const FeedbackCard = ({ data }: any) => {
  return (
    <StyledBox
      sx={{
        backgroundColor: COLORS.primary.white,
        color: COLORS.secondary.navy,
      }}
    >
      <Typography variant="h3">{data.title}</Typography>
      {data.description}
    </StyledBox>
  );
};

export default FeedbackCard;

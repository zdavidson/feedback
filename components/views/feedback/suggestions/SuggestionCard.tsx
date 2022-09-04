import { Typography } from "@mui/material";
import { COLORS } from "../../../../styles/theme/themeOptions";
import StyledBox from "../../../shared/StyledBox";

interface Props {
  description: string;
  title: string;
}

const SuggestionCard = ({ description, title }: Props) => {
  return (
    <StyledBox
      sx={{
        backgroundColor: COLORS.primary.white,
        color: COLORS.secondary.navy,
      }}
    >
      <Typography variant="h3">{title}</Typography>
      <Typography variant="body2">{description}</Typography>
    </StyledBox>
  );
};

export default SuggestionCard;

import { Box, Typography } from "@mui/material";
import { COLORS } from "../../../../styles/theme/themeOptions";
import StyledBox from "../../../shared/StyledBox";
import StyledButton from "../../../shared/StyledButton";

interface Props {
  description: string;
  title: string;
  tags: [string];
  upvotes: number;
  comments: number;
}

const SuggestionCard = ({
  description,
  title,
  tags,
  upvotes,
  comments,
}: Props) => {
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
        <StyledButton
          backgroundColor={COLORS.background}
          onClick={() => console.log("clicked")}
          sx={{
            alignItems: "center",
            color: "black",
            flexDirection: "column",
            height: "fit-content",
            py: 1,
            px: 1.5,
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
            {upvotes}
          </Typography>
        </StyledButton>
        <Box sx={{ mx: 4 }}>
          <Box>
            <Typography variant="h3">{title}</Typography>
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
            {" "}
            <Typography
              sx={{ color: COLORS.primary.blue, fontWeight: 700 }}
              variant="body2"
            >
              {tags}
            </Typography>
          </StyledBox>
        </Box>
      </Box>
      <Box>{comments}</Box>
    </StyledBox>
  );
};

export default SuggestionCard;

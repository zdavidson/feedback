import { Box } from "@mui/material";
import { COLORS } from "../../../../../styles/theme/themeOptions";
import StyledBox from "../../../../shared/StyledBox";

interface TagProps {
  tags: string[];
}

const Tags = ({ tags }: TagProps) => {
  return (
    <StyledBox
      sx={{
        backgroundColor: COLORS.primary.white,
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {tags?.map((tag, key) => (
        <Box
          key={key}
          sx={{
            backgroundColor: COLORS.secondary.grey.s60,
            borderRadius: 2,
            m: 0.75,
            px: 2,
            py: 1,
          }}
        >
          {tag}
        </Box>
      ))}
    </StyledBox>
  );
};

export default Tags;

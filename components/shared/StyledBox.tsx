import { Box } from "@mui/material";

const StyledBox = ({ children, sx }: any) => {
  return <Box sx={{ ...sx, borderRadius: 2, p: 3, m: 2 }}>{children}</Box>;
};

export default StyledBox;

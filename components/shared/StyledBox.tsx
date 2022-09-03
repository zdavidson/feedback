import { Box } from "@mui/material";

interface StyledBoxProps {
  children: JSX.Element | JSX.Element[];
  sx: {};
}

const StyledBox = ({ children, sx }: StyledBoxProps) => {
  return <Box sx={{ ...sx, borderRadius: 2, p: 3, m: 2 }}>{children}</Box>;
};

export default StyledBox;

import { Box } from "@mui/material";
import { ElementType, ReactNode } from "react";

interface StyledBoxProps {
  children: ReactNode;
  component?: ElementType<any>;
  sx?: {};
}

const StyledBox = ({ children, component, sx }: StyledBoxProps) => {
  return (
    <Box component={component} sx={{ borderRadius: 2, p: 3, m: 2, ...sx }}>
      {children}
    </Box>
  );
};

export default StyledBox;

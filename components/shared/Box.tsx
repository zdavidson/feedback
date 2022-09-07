import { Box as MuiBox } from "@mui/material";
import { ElementType, ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
  component?: ElementType<any>;
  sx?: {};
}

const Box = ({ children, component, sx }: BoxProps) => {
  return (
    <MuiBox component={component} sx={{ borderRadius: 2, p: 3, m: 2, ...sx }}>
      {children}
    </MuiBox>
  );
};

export default Box;
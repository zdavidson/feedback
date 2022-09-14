import { COLORS } from "@/styles/theme/themeOptions";
import { Box as MuiBox } from "@mui/material";
import { ElementType, ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
  component?: ElementType<any>;
  onSubmit?: any;
  sx?: {};
}

const Box = ({ children, component, onSubmit, sx }: BoxProps) => {
  return (
    <MuiBox
      component={component}
      onSubmit={onSubmit}
      sx={{
        borderRadius: 2,
        backgroundColor: COLORS.primary.white,
        p: 3,
        m: 2,
        ...sx,
      }}
    >
      {children}
    </MuiBox>
  );
};

export default Box;

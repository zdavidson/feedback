import { Box as MuiBox, SxProps, Theme } from "@mui/material";
import { ElementType, FormEvent, ReactNode } from "react";

import { COLORS } from "@/styles/theme/themeOptions";

interface BoxProps {
  children: ReactNode;
  component?: ElementType<any>;
  onSubmit?: (e: FormEvent<HTMLDivElement>) => void;
  sx?: SxProps<Theme> | undefined;
}

const Box = ({ children, component, onSubmit, sx }: BoxProps) => {
  return (
    <MuiBox
      component={component}
      onSubmit={onSubmit}
      sx={{
        backgroundColor: COLORS.primary.white,
        borderRadius: 2,
        m: 2,
        p: 3,
        ...sx,
      }}
    >
      {children}
    </MuiBox>
  );
};

export default Box;

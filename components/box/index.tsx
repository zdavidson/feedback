import { COLORS } from "@/styles/theme/themeOptions";
import { Box as MuiBox, SxProps, Theme } from "@mui/material";
import { ElementType, FormEvent, ReactNode } from "react";

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

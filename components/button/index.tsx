import { COLORS } from "@/styles/theme/themeOptions";
import MuiButton from "@mui/material/Button";
import { ReactNode } from "react";

interface ButtonProps {
  backgroundColor?: string;
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  sx?: object;
}

const Button = ({
  backgroundColor = COLORS.primary.magenta,
  children,
  onClick,
  type,
  sx,
}: ButtonProps) => {
  return (
    <MuiButton
      sx={{
        backgroundColor: backgroundColor,
        borderRadius: 3,
        boxShadow: "none",
        color: COLORS.primary.white,
        textTransform: "none",
        px: 3,
        py: 1,
        ...sx,
      }}
      onClick={onClick}
      type={type}
      variant="contained"
    >
      {children}
    </MuiButton>
  );
};

export default Button;

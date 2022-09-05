import { COLORS } from "../../styles/theme/themeOptions";
import Button from "@mui/material/Button";
import { ReactNode } from "react";

interface ButtonProps {
  backgroundColor?: string;
  children: ReactNode;
  onClick: () => void;
  sx?: object;
}

const StyledButton = ({
  backgroundColor = COLORS.primary.magenta,
  children,
  onClick,
  sx,
}: ButtonProps) => {
  return (
    <Button
      sx={{
        backgroundColor: backgroundColor,
        color: COLORS.primary.white,
        px: 3,
        py: 1,
        ...sx,
      }}
      onClick={onClick}
      variant="contained"
    >
      {children}
    </Button>
  );
};

export default StyledButton;

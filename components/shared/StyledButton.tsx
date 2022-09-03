import { COLORS } from "../../styles/theme/themeOptions";
import Button from "@mui/material/Button";

interface ButtonProps {
  backgroundColor?: string;
  children: string;
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
        ...sx,
        backgroundColor: backgroundColor,
        color: COLORS.primary.white,
        px: 3,
        py: 1,
      }}
      onClick={onClick}
      variant="contained"
    >
      {children}
    </Button>
  );
};

export default StyledButton;

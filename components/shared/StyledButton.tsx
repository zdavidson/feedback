import { COLORS } from "../../styles/theme/themeOptions";
import Button from "@mui/material/Button";

type ButtonProps = {
  backgroundColor?: string;
  children: string;
  sx?: object;
};

const StyledButton = ({
  backgroundColor = COLORS.primary.magenta,
  children,
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
      variant="contained"
    >
      {children}
    </Button>
  );
};

export default StyledButton;

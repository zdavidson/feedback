import { COLORS } from "@/styles/theme/themeOptions";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { ReactNode } from "react";

const StyledBox = styled(Box)({
  alignItems: "center",
  backgroundColor: COLORS.background,
  borderRadius: 6,
  color: "black",
  display: "flex",
  flexDirection: "column",
  height: 55,
  justifyContent: "center",
  py: 1,
  px: 1.25,
  width: 40,

  "&:hover": {
    backgroundColor: "#CFD7FF",
    cursor: "pointer",
  },

  "&.clicked": {
    backgroundColor: COLORS.primary.blue,
    color: COLORS.primary.white,
  },
});

interface Props {
  children: ReactNode;
  className?: string;
  onClick: () => void;
  sx?: any;
}

const ButtonBox = ({ className, children, onClick, sx }: Props) => {
  return (
    <StyledBox className={className} onClick={onClick} sx={sx}>
      {children}
    </StyledBox>
  );
};

export default ButtonBox;

import { COLORS } from "@/styles/theme/themeOptions";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { useState } from "react";
import { ReactNode } from "react";

const StyledBox = styled(Box)({
  alignItems: "center",
  backgroundColor: COLORS.background,
  borderRadius: 6,
  display: "flex",
  py: 1,
  px: 1.25,

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
  onClick?: () => void;
  sx?: any;
}

const ButtonBox = ({ className, children, onClick, sx }: Props) => {
  const [clicked, setClicked] = useState(false);

  const handleSelection = () => {
    setClicked(!clicked);
  };

  return (
    <StyledBox
      className={className || clicked ? "clicked" : ""}
      onClick={onClick || handleSelection}
      sx={{ ...sx }}
    >
      {children}
    </StyledBox>
  );
};

export default ButtonBox;

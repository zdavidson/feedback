import styled from "@emotion/styled";
import { Box, SxProps, Theme } from "@mui/material";
import { ReactNode, useState } from "react";

import { COLORS } from "@/styles/theme/themeOptions";

const StyledBox = styled(Box)({
  alignItems: "center",
  backgroundColor: COLORS.background,
  borderRadius: 6,
  display: "flex",
  px: 1.25,
  py: 1,

  "&.clicked": {
    backgroundColor: COLORS.primary.blue,
    color: COLORS.primary.white,
  },

  "&:hover": {
    backgroundColor: "#CFD7FF",
    cursor: "pointer",
  },
});

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => Promise<void> | any;
  sx?: SxProps<Theme> | undefined;
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

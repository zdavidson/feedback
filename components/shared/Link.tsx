import { COLORS } from "../../styles/theme/themeOptions";
import { styled, Typography } from "@mui/material";
import NextLink from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  href: string;
}

const StyledLink = styled(Typography)({
  "&:hover": {
    color: COLORS.primary.blue,
    cursor: "pointer",
  },
});

const Link = ({ href, children }: Props) => {
  return (
    <NextLink href={href}>
      <StyledLink>{children}</StyledLink>
    </NextLink>
  );
};

export default Link;

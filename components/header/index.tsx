import { useRouter } from "next/router";
import { ReactNode } from "react";

import StyledBox from "@/components/box";
import Button from "@/components/button";
import { COLORS } from "@/styles/theme/themeOptions";

interface Props {
  children: ReactNode;
}

const Header = ({ children }: Props) => {
  const router = useRouter();

  return (
    <StyledBox
      sx={{
        backgroundColor: COLORS.primary.navy,
        color: COLORS.primary.white,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {children}
      <Button onClick={() => router.push("/suggestions/add")}>
        + Add Feedback
      </Button>
    </StyledBox>
  );
};

export default Header;

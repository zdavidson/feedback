import { COLORS } from "../../../../styles/theme/themeOptions";
import StyledBox from "../../../shared/StyledBox";

const Header = () => {
  return (
    <StyledBox
      sx={{ backgroundColor: COLORS.primary.navy, color: COLORS.primary.white }}
    >
      Header
    </StyledBox>
  );
};

export default Header;

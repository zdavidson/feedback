import { Box } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const DecorativeCircle = ({ children }: Props) => {
  return (
    <Box
      sx={{
        alignItems: "center",
        background: "linear-gradient(0.55turn, #E84D70, #A337F6, #28A7ED)",
        borderRadius: 50,
        display: "flex",
        justifyContent: "center",
        padding: 1.5,
        position: "absolute",
        transform: "translate(0px,-70px)",
        width: 60,
      }}
    >
      {children}
    </Box>
  );
};

export default DecorativeCircle;

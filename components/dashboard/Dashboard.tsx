import { Container } from "@mui/material";
import Main from "./mainContent/MainContent";
import SideBar from "./sidebar/SideBar";

const Dashboard = () => {
  return (
    <Container
      sx={{
        display: "flex",
        mt: 2,
      }}
    >
      <SideBar />
      <Main />
    </Container>
  );
};

export default Dashboard;

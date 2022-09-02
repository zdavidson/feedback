import { Container } from "@mui/material";
import FeedbackList from "./feedback/FeedbackList";
import Header from "./header/Header";
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
      <Header />
      <FeedbackList />
    </Container>
  );
};

export default Dashboard;

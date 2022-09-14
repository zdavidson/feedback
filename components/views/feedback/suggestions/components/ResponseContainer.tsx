import { Avatar, Box, Button, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

interface Props {
  response: any;
}

const ResponseContainer = ({ response }: Props) => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-between", mx: 3, my: 4 }}
    >
      <Avatar sx={{ mr: 5 }}>
        <AccountCircleIcon />
      </Avatar>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontWeight: 700 }} variant="body2">
              {response.users.name}
            </Typography>
            <Typography variant="body2">{response.users.userName}</Typography>
          </Box>
          <Button sx={{ textTransform: "none" }}>Reply</Button>
        </Box>
        <Box>{response.content}</Box>
      </Box>
    </Box>
  );
};

export default ResponseContainer;

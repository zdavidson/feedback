import { Box, FormControl, Modal, TextField, Typography } from "@mui/material";
import { User } from "@supabase/supabase-js";
import {
  BaseSyntheticEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import { supabase } from "utils/supabaseClient";

import StyledBox from "@/components/box";
import { COLORS } from "@/styles/theme/themeOptions";

import Button from "../button";

interface Props {
  setUser: Dispatch<SetStateAction<User | null>>;
}

const Login = ({ setUser }: Props) => {
  const [open, setOpen] = useState(false);

  const handleLogin = async (e: BaseSyntheticEvent) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email: e.target.email.value,
      password: e.target.password.value,
    });

    if (error) {
      console.log("Error: ", error);
    }

    if (data) {
      setUser(data.user);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Login</Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            mx: "40vw",
            mt: "25vh",
          }}
        >
          <FormControl>
            <StyledBox
              component="form"
              onSubmit={(e: FormEvent<HTMLDivElement>) => handleLogin(e)}
              // onSubmit={(e: FormEvent<HTMLDivElement>) => {
              //   e.preventDefault();
              //   console.log(e);
              // }}
              sx={{
                backgroundColor: COLORS.primary.white,
                display: "flex",
                flexDirection: "column",
                px: 6,
                py: 5,
              }}
            >
              <Typography variant="h1" sx={{ my: 2 }}>
                Login
              </Typography>
              <TextField label="Email" id="email" name="email" required />
              <TextField
                id="password"
                label="Password"
                name="password"
                sx={{ my: 1 }}
                type="password"
                required
              />
              <Button type="submit" sx={{ mt: 2 }}>
                Login
              </Button>
            </StyledBox>
          </FormControl>
        </Box>
      </Modal>
    </>
  );
};

export default Login;

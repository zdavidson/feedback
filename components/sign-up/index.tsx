import { Box, FormControl, Modal, TextField, Typography } from "@mui/material";
import { BaseSyntheticEvent, FormEvent, useState } from "react";
import { supabase } from "utils/supabaseClient";

import StyledBox from "@/components/box";
import { COLORS } from "@/styles/theme/themeOptions";

import Button from "../button";

const SignUp = () => {
  const [open, setOpen] = useState(false);

  const handleSignUp = async (e: BaseSyntheticEvent) => {
    const { data, error } = await supabase.auth.signUp({
      email: e.target.email.value,
      password: e.target.password.value,
      options: {
        data: {
          first_name: e.target.first_name.value,
          last_name: e.target.last_name.value,
          username: e.target.username.value,
        },
      },
    });

    if (error) {
      console.log("Error: ", error);
    }

    if (data) {
      console.log("Data: ", data);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)} sx={{ mx: 1 }}>
        Sign Up
      </Button>
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
              onSubmit={(e: FormEvent<HTMLDivElement>) => handleSignUp(e)}
              sx={{
                backgroundColor: COLORS.primary.white,
                display: "flex",
                flexDirection: "column",
                px: 6,
                py: 5,
              }}
            >
              <Typography variant="h1" sx={{ my: 2 }}>
                Sign Up
              </Typography>
              <TextField
                label="First Name"
                id="first_name"
                name="first_name"
                required
              />
              <TextField
                label="Last Name"
                id="last_name"
                name="last_name"
                required
              />
              <TextField
                label="@username"
                id="username"
                name="username"
                required
              />

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
                Sign Up
              </Button>
            </StyledBox>
          </FormControl>
        </Box>
      </Modal>
    </>
  );
};

export default SignUp;

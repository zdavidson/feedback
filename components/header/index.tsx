import { Box } from "@mui/material";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/router";
import { ReactNode, useMemo, useState } from "react";
import { supabase } from "utils/supabaseClient";

import StyledBox from "@/components/box";
import Button from "@/components/button";
import { COLORS } from "@/styles/theme/themeOptions";

import Login from "../login";
import SignUp from "../sign-up";

interface Props {
  children: ReactNode;
}

const Header = ({ children }: Props) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  // const { data, error } = await supabase.auth.getSession();

  useMemo(async () => {
    const { data } = await supabase.auth.getUser();
    if (data) {
      setUser(data.user);
    } else return;
  }, []);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    window.location.reload();
    if (error) {
      console.log("Error: ", error);
    }
  };

  // const getUser = async () => {
  //   const { data } = await supabase.auth.getUser();
  //   console.log(data);
  // };

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
      <Box sx={{ display: "flex" }}>
        {user ? (
          <Button onClick={() => handleSignOut()}>Sign Out</Button>
        ) : (
          <>
            <Login setUser={setUser} />
            <SignUp />
          </>
        )}
      </Box>
      {/* <Button onClick={() => getUser()}>Get User</Button> */}
      <Button onClick={() => router.push("/suggestions/add")}>
        + Add Feedback
      </Button>{" "}
    </StyledBox>
  );
};

export default Header;

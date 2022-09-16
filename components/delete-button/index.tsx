import { Snackbar } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { supabase } from "utils/supabaseClient";

import Button from "../button";

const DeleteButton = ({ id }: any) => {
  const [open, setOpen] = React.useState(false);
  const queryClient = useQueryClient();

  const handleDelete = async (id: string | string[] | undefined | number) => {
    const { data, error } = await supabase
      .from("suggestions")
      .delete()
      .eq("id", id)
      .select();

    if (error) {
      console.log("Error: ", error);
    }

    if (data) {
      setOpen(true);
      queryClient.refetchQueries({ queryKey: ["suggestions-list"] });
    }
  };

  return (
    <>
      <Button
        backgroundColor="red"
        onClick={() => handleDelete(id)}
        sx={{ height: "fit-content", m: 0 }}
      >
        Delete
      </Button>
      <Snackbar
        anchorOrigin={{ horizontal: "left", vertical: "top" }}
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
        message="Delete successful"
      />
    </>
  );
};

export default DeleteButton;

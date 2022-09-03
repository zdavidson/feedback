import { TextField } from "@mui/material";
import { useState, ChangeEvent } from "react";
import { COLORS } from "../../styles/theme/themeOptions";

interface TextFieldProps {
  height?: number;
  id: string;
}

const StyledTextField = ({ height, id }: TextFieldProps) => {
  const [value, setValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <TextField
      id={id}
      InputProps={{
        disableUnderline: true,
        sx: {
          backgroundColor: COLORS.background,
          borderRadius: 2,
          height: height || null,
        },
      }}
      maxRows={4}
      onChange={handleChange}
      sx={{
        my: 2,
      }}
      value={value}
      variant="filled"
      fullWidth
      multiline
    />
  );
};

export default StyledTextField;

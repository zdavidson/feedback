import { TextField as MuiTextField } from "@mui/material";
import { ChangeEvent, useState } from "react";

import { COLORS } from "@/styles/theme/themeOptions";

interface TextFieldProps {
  height?: number;
  id: string;
  label?: string;
  name?: string;
}

const TextField = ({ height, id, label, name }: TextFieldProps) => {
  const [value, setValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <MuiTextField
      id={id}
      InputProps={{
        disableUnderline: true,
        sx: {
          backgroundColor: COLORS.background,
          borderRadius: 2,
          height: height || null,
        },
      }}
      label={label}
      maxRows={4}
      name={name}
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

export default TextField;

import { TextField, TextFieldProps } from "@mui/material";

export const CustomTextField = ({
  label,
  type,
  ...rest
}: {
  label: string;
  type: string;
} & TextFieldProps) => {
  return (
    <TextField
      fullWidth
      required
      id="outlined-basic"
      label={label}
      variant="outlined"
      size="medium"
      type={type}
      {...rest}
      sx={{
        "& label.Mui-focused": {
          color: "white", // Change label color when focused
        },
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": {
            borderColor: "white", // Change border color when focused
          },
        },
      }}
    />
  );
};

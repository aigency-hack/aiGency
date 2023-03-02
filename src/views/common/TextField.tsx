import styled from "@emotion/styled";
import { TextField, TextFieldProps } from "@mui/material";

// export type NumberInputProps = Omit<TextFieldProps, 'type'> &
//   RestrictedNumberInputParams

export const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-input {
    padding: 12px;
    color: black;
    width: 100%;
  }
  .Mui-focused {
    border: 1px solid #d38e3a !important;
  }
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
`;

export function TextInput({ ...props }: TextFieldProps) {
  return <StyledTextField {...props} type="text" />;
}

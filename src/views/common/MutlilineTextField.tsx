import styled from "@emotion/styled";
import { TextField, TextFieldProps } from "@mui/material";

// export type NumberInputProps = Omit<TextFieldProps, 'type'> &
//   RestrictedNumberInputParams

export const StyledMutliTextField = styled(TextField)`
  .MuiOutlinedInput-input {
    color: black;
    width: 100%;
  }
  .Mui-focused {
    border: 1px solid #d38e3a !important;
  }
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
`;

export function MutlilineTextInput({ ...props }: TextFieldProps) {
  return <StyledMutliTextField {...props} type="text" />;
}

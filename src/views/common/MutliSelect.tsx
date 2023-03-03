import { Select, MenuItem } from "@mui/material";
import styled from "@emotion/styled";

type Option = {
  value: any;
  label: string;
};

export const StyledSelect = styled(Select)`
  .MuiSelect-select {
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
  color: black !important;
`;

export const BaseMultiSelect = ({
  options,
  onChange,
  value,
}: {
  options: Option[];
  onChange: any;
  value: string[];
}) => (
  <StyledSelect
    fullWidth
    id="demo-simple-select"
    sx={{
      color: "black !important",
      "& .MuiSelect-icon": {
        color: "black",
      },
    }}
    multiple
    value={value}
    onChange={(val) => onChange(val)}
  >
    {options.map((option) => (
      <MenuItem value={option.value} key={option.label}>
        {option.label}
      </MenuItem>
    ))}
  </StyledSelect>
);

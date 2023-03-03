import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

type Props = {
  onClick?: any;
  color: string;
  children: any;
};

export default function Pill({ onClick, color, children }: Props) {
  return (
    <Box
      sx={{ bgcolor: color, padding: "12px 24px", borderRadius: "24px" }}
      onClick={() => onClick()}
    >
      <Typography fontWeight="600">{children}</Typography>
    </Box>
  );
}

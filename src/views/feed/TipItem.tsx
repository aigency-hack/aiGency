import Box from "@mui/material/Box";
import { Typography, Divider } from "@mui/material";
import Pill from "../common/Pill";
import { PrimaryButton } from "../common/PrimaryButton";
import Bolt from "@mui/icons-material/Bolt";

type Props = {
  onClick?: any;
  color: string;
  children: any;
};

const colorConstant = {
  "Social media & Ads": "#FFE6A9",
  "Blog content": "#F2D4FF",
  Marketing: "#FFD2D1",
};
export default function TipItem() {
  return (
    <>
      <Box marginTop="24px" marginBottom="24px">
        <Typography fontWeight="600" color="#6A6A6A">
          Topic name
        </Typography>
        <Box marginTop="8px">
          <Typography fontWeight="700" fontSize="20px" color="#252525">
            {" "}
            Lorem ipsum dolor sit amet consectetur. Eu tincidunt id tortor morbi mi convallis.
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ bgcolor: "rgba(0, 0, 0, 0.2)" }} />
    </>
  );
}

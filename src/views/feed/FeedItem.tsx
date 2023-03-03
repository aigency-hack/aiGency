import Box from "@mui/material/Box";
import { Typography, Divider } from "@mui/material";
import Pill from "../common/Pill";
import { PrimaryButton } from "../common/PrimaryButton";
import Bolt from "@mui/icons-material/Bolt";

const colorConstant = {
  "Social media & Ads": "#FFE6A9",
  "Blog content": "#F2D4FF",
  Marketing: "#FFD2D1",
};
export default function FeedItem() {
  return (
    <>
      <Box marginTop="32px">
        <Box display="flex" alignItems="center">
          <img src="/static/icon/phone.svg" />
          <Box mx="16px">
            <Pill color={colorConstant["Social media & Ads"]} onClick={() => console.log("")}>
              Social media & Ads
            </Pill>
          </Box>
          <Typography>3 March</Typography>
        </Box>
        <Box display="flex" paddingRight="64px" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography fontWeight="700" variant="h3">
              Lorem ipsum dolor sit amet consectetur. Eu tincidunt id tortor morbi mi convallis.
            </Typography>
            <Box marginTop="16px">
              Lorem ipsum dolor sit amet consectetur. Eu tincidunt id tortor morbi mi convallis.
            </Box>
          </Box>
          <Box>
            <img width="140px" height="140px" src="" />
          </Box>
        </Box>
        <PrimaryButton sx={{ borderRadius: "24px" }} startIcon={<Bolt />}>
          More from this topic
        </PrimaryButton>
      </Box>
      <Divider sx={{ marginTop: "32px", bgcolor: "rgba(0, 0, 0, 0.2)" }} />
    </>
  );
}

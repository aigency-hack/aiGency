import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { StepIconProps, Typography } from "@mui/material";

const steps = ["Create Profile", "Brand details", "Type of contents"];

type Props = {
  onChange: any;
  value: any;
};

type ContentBoxProps = {
  children: any;
  active: boolean;
};

const ContentBox = ({ children, active }: ContentBoxProps) => {
  return (
    <Box
      sx={{
        border: active ? "" : "1px solid rgba(0, 0, 0, 0.2)",
        color: active ? "white" : "black",
        backgroundColor: active ? "#0D1A2D" : "",
      }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="calc(50% - 16px)"
      height="136px"
      padding="12px 24px"
      marginRight="16px"
      borderRadius="12px"
    >
      <Typography fontWeight="600">{children}</Typography>
    </Box>
  );
};

export default function ContentSelector({ onChange, value }: Props) {
  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex" justifyContent="space-around">
        <ContentBox>Social media & Ads</ContentBox>
        <ContentBox>Blog content</ContentBox>
      </Box>
      <Box marginTop="16px" display="flex" justifyContent="space-around">
        <ContentBox>Website copy & SEO</ContentBox>
        <ContentBox>Marketing</ContentBox>
      </Box>
    </Box>
  );
}

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { StepIconProps } from "@mui/material";

const steps = ["Create Profile", "Brand details", "Type of contents"];

type Props = {
  activeStep: number;
};

function CustomStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  if (active) {
    return <img src="/static/icon/active.svg" />;
  } else if (completed) {
    return <img src="/static/icon/complete.svg" />;
  } else {
    return <img src="/static/icon/normal.svg" />;
  }
}

export default function BaseStepper({ activeStep }: Props) {
  return (
    <Box
      sx={{
        ".MuiStepLabel-label": {
          color: "#0D1A2D !important",
        },
        ".Mui-completed": {
          color: "#0D1A2D !important",
        },
        width: "100%",
        // backgroundColor: 'red'
      }}
    >
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={CustomStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

import { Box, Drawer, Stepper, Typography } from "@mui/material";
import { FC, useState } from "react";
import { PrimaryButton } from "../common/PrimaryButton";
import { SecondaryButton } from "../common/SecondaryButton";
import { BaseSelect } from "../common/Select";
import BaseStepper from "../common/Stepper";
import { StyledTextField } from "../common/TextField";
import { FormType } from "./type/form.type";
import ArrowLeft from "@mui/icons-material/West";
import ArrowRight from "@mui/icons-material/East";
import ContentSelector from "../common/ContentSelector";

type Props = {
  value: FormType;
  onChange: any;
};

const options = [
  { label: "Ascending", value: 0 },
  { label: "Descending", value: 1 },
];

export const AIgencyForm: FC<Props> = ({ value, onChange }) => {
  const {
    name,
    category,
    description,
    sellingPoint,
    client,
    avgCost,
    sellingArea,
    toneOfVoice,
    content,
  } = value;
  const handleFormChange = (field: string, changeVal: any) => {
    const oldValue: any = { ...value };
    oldValue[field] = changeVal;
    onChange({ ...oldValue });
  };
  const [step, setStep] = useState(1);
  return (
    <Box bgcolor="white" padding="24px" borderRadius="24px" minWidth="548px">
      {step === 1 && (
        <>
          <Typography variant="h2">🥳 Create brand profile</Typography>
          <Box marginTop="32px">
            <Typography fontWeight="600">Brand Name</Typography>
            <Box marginTop="16px">
              <StyledTextField
                value={name}
                onChange={(e: any) => handleFormChange("name", e.target.value)}
                fullWidth
              />
            </Box>
          </Box>
          <Box marginTop="32px">
            <Typography fontWeight="600">Brand Category</Typography>
            <Box marginTop="16px">
              <BaseSelect
                value={category}
                options={options}
                onChange={(val) => handleFormChange("category", val)}
              />
            </Box>
          </Box>
          <Box marginTop="32px">
            <Typography fontWeight="600">Tell us about your brand</Typography>
            <Box marginTop="16px">
              <StyledTextField
                minRows="3"
                multiline
                placeholder=" e.g. Aigency is a service that leverages the power of AI writing to help brands and products generate high-quality marketing and content materials."
                fullWidth
                onChange={(e: any) => handleFormChange("description", e.target.value)}
                value={description}
              />
            </Box>
          </Box>
          <Box display="flex" justifyContent="center" marginTop="48px">
            <PrimaryButton onClick={() => setStep(2)} endIcon={<ArrowRight />}>
              Create Now
            </PrimaryButton>
          </Box>
        </>
      )}
      {step === 2 && (
        <>
          <BaseStepper activeStep={step} />
          <Box marginTop="32px">
            <Typography fontWeight="600">What's your unique selling point</Typography>
            <Box marginTop="16px">
              <StyledTextField
                placeholder="e.g Aigency"
                value={sellingPoint}
                onChange={(e: any) => handleFormChange("sellingPoint", e.target.value)}
                fullWidth
              />
            </Box>
          </Box>
          <Box marginTop="32px">
            <Typography fontWeight="600">Who's your client</Typography>
            <Box marginTop="16px">
              <BaseSelect
                value={client}
                options={options}
                onChange={(val) => handleFormChange("client", val)}
              />
            </Box>
          </Box>
          <Box marginTop="32px">
            <Typography fontWeight="600">How much does your product cost?</Typography>
            <Box marginTop="16px">
              <StyledTextField
                placeholder="e.g Aigency"
                value={avgCost}
                onChange={(e: any) => handleFormChange("avgCost", e.target.value)}
                fullWidth
              />
            </Box>
          </Box>
          <Box marginTop="32px">
            <Typography fontWeight="600">Area to sell</Typography>
            <Box marginTop="16px">
              <BaseSelect
                value={sellingArea}
                options={options}
                onChange={(val) => handleFormChange("sellingArea", val)}
              />
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between" marginTop="48px">
            <SecondaryButton onClick={() => setStep(1)} startIcon={<ArrowLeft />}>
              Back
            </SecondaryButton>
            <PrimaryButton onClick={() => setStep(3)} endIcon={<ArrowRight />}>
              Next
            </PrimaryButton>
          </Box>
        </>
      )}
      {step === 3 && (
        <>
          <BaseStepper activeStep={step} />
          <Box marginTop="32px">
            <Typography fontWeight="600">Tone of Voice</Typography>
            <Box marginTop="16px">
              <StyledTextField
                placeholder="e.g Professional"
                value={toneOfVoice}
                onChange={(e: any) => handleFormChange("toneOfVoice", e.target.value)}
                fullWidth
              />
            </Box>
          </Box>
          <Box marginTop="32px">
            <Typography fontWeight="600">Select contents that your need</Typography>
            <Box marginTop="16px">
              <ContentSelector />
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between" marginTop="48px">
            <SecondaryButton onClick={() => setStep(2)} startIcon={<ArrowLeft />}>
              Back
            </SecondaryButton>
            <PrimaryButton onClick={() => setStep(3)} endIcon={<ArrowRight />}>
              Let's get started
            </PrimaryButton>
          </Box>
        </>
      )}
    </Box>
  );
};

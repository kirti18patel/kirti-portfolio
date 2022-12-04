import React , {useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LaptopIcon from '@mui/icons-material/Laptop';
import { themeContext } from "../../Context";
import Redo from "@iconscout/react-unicons/icons/uil-redo";
import Check from "@iconscout/react-unicons/icons/uil-check";
import Up from "@iconscout/react-unicons/icons/uil-angle-double-up";
import Down from "@iconscout/react-unicons/icons/uil-angle-double-down";

const steps = [
  {
    label: 'Full Stack Developer',
    company: "Maket (Techstars '21) · Permanent Full-time",
    duration: "Nov 2021 - Nov 2022 · Montreal, Quebec, Canada",
    },
  {
    label: 'Junior Web Developer',
    company: "Alliance Tech · Permanent Full-time",
    duration: "Aug 2019 - Aug 2020 · India",
    },
  {
    label: 'Web Designer',
    company: "Onetech Solutions · Internship",
    duration: "Oct 2018 - Jan 2019 · India",
    },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }} className="m-hidden">
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel StepIconComponent={LaptopIcon} sx={{ color: "var(--secondary)" }}>
                <Typography sx={{ color: darkMode ? "white" : "" }}>{step.label}</Typography>
            </StepLabel>
            <StepContent>
              <Typography variant="body2" sx={{ color: darkMode ? "white" : "" }}>{step.company}</Typography>
              <Typography variant="caption" sx={{ color: darkMode ? "white" : "" }}>{step.duration}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? <Check color="var(--primary)" size={"1.5rem"}/> : <Down color="var(--primary)" size={"1.5rem"}/> }
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    <Up color={index !== 0 ? "var(--primary)" : "transparent"} size={"1.5rem"}/>
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            <Redo color="var(--primary)" size={"1rem"} />
        </Button>
      )}
    </Box>
  );
}
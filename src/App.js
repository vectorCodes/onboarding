import { lazy, Suspense, useState } from "react";
import { Center } from "@chakra-ui/react";

import Stepper from "./components/Stepper";
import CenteredLayout from "./layouts/Centered";
import Logo from "./components/Logo";

const Step01 = lazy(() => import("./components/Steps/01"));
const Step02 = lazy(() => import("./components/Steps/02"));
const Step03 = lazy(() => import("./components/Steps/03"));
const Step04 = lazy(() => import("./components/Steps/04"));

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <CenteredLayout>
      <Center>
        <Logo />
      </Center>
      <Stepper
        currentStep={currentStep}
        onStepChange={(step) => {
          setCurrentStep(step);
        }}
      />

      <Suspense fallback="Loading...">
        {currentStep === 1 ? (
          <Step01 />
        ) : currentStep === 2 ? (
          <Step02 />
        ) : currentStep === 3 ? (
          <Step03 />
        ) : (
          <Step04 />
        )}
      </Suspense>
    </CenteredLayout>
  );
}

export default App;

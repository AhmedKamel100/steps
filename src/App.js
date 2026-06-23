import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [step, setStep] = useState(1);

  function handleClose() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button className="close" onClick={handleClose}>
        &times;
      </button>
      {isOpen && <Steps step={step} setStep={setStep} />}
    </div>
  );
}

function Steps({ step, setStep }) {
  return (
    <div className="steps">
      <StepList step={step} />
      <StepMessage step={step} />
      <StepActions step={step} setStep={setStep} />
    </div>
  );
}

function StepList({ step }) {
  return (
    <div className="numbers">
      {messages.map((_, index) => {
        return <StepNumbers step={step} index={index} />;
      })}
    </div>
  );
}

function StepNumbers({ step, index }) {
  return <div className={step >= index + 1 ? "active" : null}>{index + 1}</div>;
}

function StepMessage({ step }) {
  return (
    <p className="message">
      step {step} {messages[step - 1]}
    </p>
  );
}

function StepActions({ step, setStep }) {
  const style = {
    backgroundColor: "#7950ff",
    color: "white",
  };
  function handlePrevious() {
    if (step === 1) return;
    setStep(step - 1);
  }

  function handleNext() {
    if (step === 3) return;
    setStep(step + 1);
  }

  return (
    <div className="buttons">
      <button style={style} onClick={handlePrevious}>
        Previous
      </button>
      <button style={style} onClick={handleNext}>
        Next
      </button>
    </div>
  );
}

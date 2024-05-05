import React, { useState } from 'react';
import { StepperProps, StepProps } from './Stepper.types';

const Step: React.FC<StepProps> = ({ label, index, isActive }) => {
    const activeClass = isActive ? 'bg-neuralpulse-green text-white' : 'bg-neuralpulse-gray text-neuralpulse-dark';
    return (
        <div className={`px-4 py-2 rounded-full ${activeClass}`}>
            {index + 1}. {label}
        </div>
    );
};

const Stepper: React.FC<StepperProps> = ({ steps, initialStep = 0 }) => {
    const [currentStep, setCurrentStep] = useState(initialStep);

    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <div>
            <div className="flex space-x-4 mb-4">
                {steps.map((step, index) => (
                    <Step key={index} label={step.label} index={index} isActive={index === currentStep} />
                ))}
            </div>
            <div>
                <button onClick={prevStep} disabled={currentStep === 0} className="mr-2 bg-neuralpulse-gray hover:bg-neuralpulse-dark text-white font-bold py-2 px-4 rounded">
                    Previous
                </button>
                <button onClick={nextStep} disabled={currentStep === steps.length - 1} className="bg-neuralpulse-green hover:bg-neuralpulse-light-green text-white font-bold py-2 px-4 rounded">
                    Next
                </button>
            </div>
        </div>
    );
};

export default Stepper;

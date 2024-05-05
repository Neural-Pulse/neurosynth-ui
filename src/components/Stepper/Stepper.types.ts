export interface StepProps {
    label: string;
}

export interface StepperProps {
    steps: StepProps[];
    initialStep?: number;
}

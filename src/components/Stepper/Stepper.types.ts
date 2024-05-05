export interface StepProps {
    label: string;
    index: number;
    isActive: boolean;
}

export interface StepperProps {
    steps: StepProps[];
    initialStep?: number;
}

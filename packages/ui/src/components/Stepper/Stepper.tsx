import { forwardRef } from 'react';
import {
  Connector,
  StepContent,
  StepDescription,
  StepIndicator,
  StepItemWrapper,
  StepperContainer,
  StepTitle,} from './Stepper.styles';
import {StepItem,StepperProps,} from './Stepper.types';

export const Stepper = forwardRef<
  HTMLDivElement,
  StepperProps
>(
  (
    {
      steps,
      activeStep = 0,
      orientation = 'horizontal',
      variant = 'solid',
      className,
    },
    ref
  ) => {
    const getStepStatus = (
      step: StepItem,
      index: number
    ) => {
      if (step.status) {
        return step.status;
      }

      if (index < activeStep) {
        return 'completed';
      }

      if (index === activeStep) {
        return 'active';
      }

      return 'upcoming';
    };

    return (
      <StepperContainer
        ref={ref}
        className={className}
        $orientation={orientation}
        role="list"
      >
        {steps.map((step, index) => {
          const status =
            getStepStatus(step, index);

          const isLast =
            index === steps.length - 1;

          return (
            <StepItemWrapper
              key={step.id}
              $orientation={orientation}
              role="listitem"
            >
              <StepIndicator
                $status={status}
                $variant={variant}
                aria-current={
                  status === 'active'
                    ? 'step'
                    : undefined
                }
              >
                {step.icon || index + 1}
              </StepIndicator>

              <StepContent>
                <StepTitle>
                  {step.title}
                </StepTitle>

                {step.description && (
                  <StepDescription>
                    {step.description}
                  </StepDescription>
                )}
              </StepContent>

              {!isLast && (
                <Connector
                  $orientation={
                    orientation
                  }
                />
              )}
            </StepItemWrapper>
          );
        })}
      </StepperContainer>
    );
  }
);

Stepper.displayName = 'Stepper';
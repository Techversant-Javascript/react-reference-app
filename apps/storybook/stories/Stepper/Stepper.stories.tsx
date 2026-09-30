import type {Meta,StoryObj,} from '@storybook/react';
import { Stepper } from '@techv/ui';
  
  const meta: Meta<typeof Stepper> = {
    title: 'Components/Stepper',
    component: Stepper,
    tags: ['autodocs'],
  
    argTypes: {
      orientation: {
        control: 'select',
        options: [
          'horizontal',
          'vertical',
        ],
      },
  
      variant: {
        control: 'select',
        options: [
          'solid',
          'soft',
          'outline',
        ],
      },
    },
  
    args: {
      orientation: 'horizontal',
      variant: 'solid',
    },
  };
  
  export default meta;
  
  type Story = StoryObj<typeof Stepper>;
  
  const steps = [
    {
      id: '1',
      title: 'Account',
      description:
        'Create your account',
    },

    {
      id: '2',
      title: 'Verification',
      description:
        'Verify email address',
    },
    {
      id: '3',
      title: 'Completed',
      description:
        'Finish onboarding',
    },
  ];
  
  export const Horizontal: Story = {
    args: {
      steps,
      activeStep: 1,
      orientation: 'horizontal',
    },
  };
  
  export const Vertical: Story = {
    args: {
      steps,
      activeStep: 2,
      orientation: 'vertical',
    },
  };
  
  export const SoftVariant: Story = {
    args: {
      steps,
      variant: 'soft',
    },
  };
  
  export const OutlineVariant: Story = {
    args: {
      steps,
      variant: 'outline',
    },
  };
  
  export const ErrorStep: Story = {
    args: {
      steps: [
        steps[0],
        {
          ...steps[1],
          status: 'error',
        },
        steps[2],
      ],
    },
  };
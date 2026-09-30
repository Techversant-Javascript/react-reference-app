import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, IconButton } from '@techv/ui';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'soft', 'link'],
      description: 'Visual style of the button',
    },
    color: {
      control: 'select',
      options: ['brand', 'danger', 'success', 'warning', 'neutral'],
      description: 'Color scheme of the button',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the button',
    },
    isLoading: {
      control: 'boolean',
      description: 'Shows a loading spinner and disables the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
    },
    children: {
      control: 'text',
      description: 'Button label',
    },
  },
  args: {
    children: 'Click me',
    variant: 'solid',
    color: 'brand',
    size: 'md',
    isLoading: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Solid: Story = {
  args: { variant: 'solid', children: 'Solid Button' },
};

export const Outline: Story = {
  args: { variant: 'outline', children: 'Outline Button' },
};

export const Soft: Story = {
  args: { variant: 'soft', children: 'Soft Button' },
};

export const Link: Story = {
  args: { variant: 'link', children: 'Link Button' },
};

export const ExtraSmall: Story = {
  args: { size: 'xs', children: 'Extra Small' },
};

export const Small: Story = {
  args: { size: 'sm', children: 'Small Button' },
};

export const Medium: Story = {
  args: { size: 'md', children: 'Medium Button' },
};

export const Large: Story = {
  args: { size: 'lg', children: 'Large Button' },
};

export const ExtraLarge: Story = {
  args: { size: 'xl', children: 'Extra Large' },
};

export const Loading: Story = {
  args: { isLoading: true, children: 'Loading...' },
};

export const Disabled: Story = {
  args: { disabled: true, children: 'Disabled Button' },
};

export const WithLeftIcon: Story = {
  args: {
    leftIcon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>
    ),
    children: 'Download',
  },
};

export const WithRightIcon: Story = {
  args: {
    rightIcon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    ),
    children: 'Next',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col g-8 font-text">
      {(['brand', 'danger', 'success', 'warning', 'neutral'] as const).map(color => (
        <div key={color}>
          <h3 className="mb-3 capitalize">{color}</h3>
          <div className="flex g-3 flex-wrap items-center">
            {(['solid', 'outline', 'soft', 'link'] as const).map(variant => (
              <Button key={variant} color={color} variant={variant}>
                {variant}
              </Button>
            ))}
          </div>
        </div>
      ))}
      <div>
        <h3 className="mb-3">Sizes (brand / solid)</h3>
        <div className="flex g-3 items-center flex-wrap">
          {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => (
            <Button key={size} size={size}>
              {size}
            </Button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-3">States</h3>
        <div className="flex g-3 flex-wrap">
          <Button isLoading>Loading</Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>
    </div>
  ),
};

// IconButton stories
export const IconButtonStory: StoryObj<typeof IconButton> = {
  name: 'IconButton / Default',
  render: (args: ComponentProps<typeof IconButton>) => (
    <IconButton
      {...args}
      icon={
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      }
      aria-label="Close"
    />
  ),
  args: {
    variant: 'solid',
    color: 'brand',
    size: 'md',
    isLoading: false,
    disabled: false,
  },
};

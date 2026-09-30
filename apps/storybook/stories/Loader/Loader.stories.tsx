import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from '@techv/ui';

const meta: Meta<typeof Loader> = {
  title: 'Components/Loader',
  component: Loader,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['spinner', 'skeleton', 'progress', 'dots'],
      description: 'The visual variant of the loader',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the loader (applies to spinner and dots)',
    },
    color: {
      control: 'color',
      description: 'Custom color for the loader',
    },
    animation: {
      control: 'select',
      options: ['shimmer', 'pulse', 'none'],
      description: 'Animation type for skeleton variant',
    },
    shape: {
      control: 'select',
      options: ['rect', 'circle', 'text'],
      description: 'Shape of the skeleton variant',
    },
    value: {
      control: { type: 'number', min: 0, max: 100 },
      description: 'Current value for progress bar',
    },
    showValue: {
      control: 'boolean',
      description: 'Whether to show the percentage value in progress bar',
    },
  },
  args: {
    variant: 'spinner',
    size: 'md',
    animation: 'shimmer',
    shape: 'rect',
    value: 50,
    showValue: false,
  },
};

export default meta;
type Story = StoryObj<typeof Loader>;
export const Default: Story = {};
export const Spinner: Story = {
  args: {
    variant: 'spinner',
    size: 'md',
  },
};

export const Dots: Story = {
  args: {
    variant: 'dots',
    size: 'md',
  },
};

export const Skeleton: Story = {
  args: {
    variant: 'skeleton',
    width: 300,
    height: 20,
    shape: 'rect',
  },
};

export const ProgressBar: Story = {
  args: {
    variant: 'progress',
    value: 75,
    showValue: true,
    label: 'Downloading files...',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col g-8 p-4">
      <section className="flex flex-col">
        <h3 className="mb-4 font-text">Spinner Variants</h3>
        <div className="flex items-center g-4">
          <Loader variant="spinner" size="xs" />
          <Loader variant="spinner" size="sm" />
          <Loader variant="spinner" size="md" />
          <Loader variant="spinner" size="lg" />
          <Loader variant="spinner" size="xl" />
        </div>
      </section>

      <section className="flex flex-col">
        <h3 className="mb-4 font-text">Dots Variants</h3>
        <div className="flex items-center g-4">
          <Loader variant="dots" size="xs" />
          <Loader variant="dots" size="sm" />
          <Loader variant="dots" size="md" />
          <Loader variant="dots" size="lg" />
          <Loader variant="dots" size="xl" />
        </div>
      </section>

      <section className="flex flex-col">
        <h3 className="mb-4 font-text">Skeleton Shapes</h3>
        <div className="flex flex-col g-4">
          <div className="flex items-center g-4">
            <Loader variant="skeleton" shape="circle" width={50} />
            <div className="flex-1 flex flex-col g-2">
              <Loader variant="skeleton" shape="text" width="60%" />
              <Loader variant="skeleton" shape="text" width="40%" />
            </div>
          </div>
          <Loader variant="skeleton" shape="rect" height={150} />
        </div>
      </section>

      <section className="flex flex-col">
        <h3 className="mb-4 font-text">Progress Bar</h3>
        <div className="flex flex-col g-6">
          <Loader variant="progress" value={30} label="Standard Progress" />
          <Loader variant="progress" value={60} showValue label="With Percentage" color="var(--color-success-500)" />
          <Loader variant="progress" value={90} height={4} label="Slim Progress" color="var(--color-danger-500)" />
        </div>
      </section>
    </div>
  ),
};



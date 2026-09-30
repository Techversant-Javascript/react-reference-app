import { Meta, StoryObj } from '@storybook/react';
import { Card, Button } from '@techv/ui';
import styled from 'styled-components';


const StoryWrapper = styled.div`
  max-width: 360px;
  width: 100%;
`;

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],

  decorators: [
    (Story) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    ),
  ],


  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'outline', 'filled', 'ghost'],
      description: 'Visual style of the card',
    },

    cover: {
      control: false,
      description: 'Top section of the card (image or media)',
    },

    footer: {
      control: false,
      description: 'Bottom section of the card (actions like buttons)',
    },

    children: {
      control: 'text',
      description: 'Main content of the card',
    },

    className: {
      control: false,
      description: 'Custom class for styling',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    variant: 'elevated',
    children: (
      <>
        <Card.Title>Team Performance</Card.Title>
        <Card.Description>
          Track project progress, monitor tasks and collaborate
          with your team in one place.
        </Card.Description>
      </>
    ),
    footer: (
      <Button size="sm">
        View Details
      </Button>
    ),
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: (
      <>
        <Card.Title>Team Performance</Card.Title>
        <Card.Description>
          Track project progress, monitor tasks and collaborate
          with your team in one place.
        </Card.Description>
      </>
    ),
    footer: (
      <Button size="sm">
        View Details
      </Button>
    ),
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    children: (
      <>
        <Card.Title>Team Performance</Card.Title>
        <Card.Description>
          Track project progress, monitor tasks and collaborate
          with your team in one place.
        </Card.Description>
      </>
    ),
    footer: (
      <Button size="sm">
        View Details
      </Button>
    ),
  },
};

export const Clickable: Story = {
  args: {
    children: 'Clickable Card',
    onClick: () => alert('Card clicked'),
    className: 'cursor-pointer',
  },
};

export const LongContent: Story = {
  args: {
    children: `
      This is a long content card. 
      It should wrap properly and maintain spacing 
      without breaking layout.
    `,
  },
};

export const WithFooterActions: Story = {
  args: {
    children: (
      <>
        <Card.Title>Team Performance</Card.Title>
        <Card.Description>
          Track project progress, monitor tasks and collaborate
          with your team in one place.
        </Card.Description>
      </>

    ),
    footer: (
      <div className='flex g-5'>
        <Button size="sm">Cancel</Button>
        <Button size="sm" variant="solid">Submit</Button>
      </div>
    ),
  },
};

export const WithCoverAndFooter: Story = {
  args: {
    variant: 'elevated',

    cover: <img src="..." alt="cover" />,

    children: (
      <>
        <Card.Title>Explore Nature</Card.Title>

        <Card.Description>
          Discover beautiful destinations and plan your next
          adventure with ease.
        </Card.Description>
      </>
    ),

    footer: (
      <Button size="sm">
        Learn More
      </Button>
    ),
  },
};

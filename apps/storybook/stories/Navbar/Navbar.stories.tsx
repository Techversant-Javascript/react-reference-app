import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from '@techv/ui';
import styled from 'styled-components';

const StickyWrapper = styled.div`
  height: 500px;
  overflow-y: auto;
  border: 1px solid var(--color-gray-300);
`;

const ContentWrapper = styled.div`
  padding: var(--spacing-6);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
`;

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  component: Navbar,
  tags: ['autodocs'],

  decorators: [
    (Story) => (
      <>
        <Story />
      </>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Navbar>;

const basicItems = [
  {
    label: 'Home',
    href: '#',
  },
  {
    label: 'About',
    href: '#',
  },
  {
    label: 'Services',
    href: '#',
  },
  {
    label: 'Contact',
    href: '#',
  },
];

const megaMenuItems = [
  {
    label: 'Home',
    href: '#',
  },
  {
    label: 'Products',
    href: '#',
    children: [
      {
        label: 'Analytics',
        href: '#',
      },
      {
        label: 'Dashboard',
        href: '#',
      },
      {
        label: 'Reports',
        href: '#',
      },
      {
        label: 'Settings',
        href: '#',
      },
    ],
  },
  {
    label: 'Pricing',
    href: '#',
  },
  {
    label: 'Contact',
    href: '#',
  },
];

export const Default: Story = {
    args: {
      logo: 'Techv',
      items: basicItems,
    },
  };

export const Sticky: Story = {
    render: () => (
      <StickyWrapper>
        <Navbar
          logo="Techv"
          items={basicItems}
          sticky
          variant="sticky"
        />
  
        <ContentWrapper>
          {Array.from({ length: 40 }).map((_, index) => (
            <p key={index}>
              Sticky navbar scrolling content {index + 1}
            </p>
          ))}
        </ContentWrapper>
      </StickyWrapper>
    ),
  };

  export const Transparent: Story = {
    args: {
      logo: 'Techv',
      items: basicItems,
      variant: 'transparent',
    },
  };
  
  export const WithSearch: Story = {
    args: {
      logo: 'Techv',
      items: basicItems,
      variant: 'search',
      showSearch: true,
    },
  };
  
  export const MegaMenu: Story = {
    args: {
      logo: 'Techv',
      items: megaMenuItems,
      variant: 'mega-menu',
    },
  };
  
  export const MobileMenu: Story = {
    args: {
      logo: 'Techv',
      items: basicItems,
    },
  };
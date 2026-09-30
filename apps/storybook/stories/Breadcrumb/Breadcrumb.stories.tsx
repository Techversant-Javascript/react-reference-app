import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from '@techv/ui';
import type { BreadcrumbProps } from '../../../../packages/ui/src/components/Breadcrumb/Breadcrumb.types';

// ─── Inline icons for breadcrumb items ───────────────────────────────────────

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const FolderIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

const FileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
    <polyline points="13 2 13 9 20 9" />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

// ─── Default items ────────────────────────────────────────────────────────────

const defaultItems: BreadcrumbProps['items'] = [
  { label: 'Home', href: '#' },
  { label: 'Components', href: '#' },
  { label: 'Breadcrumb', active: true },
];

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  argTypes: {
    separator: {
      control: 'select',
      options: ['chevron', 'slash', 'dot', 'arrow'],
      description: 'Built-in separator icon between breadcrumb items',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    customSeparator: { control: false },
    items: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

// ─── Stories ─────────────────────────────────────────────────────────────────

/** Default breadcrumb with chevron separator */
export const Default: Story = {
  args: {
    items: defaultItems,
    separator: 'chevron',
    size: 'md',
  },
};

/** Shows all four built-in separator variants side by side */
export const SeparatorIcons: Story = {
  render: (args: BreadcrumbProps) => (
    <div className="flex flex-col g-8">
      <div className="flex flex-col g-3">
        <h4 className="m-0 mb-1 fs-xs fw-6 uppercase ls-wide tx-gray-400">Chevron ( › )</h4>
        <Breadcrumb {...args} separator="chevron" />
      </div>
      <div className="flex flex-col g-3">
        <h4 className="m-0 mb-1 fs-xs fw-6 uppercase ls-wide tx-gray-400">Slash ( / )</h4>
        <Breadcrumb {...args} separator="slash" />
      </div>
      <div className="flex flex-col g-3">
        <h4 className="m-0 mb-1 fs-xs fw-6 uppercase ls-wide tx-gray-400">Dot ( · )</h4>
        <Breadcrumb {...args} separator="dot" />
      </div>
      <div className="flex flex-col g-3">
        <h4 className="m-0 mb-1 fs-xs fw-6 uppercase ls-wide tx-gray-400">Arrow ( → )</h4>
        <Breadcrumb {...args} separator="arrow" />
      </div>
    </div>
  ),
  args: {
    items: defaultItems,
    size: 'md',
  },
};

/** Demonstrates the active state — last item is bold and non-clickable */
export const ActiveState: Story = {
  render: (args: BreadcrumbProps) => (
    <div className="flex flex-col g-8">
      <div className="flex flex-col g-3">
        <h4 className="m-0 mb-1 fs-xs fw-6 uppercase ls-wide tx-gray-400">Active on last item (default)</h4>
        <Breadcrumb
          {...args}
          items={[
            { label: 'Home', href: '#' },
            { label: 'Settings', href: '#' },
            { label: 'Profile', active: true },
          ]}
        />
      </div>
      <div className="flex flex-col g-3">
        <h4 className="m-0 mb-1 fs-xs fw-6 uppercase ls-wide tx-gray-400">Active on middle item</h4>
        <Breadcrumb
          {...args}
          items={[
            { label: 'Home', href: '#' },
            { label: 'Components', active: true },
            { label: 'Details', href: '#' },
          ]}
        />
      </div>
      <div className="flex flex-col g-3">
        <h4 className="m-0 mb-1 fs-xs fw-6 uppercase ls-wide tx-gray-400">Deeper trail — active last item</h4>
        <Breadcrumb
          {...args}
          items={[
            { label: 'Home', href: '#' },
            { label: 'Products', href: '#' },
            { label: 'Electronics', href: '#' },
            { label: 'Laptops', href: '#' },
            { label: 'MacBook Pro 16', active: true },
          ]}
        />
      </div>
    </div>
  ),
  args: {
    separator: 'chevron',
    size: 'md',
  },
};

/**
 * Breadcrumb items with leading icons.
 * NOTE: args are NOT spread here — Storybook's args serializer causes
 * a "Maximum call stack" error when JSX nodes are passed through args.
 * Props are provided directly to each Breadcrumb instance instead.
 */
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col g-8">
      <div className="flex flex-col g-3">
        <h4 className="m-0 mb-1 fs-xs fw-6 uppercase ls-wide tx-gray-400">Icon on every item (slash separator)</h4>
        <Breadcrumb
          separator="slash"
          size="md"
          items={[
            { label: 'Home', href: '#', icon: <HomeIcon /> },
            { label: 'Application List', href: '#', icon: <UserIcon /> },
            { label: 'Application', active: true },
          ]}
        />
      </div>
      <div className="flex flex-col g-3">
        <h4 className="m-0 mb-1 fs-xs fw-6 uppercase ls-wide tx-gray-400">Icon on every item (chevron separator)</h4>
        <Breadcrumb
          separator="chevron"
          size="md"
          items={[
            { label: 'Home', href: '#', icon: <HomeIcon /> },
            { label: 'Documents', href: '#', icon: <FolderIcon /> },
            { label: 'Report.pdf', active: true, icon: <FileIcon /> },
          ]}
        />
      </div>
      <div className="flex flex-col g-3">
        <h4 className="m-0 mb-1 fs-xs fw-6 uppercase ls-wide tx-gray-400">Icon only on root item</h4>
        <Breadcrumb
          separator="chevron"
          size="md"
          items={[
            { label: 'Home', href: '#', icon: <HomeIcon /> },
            { label: 'Settings', href: '#' },
            { label: 'Account', active: true },
          ]}
        />
      </div>
    </div>
  ),
};

/**
 * A breadcrumb item that contains a dropdown — matches the 'Home / User ↓'
 * pattern where clicking the item reveals a list of sub-options.
 * NOTE: no args spread — the items contain interactive state.
 */
export const WithDropdown: Story = {
  render: () => (
    <div className="flex flex-col g-8">
      <div className="flex flex-col g-3">
        <h4 className="m-0 mb-1 fs-xs fw-6 uppercase ls-wide tx-gray-400">Single dropdown segment</h4>
        <Breadcrumb
          separator="slash"
          size="md"
          items={[
            { label: 'Home', href: '#' },
            {
              label: 'User',
              dropdown: [
                { label: 'User1', href: '#' },
                { label: 'User2', href: '#' },
              ],
            },
          ]}
        />
      </div>
      <div className="flex flex-col g-3">
        <h4 className="m-0 mb-1 fs-xs fw-6 uppercase ls-wide tx-gray-400">Multiple dropdown segments</h4>
        <Breadcrumb
          separator="slash"
          size="md"
          items={[
            { label: 'Home', href: '#' },
            {
              label: 'Projects',
              dropdown: [
                { label: 'Design System', href: '#' },
                { label: 'Component Hub', href: '#' },
                { label: 'Storybook', href: '#' },
              ],
            },
            {
              label: 'Version',
              dropdown: [
                { label: 'v1.0', href: '#' },
                { label: 'v2.0', href: '#' },
              ],
            },
          ]}
        />
      </div>
    </div>
  ),
};

/**
 * Breadcrumb showing route parameter values — e.g. 'Users / 1' where the
 * numeric segment is a dynamic route param rendered as a regular active item.
 */
export const WithParams: Story = {
  render: () => (
    <div className="flex flex-col g-8">
      <div className="flex flex-col g-3">
        <h4 className="m-0 mb-1 fs-xs fw-6 uppercase ls-wide tx-gray-400">Route param as last segment</h4>
        <Breadcrumb
          separator="slash"
          size="md"
          items={[
            { label: 'Users', href: '#' },
            { label: '1', active: true },
          ]}
        />
      </div>
      <div className="flex flex-col g-3">
        <h4 className="m-0 mb-1 fs-xs fw-6 uppercase ls-wide tx-gray-400">Nested route params</h4>
        <Breadcrumb
          separator="slash"
          size="md"
          items={[
            { label: 'Projects', href: '#' },
            { label: '42', href: '#' },
            { label: 'Tasks', href: '#' },
            { label: '7', active: true },
          ]}
        />
      </div>
      <div className="flex flex-col g-3">
        <h4 className="m-0 mb-1 fs-xs fw-6 uppercase ls-wide tx-gray-400">Named route segments</h4>
        <Breadcrumb
          separator="slash"
          size="md"
          items={[
            { label: 'Origin', href: '#' },
            { label: 'routes', href: '#' },
            { label: 'debug', active: true },
          ]}
        />
      </div>
    </div>
  ),
};

/** All three sizes compared */
export const Sizes: Story = {
  render: (args: BreadcrumbProps) => (
    <div className="flex flex-col g-8">
      <div className="flex flex-col g-3">
        <h4 className="m-0 mb-1 fs-xs fw-6 uppercase ls-wide tx-gray-400">Small</h4>
        <Breadcrumb {...args} size="sm" />
      </div>
      <div className="flex flex-col g-3">
        <h4 className="m-0 mb-1 fs-xs fw-6 uppercase ls-wide tx-gray-400">Medium (default)</h4>
        <Breadcrumb {...args} size="md" />
      </div>
      <div className="flex flex-col g-3">
        <h4 className="m-0 mb-1 fs-xs fw-6 uppercase ls-wide tx-gray-400">Large</h4>
        <Breadcrumb {...args} size="lg" />
      </div>
    </div>
  ),
  args: {
    items: defaultItems,
    separator: 'chevron',
  },
};


/** Custom separator using a plain text or custom JSX node */
export const CustomSeparator: Story = {
  render: (args: BreadcrumbProps) => (
    <div className="flex flex-col g-8">
      <div className="flex flex-col g-3">
        <h4 className="m-0 mb-1 fs-xs fw-6 uppercase ls-wide tx-gray-400">Text separator "›"</h4>
        <Breadcrumb {...args} customSeparator={<span>›</span>} />
      </div>
      <div className="flex flex-col g-3">
        <h4 className="m-0 mb-1 fs-xs fw-6 uppercase ls-wide tx-gray-400">Text separator "|"</h4>
        <Breadcrumb {...args} customSeparator={<span>|</span>} />
      </div>
      <div className="flex flex-col g-3">
        <h4 className="m-0 mb-1 fs-xs fw-6 uppercase ls-wide tx-gray-400">Emoji separator 🔸</h4>
        <Breadcrumb {...args} customSeparator={<span>🔸</span>} />
      </div>
    </div>
  ),
  args: {
    items: defaultItems,
    size: 'md',
  },
};

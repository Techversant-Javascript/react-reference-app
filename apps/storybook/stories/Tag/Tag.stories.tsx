import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from '@techv/ui';
import { TagProps } from './../../../../packages/ui/src/components/Tag/Tag.types';

import { useState } from 'react';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'soft', 'ghost'],
    },
    color: {
      control: 'select',
      options: ['brand', 'success', 'warning', 'danger', 'neutral', 'info'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    icon: { control: false },
    onRemove: { table: { disable: true } }
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: 'Tag Content',
    variant: 'soft',
    color: 'brand',
  },
};

export const Colors: Story = {
  render: (args: TagProps) => (
    <div className="flex g-2 flex-wrap">
      <Tag {...args} color="brand">Brand</Tag>
      <Tag {...args} color="success">Success</Tag>
      <Tag {...args} color="warning">Warning</Tag>
      <Tag {...args} color="danger">Danger</Tag>
      <Tag {...args} color="neutral">Neutral</Tag>
      <Tag {...args} color="info">Info</Tag>
    </div>
  ),
  args: {
    variant: 'soft',
  },
};

export const Variants: Story = {
  render: (args: TagProps) => (
    <div className="flex g-2 flex-wrap">
      <Tag {...args} variant="solid">Solid</Tag>
      <Tag {...args} variant="soft">Soft</Tag>
      <Tag {...args} variant="outline">Outline</Tag>
      <Tag {...args} variant="ghost">Ghost</Tag>
    </div>
  ),
  args: {
    color: 'brand',
  },
};

export const Sizes: Story = {
  render: (args: TagProps) => (
    <div className="flex g-2 items-center">
      <Tag {...args} size="sm">Small</Tag>
      <Tag {...args} size="md">Medium</Tag>
      <Tag {...args} size="lg">Large</Tag>
    </div>
  ),
  args: {
    variant: 'soft',
    color: 'brand',
  },
};

const RemovableTags = (args: TagProps) => {
  const [tags, setTags] = useState([
    { id: '1', label: 'Removable Brand', color: 'brand' as const },
    { id: '2', label: 'Removable Success', color: 'success' as const },
    { id: '3', label: 'Removable Warning', color: 'warning' as const },
    { id: '4', label: 'Removable Danger', color: 'danger' as const },
  ]);

  const handleRemove = (id: string) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };

  return (
    <div className="flex g-2 flex-wrap">
      {tags.length > 0 ? (
        tags.map((tag) => (
          <Tag
            key={tag.id}
            {...args}
            color={tag.color}
            onRemove={() => handleRemove(tag.id)}
          >
            {tag.label}
          </Tag>
        ))
      ) : (
        <button 
          className="py-1 px-3 br-md bw-1 bd-brand-500 bg-transparent tx-brand-500 cursor-pointer hov-bg-brand-50 trans-all"
          onClick={() => setTags([
            { id: '1', label: 'Removable Brand', color: 'brand' as const },
            { id: '2', label: 'Removable Success', color: 'success' as const },
            { id: '3', label: 'Removable Warning', color: 'warning' as const },
            { id: '4', label: 'Removable Danger', color: 'danger' as const },
          ])}
        >
          Reset Tags
        </button>
      )}
    </div>
  );
};

export const Removable: Story = {
  render: (args: TagProps) => <RemovableTags {...args} />,
  args: {
    variant: 'soft',
  },
};

const SuccessIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const ProcessingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" data-icon="processing">
    <circle cx="12" cy="12" r="10" strokeDasharray="32" strokeLinecap="round" />
  </svg>
);

const WarningIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="7" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const ErrorIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="15" y1="9" x2="9" y2="15"></line>
    <line x1="9" y1="9" x2="15" y2="15"></line>
  </svg>
);

const DefaultIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

export const Status: Story = {
  render: (args: TagProps) => (
    <div className="flex flex-col g-6">
      <div>
        <h4 className="mb-3">Status (filled/soft)</h4>
        <div className="flex g-2">
          <Tag color="success" variant="soft" icon={<SuccessIcon />}>success</Tag>
          <Tag color="info" variant="soft" loading>processing</Tag>
          <Tag color="warning" variant="soft" icon={<WarningIcon />}>warning</Tag>
          <Tag color="danger" variant="soft" icon={<ErrorIcon />}>error</Tag>
          <Tag color="neutral" variant="soft" icon={<DefaultIcon />}>default</Tag>
        </div>
      </div>
      <div>
        <h4 className="mb-3">Status (solid)</h4>
        <div className="flex g-2">
          <Tag color="success" variant="solid" icon={<SuccessIcon />}>success</Tag>
          <Tag color="info" variant="solid" loading>processing</Tag>
          <Tag color="warning" variant="solid" icon={<WarningIcon />}>warning</Tag>
          <Tag color="danger" variant="solid" icon={<ErrorIcon />}>error</Tag>
          <Tag color="neutral" variant="solid" icon={<DefaultIcon />}>default</Tag>
        </div>
      </div>
      <div>
        <h4 className="mb-3">Status (outlined)</h4>
        <div className="flex g-2">
          <Tag color="success" variant="outline" icon={<SuccessIcon />}>success</Tag>
          <Tag color="info" variant="outline" loading>processing</Tag>
          <Tag color="warning" variant="outline" icon={<WarningIcon />}>warning</Tag>
          <Tag color="danger" variant="outline" icon={<ErrorIcon />}>error</Tag>
          <Tag color="neutral" variant="outline" icon={<DefaultIcon />}>default</Tag>
        </div>
      </div>
    </div>
  ),
};

const CheckableDemo = (args: TagProps) => {
  const [selectedSingleId, setSelectedSingleId] = useState('2');
  const [selectedMultipleIds, setSelectedMultipleIds] = useState(['1', '3']);
  
  const tags = [
    { id: '1', label: 'Movies' },
    { id: '2', label: 'Books' },
    { id: '3', label: 'Music' },
    { id: '4', label: 'Sports' },
  ];

  const handleMultipleCheck = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedMultipleIds([...selectedMultipleIds, id]);
    } else {
      setSelectedMultipleIds(selectedMultipleIds.filter((sid) => sid !== id));
    }
  };

  return (
    <div className="flex flex-col g-6">
      <div>
        <h4 className="mb-3">Single Select</h4>
        <div className="flex g-2">
          {tags.map((tag) => (
            <Tag
              key={tag.id}
              {...args}
              checkable
              checked={selectedSingleId === tag.id}
              onCheck={() => setSelectedSingleId(tag.id)}
            >
              {tag.label}
            </Tag>
          ))}
        </div>
      </div>
      <div>
        <h4 className="mb-3">Multiple Select</h4>
        <div className="flex g-2">
          {tags.map((tag) => (
            <Tag
              key={tag.id}
              {...args}
              checkable
              checked={selectedMultipleIds.includes(tag.id)}
              onCheck={(checked) => handleMultipleCheck(tag.id, checked)}
            >
              {tag.label}
            </Tag>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Checkable: Story = {
  render: (args: TagProps) => <CheckableDemo {...args} />,
  args: {
    color: 'info',
  },
};




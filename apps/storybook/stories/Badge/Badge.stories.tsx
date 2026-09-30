import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@techv/ui';
import styled from 'styled-components';

const DemoBox = styled.div`
width: 40px;
  height: 40px;
  display: flex;
  gap: var(--spacing-2);
  border-radius: 6px;
  flex-wrap: wrap;
  background-color: var(--color-gray-400);
`;

const meta: Meta<typeof Badge> = {
    title: 'Components/Badge',
    component: Badge,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['solid', 'soft', 'outline', 'ghost'],
            description: 'Visual style of the badge',
        },
        color: {
            control: 'select',
            options: ['brand', 'success', 'warning', 'danger', 'neutral', 'info'],
            description: 'Color scheme of the badge',
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'Size of the badge',
        },
        isLive: {
            control: 'boolean',
            description: 'Shows a live dot indicator',
        },
        children: {
            control: 'text',
            description: 'Badge content',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-col g-4">
            <h3>solid</h3>
            <div className="flex g-3 flex-wrap">
                <Badge variant="solid" color="brand">New</Badge>
                <Badge variant="solid" color="success">Completed</Badge>
                <Badge variant="solid" color="warning">Pending</Badge>
                <Badge variant="solid" color="danger">Failed</Badge>
                <Badge variant="solid" color="neutral">Archived</Badge>
            </div>
            <h3>soft</h3>
            <div className="flex g-3 flex-wrap">
                <Badge variant="soft" color="brand">Featured</Badge>
                <Badge variant="soft" color="success">Verified</Badge>
                <Badge variant="soft" color="warning">Review</Badge>
                <Badge variant="soft" color="danger">Rejected</Badge>
                <Badge variant="soft" color="neutral">Draft</Badge>
            </div>
            <h3>outline</h3>
            <div className="flex g-3 flex-wrap">
                <Badge variant="outline" color="brand">Beta</Badge>
                <Badge variant="outline" color="success">Approved</Badge>
                <Badge variant="outline" color="warning">In Progress</Badge>
                <Badge variant="outline" color="danger">Blocked</Badge>
                <Badge variant="outline" color="neutral">Inactive</Badge>
            </div>
            <h3>ghost</h3>
            <div className="flex g-3 flex-wrap">
                <Badge variant="ghost" color="brand">Popular</Badge>
                <Badge variant="ghost" color="success">Online</Badge>
                <Badge variant="ghost" color="warning">Scheduled</Badge>
                <Badge variant="ghost" color="danger">Offline</Badge>
                <Badge variant="ghost" color="neutral">Hidden</Badge>
            </div>
            <h3>Live Animation </h3>
            <h3>Live Animation </h3>
            <Badge color="success" isLive>
                Live
            </Badge>

            <Badge color="neutral" isLive>
                Live
            </Badge>
        </div>
    ),
};
export const Playground: Story = {
    args: {
        variant: 'solid',
        color: 'brand',
        size: 'md',
        children: 'Custom Badge',
    },
};

export const Notification: Story = {
    render: () => (
        <div className=" g-6">
            <h5>show number</h5>
            <Badge count={0}>
                <DemoBox />
            </Badge>
            <h5>show small indicator only</h5>
            <Badge dot>
                <DemoBox />
            </Badge>
            <h5>show overflow (99+)</h5>
            <Badge count={120} max={99}>
                <DemoBox />
            </Badge>
        </div>
    ),
};
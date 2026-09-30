import { useState } from 'react';
import { Meta, StoryObj } from "@storybook/react";
import { Button, Dialog } from "@techv/ui";

const meta: Meta<typeof Dialog> = {
    title: "Components/Dialog",
    component: Dialog,
    tags: ["autodocs"],
    argTypes: {
        children: {
            control: { type: "text" },
            description: "Dialog body content",
          },
          onClose: {
            action: "closed",
          },
          
    }
}

export default meta;

type Story = StoryObj<typeof Dialog>;

const handleDelete = () => {
    alert("User deleted!");
}

export const Basic: Story = {
    args: {
      title: "User Details",
      children: "User information goes here",
    },
  
    render: (args) => {
      const [open, setOpen] = useState(false);
  
      return (
        <>
          <Button onClick={() => setOpen(true)}>
            Open Dialog
          </Button>
  
          <Dialog
            {...args}
            open={open}
            onClose={() => setOpen(false)}
          >
            {args.children}
          </Dialog>
        </>
      );
    },
  };

  export const Confirmation: Story = {
    args: {
      title: "Delete User",
      children: "Are you sure you want to delete this user?",
    },
  
    render: (args) => {
      const [open, setOpen] = useState(false);
  
      return (
        <>
          <Button onClick={() => setOpen(true)}>
            Delete User
          </Button>
  
          <Dialog
            open={open}
            title={args.title}
            onClose={() => setOpen(false)}
            footer={
              <>
                <Button onClick={() => setOpen(false)}>
                  Cancel
                </Button>
  
                <Button onClick={handleDelete}>
                  Delete
                </Button>
              </>
            }
          >
            {args.children}
          </Dialog>
        </>
      );
    },
  };

export const Fullscreen: Story = {
    args: {
        title: "Create Project",
        children: "This is a full screen content",
      },
    render: (args) => {
        const [open, setOpen] = useState(false);
        return (
            <>
                <Button onClick={() => setOpen(true)}>
                    Open Fullscreen Dialog
                </Button>
                <Dialog
                    open={open}
                    fullscreen
                    title={args.title}
                    onClose={() => setOpen(false)}
                >
                    {args.children}
                </Dialog>
            </>
        )
    },
};

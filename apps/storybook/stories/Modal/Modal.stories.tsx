import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '@techv/ui';
import type { ModalProps } from '../../../../packages/ui/src/components/Modal/Modal.types';
import styled from 'styled-components';

// ─── Story helpers ────────────────────────────────────────────────────────────

const StoryContainer = styled.div`
  
  flex-direction: column;
  gap: 32px;
  padding: 24px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SectionLabel = styled.h4`
  margin: 0 0 4px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-gray-400, #9ca3af);
`;

const TriggerButton = styled.button<{ $color?: string }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 36px;
  padding: 0 16px;
  border-radius: 8px;
  border: 1px solid ${({ $color }) => $color ?? 'var(--color-brand-600)'};
  background: ${({ $color }) => $color ?? 'var(--color-brand-600)'};
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  font-family: inherit;
  transition: opacity 0.15s ease;
  &:hover { opacity: 0.88; }
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;

  label {
    font-size: 13px;
    font-weight: 500;
    color: var(--color-gray-700, #374151);
  }

  input, textarea, select {
    height: 36px;
    padding: 0 12px;
    border: 1px solid var(--color-gray-300, #d1d5db);
    border-radius: 8px;
    font-size: 14px;
    font-family: inherit;
    color: var(--color-gray-900, #111827);
    outline: none;
    transition: border-color 0.15s ease, box-shadow 0.15s ease;

    &:focus {
      border-color: var(--color-brand-500, #3b82f6);
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
    }
  }

  textarea {
    height: 80px;
    padding: 8px 12px;
    resize: vertical;
  }
`;

const StoryText = styled.p<{ $marginLeft?: boolean }>`
  margin: 0;
  margin-left: ${({ $marginLeft }) => ($marginLeft ? '20px' : '0')};
  color: var(--color-gray-600, #4b5563);
  line-height: 1.7;
`;

const ButtonGroup = styled.div<{ $wrap?: boolean }>`
  display: flex;
  gap: 12px;
  flex-wrap: ${({ $wrap }) => ($wrap ? 'wrap' : 'nowrap')};
`;

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['standard', 'alert', 'form', 'destructive'],
      description: 'Visual variant of the modal',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Width of the dialog panel',
    },
    title: {
      control: "text",
    },
    children: {
      control: "text",
    },
    open: { control: false },
    onClose: { control: false },
    primaryAction: { control: false },
    secondaryAction: { control: false },
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'text',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

/** A general-purpose informational modal. */
export const Standard: Story = {
  args: {
    title: "Information",
    description: "Here's some useful information you should know about",
    children: "This is the body content of the standard modal. You can place any content here",
    size: "md",
  },

  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <TriggerButton onClick={() => setOpen(true)}>Open Standard Modal</TriggerButton>
        <Modal
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          variant="standard"
          title={args.title}
          description={args.description}
          primaryAction={{ label: 'Save', onClick: () => setOpen(false) }}
          secondaryAction={{ label: 'Cancel', onClick: () => setOpen(false) }}
        >
          <StoryText>
            {args.children}
          </StoryText>
        </Modal>
      </>
    );
  },
};

// ─── 2. Alert Modal ───────────────────────────────────────────────────────────

/** Used to warn the user about something important before proceeding. */
export const AlertModal: Story = {
  args: {
    title: "Unsaved Changes",
    description: "You have unsaved changes in this document.",
    children: "If you leave this page without saving, all your recent modifications will be lost. Do you want to save them now?",
    size: "md",
  },
  render: (args: Partial<ModalProps>) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <TriggerButton $color="var(--color-warning-500, #f59e0b)" onClick={() => setOpen(true)}>
         Open Alert Modal
        </TriggerButton>
        <Modal
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          variant="alert"
          description=""
          primaryAction={{ label: 'Save Changes', onClick: () => setOpen(false) }}
          secondaryAction={{ label: 'Discard', onClick: () => setOpen(false) }}
        >
          <StoryText>
            {args.children}
          </StoryText>
        </Modal>
      </>
    );
  },
};

// ─── 3. Form Modal ────────────────────────────────────────────────────────────

/** A modal that contains a form for data entry. */
export const FormModal: Story = {
  render: (args: Partial<ModalProps>) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <TriggerButton $color="var(--color-brand-600, #2563eb)" onClick={() => setOpen(true)}>
          Open Form Modal
        </TriggerButton>
        <Modal
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          variant="form"
          title="Edit Profile"
          description="Update your personal details below."
          primaryAction={{ label: 'Save Changes', onClick: () => setOpen(false) }}
          secondaryAction={{ label: 'Cancel', onClick: () => setOpen(false) }}
        >
          <form onSubmit={(e) => e.preventDefault()}>
            <FormField>
              <label htmlFor="modal-name">Full Name</label>
              <input id="modal-name" type="text" placeholder="John Doe" />
            </FormField>
            <FormField>
              <label htmlFor="modal-email">Email Address</label>
              <input id="modal-email" type="email" placeholder="john@example.com" />
            </FormField>
            <FormField>
              <label htmlFor="modal-role">Role</label>
              <select id="modal-role">
                <option>Designer</option>
                <option>Engineer</option>
                <option>Product Manager</option>
              </select>
            </FormField>
            <FormField>
              <label htmlFor="modal-bio">Bio</label>
              <textarea id="modal-bio" placeholder="Tell us about yourself…" />
            </FormField>
          </form>
        </Modal>
      </>
    );
  },
  args: { size: 'md' },
};

// ─── 4. Destructive Modal ─────────────────────────────────────────────────────

/** Used for irreversible actions like deleting data. */
export const DestructiveModal: Story = {
  args: {
    title: "Are You Sure",
    children: "Are you sure you want to delete your account? This action cannot be undone and all your data will be permanently removed.?",
    size: "sm",
  },
  render: (args: Partial<ModalProps>) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <TriggerButton $color="var(--color-error-600, #dc2626)" onClick={() => setOpen(true)}>
          Open Destructive Modal
        </TriggerButton>
        <Modal
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          variant="destructive"
         
          primaryAction={{ label: 'Confirm', onClick: () => setOpen(false) }}
          secondaryAction={{ label: 'Cancel', onClick: () => setOpen(false) }}
        >
          <StoryText $marginLeft>
            {args.children}
          </StoryText>
        </Modal>
      </>
    );
  },
};

// ─── 5. All Variants ──────────────────────────────────────────────────────────

/** Side-by-side trigger buttons for all four variants. */
export const AllVariants: Story = {
  render: () => {
    const [activeModal, setActiveModal] = useState<string | null>(null);
    const close = () => setActiveModal(null);

    return (
      <StoryContainer>
        <Section>
          <SectionLabel>All Modal Variants</SectionLabel>
          <ButtonGroup $wrap>
            <TriggerButton onClick={() => setActiveModal('standard')}>
              Standard
            </TriggerButton>
            <TriggerButton
              $color="var(--color-warning-500, #f59e0b)"
              onClick={() => setActiveModal('alert')}
            >
              Alert
            </TriggerButton>
            <TriggerButton
              $color="var(--color-brand-600, #2563eb)"
              onClick={() => setActiveModal('form')}
            >
              Form
            </TriggerButton>
            <TriggerButton
              $color="var(--color-error-600, #dc2626)"
              onClick={() => setActiveModal('destructive')}
            >
              Destructive
            </TriggerButton>
          </ButtonGroup>
        </Section>

        {/* Standard */}
        <Modal
          open={activeModal === 'standard'}
          onClose={close}
          variant="standard"
          size="md"
          title="Information"
          description="Here's some useful information."
          primaryAction={{ label: 'Got it', onClick: close }}
          secondaryAction={{ label: 'Cancel', onClick: close }}
        >
          <StoryText>
            Standard modal body content. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </StoryText>
        </Modal>

        {/* Alert */}
        <Modal
          open={activeModal === 'alert'}
          onClose={close}
          variant="alert"
          size="md"
          title="Session About to Expire"
          description="Your session expires in 5 minutes."
          primaryAction={{ label: 'Stay Logged In', onClick: close }}
          secondaryAction={{ label: 'Log Out', onClick: close }}
        >
          <StoryText>
            Alert modal body content. This warns users about important events.
          </StoryText>
        </Modal>

        {/* Form */}
        <Modal
          open={activeModal === 'form'}
          onClose={close}
          variant="form"
          size="md"
          title="Edit Profile"
          description="Update your personal details."
          primaryAction={{ label: 'Save Changes', onClick: close }}
          secondaryAction={{ label: 'Cancel', onClick: close }}
        >
          <form onSubmit={(e) => e.preventDefault()}>
            <FormField>
              <label htmlFor="av-name">Full Name</label>
              <input id="av-name" type="text" placeholder="Jane Doe" />
            </FormField>
            <FormField>
              <label htmlFor="av-email">Email Address</label>
              <input id="av-email" type="email" placeholder="jane@example.com" />
            </FormField>
          </form>
        </Modal>

        {/* Destructive */}
        <Modal
          open={activeModal === 'destructive'}
          onClose={close}
          variant="destructive"
          size="md"
          title="Delete Account"
          description="This action is permanent and cannot be undone."
          primaryAction={{ label: 'Delete Account', onClick: close }}
          secondaryAction={{ label: 'Cancel', onClick: close }}
        >
          <StoryText>
            Destructive modal body. Warns users about irreversible operations.
          </StoryText>
        </Modal>
      </StoryContainer>
    );
  },
};

// ─── 6. Sizes ─────────────────────────────────────────────────────────────────

/** Demonstrates the three dialog width options. */
export const Sizes: Story = {
  render: () => {
    const [size, setSize] = useState<'sm' | 'md' | 'lg' | null>(null);
    const close = () => setSize(null);

    return (
      <StoryContainer>
        <Section>
          <SectionLabel>Dialog Sizes</SectionLabel>
          <ButtonGroup>
            <TriggerButton onClick={() => setSize('sm')}>Small (400 px)</TriggerButton>
            <TriggerButton onClick={() => setSize('md')}>Medium (520 px)</TriggerButton>
            <TriggerButton onClick={() => setSize('lg')}>Large (680 px)</TriggerButton>
          </ButtonGroup>
        </Section>

        {(['sm', 'md', 'lg'] as const).map((s) => (
          <Modal
            key={s}
            open={size === s}
            onClose={close}
            variant="standard"
            size={s}
            title={`Size: ${s.toUpperCase()}`}
            description={`Max width: ${s === 'sm' ? '400' : s === 'md' ? '520' : '680'} px`}
            primaryAction={{ label: 'Close', onClick: close }}
          >
            <StoryText>
              Modal content at size <strong>{s}</strong>.
            </StoryText>
          </Modal>
        ))}
      </StoryContainer>
    );
  },
};



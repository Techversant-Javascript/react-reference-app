import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "@techv/ui";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  tags: ["autodocs"],

  argTypes: {
    variant: {
      control: "select",
      options: ["success", "info", "warning", "error", "loading"],
    },

    position: {
      control: "select",

      options: [
        "topLeft",
        "top",
        "topRight",
        "bottomLeft",
        "bottom",
        "bottomRight",
      ],
    },

    duration: {
      control: {
        type: "number",
      },
    },

    closable: {
      control: "boolean",
    },

    showProgress: {
      control: "boolean",
    },

    pauseOnHover: {
      control: "boolean",
    },
  },

  args: {
    variant: "success",
    title: "Success",
    message: "Operation completed successfully.",
    duration: 4000,
    closable: true,
    showProgress: true,
    pauseOnHover: true,
    position: "topRight",
  },
};

export default meta;

type Story = StoryObj<typeof Toast>;

/* -------------------------------- */
/* Variants */
/* -------------------------------- */

const variants = [
  {
    label: "Success",
    variant: "success",
    color: "var(--color-success-500)",
    title: "Success",
    message: "Action completed successfully.",
  },

  {
    label: "Info",
    variant: "info",
    color: "var(--color-brand-500)",
    title: "Information",
    message: "Here is some information.",
  },

  {
    label: "Warning",
    variant: "warning",
    color: "var(--color-warning-500)",
    title: "Warning",
    message: "Please review this action.",
  },

  {
    label: "Error",
    variant: "error",
    color: "var(--color-danger-500)",
    title: "Error",
    message: "Something went wrong.",
  },

  {
    label: "Loading",
    variant: "loading",
    color: "var(--color-gray-700)",
    title: "Loading",
    message: "Loading your data...",
  },
] as const;

/* -------------------------------- */
/* Playground */
/* -------------------------------- */

export const Playground: Story = {
  render: (args) => {
    const [visible, setVisible] = useState(false);

    return (
      <div className="p-10">
        <button
          onClick={() => setVisible(true)}
          className="
            px-4 py-2
            border
            bd-brand-500
            br-lg
            bg-white
            text-brand-500
            font-medium
            cursor-pointer
          "
          style={{
              borderColor: "var(--color-brand-500)",
              color: "var(--color-brand-500)"
            }}
        >
          Show Toast
        </button>

        {visible && (
          <Toast
            {...args}
            visible={visible}
            onClose={() => setVisible(false)}
          />
        )}
      </div>
    );
  },
};

/* -------------------------------- */
/* All Variants */
/* -------------------------------- */

export const AllVariants: Story = {
  render: () => {
    const [toasts, setToasts] = useState<any[]>([]);

    const showToast = (item: any) => {
      const id = Date.now();

      setToasts((prev) => [
        ...prev,
        {
          ...item,
          id,
        },
      ]);
    };

    const removeToast = (id: number) => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    };

    return (
      <div className="flex g-3 p-10">
        {variants.map((item) => (
          <button
            key={item.variant}
            onClick={() => showToast(item)}
            className="
              px-4 py-2
              border
              br-lg
              bg-white
              font-medium
              cursor-pointer
            "
            style={{
              borderColor: item.color,
              color: item.color,
            }}
          >
            {item.label}
          </button>
        ))}

        <div
          className="
            fixed
            top-6
            right-6
            flex
            flex-col
            gap-3
            z-[9999]
          "
        >
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              visible
              variant={toast.variant}
              title={toast.title}
              message={toast.message}
              duration={4000}
              showProgress
              pauseOnHover
              closable
              onClose={() => removeToast(toast.id)}
            />
          ))}
        </div>
      </div>
    );
  },
};

/* -------------------------------- */
/* Positions */
/* -------------------------------- */

export const Positions: Story = {
  render: () => {
    const [activePosition, setActivePosition] = useState<any>(null);

    const positions = [
      "topLeft",
      "top",
      "topRight",
      "bottomLeft",
      "bottom",
      "bottomRight",
    ];

    return (
      <div className="flex flex-wrap g-3 p-10">
        {positions.map((position) => (
          <button
            key={position}
            onClick={() => setActivePosition(position)}
            className="
                px-4 py-2
                border
                br-lg
                bg-white
                cursor-pointer
              "
            style={{
              borderColor: "var(--color-brand-500)",
              color: "var(--color-brand-500)"
            }}
          >
            {position}
          </button>
        ))}

        {activePosition && (
          <Toast
            visible
            variant="info"
            title="Toast Position"
            message={`This toast appears at ${activePosition}`}
            position={activePosition}
            duration={3000}
            showProgress
            onClose={() => setActivePosition(null)}
          />
        )}
      </div>
    );
  },
};

/* -------------------------------- */
/* Pause On Hover */
/* -------------------------------- */

export const PauseOnHover: Story = {
  render: () => {
    const [visible, setVisible] = useState(false);

    return (
      <div className="p-10">
        <button
          onClick={() => setVisible(true)}
          className="
            px-4 py-2
            border
            br-lg
            border-success-500
            bg-white
            text-success-500
            cursor-pointer
          "
          style={{
            borderColor: "var(--color-success-500)",
            color: "var(--color-success-500)"
          }}
        >
          Pause On Hover
        </button>

        {visible && (
          <Toast
            visible
            variant="success"
            title="Pause Enabled"
            message="Hover this toast to pause timer and progress bar."
            duration={6000}
            pauseOnHover
            showProgress
            onClose={() => setVisible(false)}
          />
        )}
      </div>
    );
  },
};

/* -------------------------------- */
/* No Pause On Hover */
/* -------------------------------- */

export const NoPauseOnHover: Story = {
  render: () => {
    const [visible, setVisible] = useState(false);

    return (
      <div className="p-10">
        <button
          onClick={() => setVisible(true)}
          className="
            px-4 py-2
            br-lg
            border
            bg-white
            cursor-pointer
          "
          style={{
            borderColor: "var(--color-warning-500)",
            color: "var(--color-warning-500)"
          }}
        >
          No Pause On Hover
        </button>

        {visible && (
          <Toast
            visible
            variant="warning"
            title="Pause Disabled"
            message="Timer continues even while hovering."
            duration={6000}
            pauseOnHover={false}
            showProgress
            onClose={() => setVisible(false)}
          />
        )}
      </div>
    );
  },
};

/* -------------------------------- */
/* Persistent Toast */
/* -------------------------------- */

export const PersistentToast: Story = {
  render: () => {
    const [visible, setVisible] = useState(false);

    return (
      <div className="p-10">
        <button
          onClick={() => setVisible(true)}
          className="
            px-4 py-2
            border
            br-lg
            bg-white
            cursor-pointer
          "
          style={{
            borderColor: "var(--color-danger-500)",
            color: "var(--color-danger-500)"
          }}
        >
          Persistent Toast
        </button>

        {visible && (
          <Toast
            visible
            variant="error"
            title="Persistent Notification"
            message="This toast stays until manually closed."
            duration={0}
            position="topRight"
            showProgress={false}
            onClose={() => setVisible(false)}
          />
        )}
      </div>
    );
  },
};

/* -------------------------------- */
/* Custom Toast */
/* -------------------------------- */

export const CustomToast: Story = {
  args: {
    title: "Deployment Complete",
    message: "Your application was deployed successfully.",
    duration: 5000,
    position: "topRight",
    showProgress: true,
    pauseOnHover: true,
  },

  render: (args) => {
    const [visible, setVisible] = useState(false);

    return (
      <div className="p-10">
        <button
          onClick={() => setVisible(true)}
          className="
            px-4 py-2
            border
            br-lg
            border-violet-600
            bg-white
            text-violet-600
            cursor-pointer
          ">
          Custom Toast
        </button>

        {visible && (
          <Toast
            visible
            variant="info"
            title={args.title}
            message={args.message}
            duration={args.duration}
            position={args.position}
            showProgress={args.showProgress}
            pauseOnHover={args.pauseOnHover}
            onClose={() => setVisible(false)}
          />
        )}
      </div>
    );
  },
};

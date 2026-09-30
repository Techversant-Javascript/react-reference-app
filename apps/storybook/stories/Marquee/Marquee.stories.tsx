import { Meta, StoryObj } from "@storybook/react";
import { Marquee } from '@techv/ui';

const meta:Meta<typeof Marquee> = {
    title: "Components/Marquee",
    component: Marquee,
    tags: ["autodocs"],
}
 export default meta;

 type Story = StoryObj<typeof Marquee>;

 export const Basic = {
    args: {
      variant: "basic",
      children: (
        <div className="flex g-4">
          <span className="tx-indigo-700">React </span>
          <span className="tx-pink-500">TypeScript </span>
          <span className="tx-green-500">Node  </span>
          <span className="tx-orange-400">Storybook </span>
        </div>
      ),
    },
  };

  export const Reverse = {
    args: {
      variant: "reverse",
      children: (
        <div className="flex g-4">
          <span className="tx-indigo-700">React </span>
          <span className="tx-pink-500">TypeScript </span>
          <span className="tx-green-500">Node  </span>
          <span className="tx-orange-400">Storybook </span>
        </div>
      ),
    },
  };

  export const Vertical = {
    args: {
      variant: "vertical",
      children: (
        <div className="g-4">
          <h4 className="tx-indigo-700">React </h4>
          <h4 className="tx-pink-700">TypeScript </h4>
          <h4 className="tx-green-500">Node  </h4>
          <h4 className="tx-orange-400">Storybook </h4>
        </div>
      ),
    },
  };
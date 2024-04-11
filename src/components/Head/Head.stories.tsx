import type { Meta, StoryObj } from "@storybook/react";
import { Head } from "./Head";

const meta = {
  title: "Base/Head",
  component: Head,
  parameters: { layout: "centered" },
  argTypes: {
    type: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
  },
} satisfies Meta<typeof Head>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Head",
    type: "h1",
  },
};

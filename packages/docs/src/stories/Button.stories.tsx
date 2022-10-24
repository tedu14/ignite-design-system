import type { StoryObj, Meta } from "@storybook/react";
import { Button, ButtonProps } from "@ignite-ui/react";

type Props = StoryObj<ButtonProps>;

export default {
  title: "Button",
  component: Button,
} as Meta<ButtonProps>;

export const Primary: Props = {
  args: {
    children: "Enviar",
  },
};

export const Secondary: Props = {};

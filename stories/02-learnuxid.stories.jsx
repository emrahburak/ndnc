import React from "react";
import Button from "../components/Learnuxid/Button";

export default {
  title: "Youtube/LearnUxID/Button",
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button {...args}>{args.children}</Button>;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: "Button",
  children: "LearnUxId",
};

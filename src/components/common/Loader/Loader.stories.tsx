import { ComponentStory, ComponentMeta } from '@storybook/react';
import Loader from '.';
export default {
  title: 'Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const LoaderArgs = Template.bind({});
LoaderArgs.args = {
  size: 'large',
};

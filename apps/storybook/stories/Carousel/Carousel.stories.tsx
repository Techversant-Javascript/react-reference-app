import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from '@techv/ui';
import { SlideDemo } from '../../../../packages/ui/src/components/Carousel/Carousel.styles';

const slides = [
    <SlideDemo key="1">This is slide 1</SlideDemo>,
    <SlideDemo key="2">This is slide 2</SlideDemo>,
    <SlideDemo key="3">This is slide 3</SlideDemo>,
];

const meta: Meta<typeof Carousel> = {
    title: 'Components/Carousel',
    component: Carousel,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Horizontal: Story = {
    args: {
        children: slides,
        orientation: 'horizontal',
    },
};

export const Vertical: Story = {
    args: {
        children: slides,
        orientation: 'vertical',
    },
};

export const AutoSlide: Story = {
    args: {
        children: slides,
        autoSlide: true,
        autoSlideInterval: 2000,
    },
};

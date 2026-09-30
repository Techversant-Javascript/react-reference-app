import { Meta, StoryObj } from "@storybook/react";
import { Divider } from "@techv/ui";
import styled from "styled-components";

const DemoText = styled.p`
  color: var(--color-text-primary);
  font-size: var(--fs-md);
  line-height: 1.6;
  margin: 0;
`;

const DemoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  width: 70%;
`;

const meta: Meta<typeof Divider> = {
    title: "Components/Divider",
    component: Divider,
    tags: ['autodocs'],
    argTypes:{
      text: {
        control: "text",
      },
      textAlign: {
        control: "select",
        options: ["left", "center", "right"],
      },
        orientation: {
            control: "select",
            options: ["horizontal", "vertical"],
        },
    }
}

export default meta;

type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
    render: () => (
        <DemoContainer>
          <DemoText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed nonne merninisti licere mihi ista probare,
            quae sunt a te dicta? Refert tamen, quo modo.
          </DemoText>
    
          <Divider />
    
          <DemoText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed nonne merninisti licere mihi ista probare,
            quae sunt a te dicta? Refert tamen, quo modo.
          </DemoText>
    
          <Divider />
    
          <DemoText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed nonne merninisti licere mihi ista probare,
            quae sunt a te dicta? Refert tamen, quo modo.
          </DemoText>
        </DemoContainer>
      ),
};

export const CenterText: Story = {
    render: () => (
      <DemoContainer>
        <DemoText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed nonne merninisti licere mihi ista probare.
        </DemoText>
  
        <Divider
          text="Text"
          textAlign="center"
        />
  
        <DemoText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed nonne merninisti licere mihi ista probare.
        </DemoText>
      </DemoContainer>
    ),
  };
  
  export const LeftText: Story = {
    render: () => (
        <DemoContainer>
          <DemoText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed nonne merninisti licere mihi ista probare.
          </DemoText>
    
          <Divider
            text="Left Text"
            textAlign="left"
          />
    
          <DemoText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed nonne merninisti licere mihi ista probare.
          </DemoText>
        </DemoContainer>
      ),
  };
  
  export const RightText: Story = {
    render: () => (
        <DemoContainer>
          <DemoText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed nonne merninisti licere mihi ista probare.
          </DemoText>
    
          <Divider
            text="Right Text"
            textAlign="right"
          />
    
          <DemoText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed nonne merninisti licere mihi ista probare.
          </DemoText>
        </DemoContainer>
      ),
  };

  export const Playground: Story = {
    args: {
      text: 'Section Title',
      textAlign: 'center',
    },
  
    render: (args) => (
      <DemoContainer>
        <DemoText>
          This content appears above the divider.
          Change the text and alignment from the
          Storybook controls panel.
        </DemoText>
  
        <Divider {...args} />
  
        <DemoText>
          This content appears below the divider.
          The divider visually separates related sections.
        </DemoText>
      </DemoContainer>
    ),
  };
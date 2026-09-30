import React, { useState } from "react";
import { AccordionWrapper,Item,Header,ContentWrapper,Content,Arrow,} from "./Accordion.styles";
import { AccordionProps } from "./Accordion.types";

export const Accordion: React.FC<AccordionProps> = ({
  items,
  variant = "default",
  size = "md",
  activeItems,
  defaultExpanded = [],
  onChange,
  multiple = false,
}) => {
  const isControlled = activeItems !== undefined;

  const [internalActive, setInternalActive] = useState<string[]>(
    defaultExpanded
  );

  const currentActive = isControlled ? activeItems! : internalActive;

  const toggleItem = (id: string) => {
    let newActive: string[] = [];

    if (currentActive.includes(id)) {
      newActive = currentActive.filter((item) => item !== id);
    } else {
      newActive = multiple ? [...currentActive, id] : [id];
    }

    if (!isControlled) {
      setInternalActive(newActive);
    }

    onChange?.(newActive);
  };

  return (
    <AccordionWrapper>
      {items.map((item) => {
        const isOpen = currentActive.includes(item.id);

        return (
          <Item key={item.id} variant={variant}>
            <Header
              size={size}
              variant={variant}
              onClick={() => !item.disabled && toggleItem(item.id)}
              disabled={item.disabled}
            >
              {item.title}

              <Arrow data-open={isOpen}>▼</Arrow>
            </Header>

            <ContentWrapper isOpen={isOpen}>
              <Content size={size}>{item.content}</Content>
            </ContentWrapper>
          </Item>
        );
      })}
    </AccordionWrapper>
  );
};
import React, { useState } from 'react';
import {
  SidebarContainer,
  SidebarHeader,
  SidebarNav,
  SidebarNavItem,
  SidebarIcon,
  SidebarLabel,
  NestedNavContainer,
  ToggleButton,
  Overlay,
  ChevronIcon,
  ToggleIcon,
} from './Sidebar.styles';
import { SidebarProps, SidebarItem } from './Sidebar.types';

export const Sidebar: React.FC<SidebarProps> = ({
  items,
  header,
  isCollapsed = false,
  onToggle,
  isFloating = false,
  isOpen = false,
  onClose,
  activeId,
  className,
}) => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const handleToggleItem = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const renderItems = (itemsList: SidebarItem[], depth: number = 0) => {
    return itemsList.map((item) => {
      const isExpanded = !!expandedItems[item.id];
      const hasChildren = item.children && item.children.length > 0;
      const isActive = activeId === item.id;

      return (
        <React.Fragment key={item.id}>
          <SidebarNavItem
            $depth={depth}
            $isActive={isActive}
            $isCollapsed={isCollapsed}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              if (hasChildren && !isCollapsed) {
                handleToggleItem(item.id, e);
              }
              if (item.onClick) {
                item.onClick();
              }
            }}
            as={item.href ? 'a' : 'button'}
            href={item.href}
          >
            {item.icon && <SidebarIcon>{item.icon}</SidebarIcon>}
            {!isCollapsed && (
              <>
                <SidebarLabel>{item.label}</SidebarLabel>
                {hasChildren && (
                  <ChevronIcon
                    $isExpanded={isExpanded}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </ChevronIcon>
                )}
              </>
            )}
          </SidebarNavItem>
          {hasChildren && isExpanded && !isCollapsed && (
            <NestedNavContainer>
              {renderItems(item.children!, depth + 1)}
            </NestedNavContainer>
          )}
        </React.Fragment>
      );
    });
  };

  const content = (
    <SidebarContainer $isCollapsed={isCollapsed} $isFloating={isFloating} $isOpen={isOpen} className={className}>
      <SidebarHeader>
        {!isCollapsed && header}
        {onToggle && !isFloating && (
          <ToggleButton onClick={() => onToggle(!isCollapsed)} aria-label="Toggle Sidebar">
            <ToggleIcon
              $isCollapsed={isCollapsed}
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </ToggleIcon>
          </ToggleButton>
        )}
      </SidebarHeader>
      <SidebarNav>{renderItems(items)}</SidebarNav>
    </SidebarContainer>
  );

  if (isFloating) {
    return (
      <>
        {isOpen && <Overlay onClick={onClose} aria-label="Close Sidebar" />}
        {content}
      </>
    );
  }

  return content;
};

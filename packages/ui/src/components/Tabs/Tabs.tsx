import React, { createContext, useContext, useRef } from "react";
import { TabsContainer, TabListContainer, TabButton, TabPanelContainer, ScrollWrapper, ScrollButton, } from "./Tabs.styles";
import { TabsProps, TabListProps, TabProps, TabPanelProps, } from "./Tabs.types";

interface TabsContextType {
    value: string;
    onChange: (value: string) => void;
    variant: TabsProps["variant"];
}

const TabsContext = createContext<TabsContextType | null>(null);

export const Tabs: React.FC<TabsProps> = ({
    value,
    onChange,
    variant = "underline",
    orientation = "horizontal",
    scrollable = false,
    children,
}) => {
    return (
        <TabsContext.Provider value={{ value, onChange, variant }}>
            <TabsContainer orientation={orientation}>
                {React.Children.map(children, (child) => {
                    if (!React.isValidElement(child)) return child;

                    if ((child.type as any).displayName === "TabList") {
                        return React.cloneElement(child as React.ReactElement<TabListProps>, {
                            orientation,
                            scrollable,
                        });
                    }

                    return child;
                })}
            </TabsContainer>
        </TabsContext.Provider>
    );
};
Tabs.displayName = "Tabs";

export const TabList: React.FC<TabListProps & any> = ({
    children,
    orientation = "horizontal",
    scrollable = false,
}) => {
    const listRef = useRef<HTMLDivElement>(null);

    const [isScrollable, setIsScrollable] = React.useState(false);

    React.useEffect(() => {
        if (!listRef.current) return;

        const el = listRef.current;

        const checkScroll = () => {
            setIsScrollable(el.scrollWidth > el.clientWidth);
        };

        requestAnimationFrame(checkScroll);

        let resizeObserver: ResizeObserver | null = null;

        //FIX: Safe check for test environment
        if (typeof ResizeObserver !== "undefined") {
            resizeObserver = new ResizeObserver(checkScroll);
            resizeObserver.observe(el);
        }

        return () => {
            if (resizeObserver) {
                resizeObserver.disconnect();
            }
        };
    }, [children]);

    const scroll = (direction: "left" | "right") => {
        if (!listRef.current) return;

        const scrollAmount = listRef.current.clientWidth * 0.6;

        listRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    if (orientation === "vertical") {
        return (
            <TabListContainer
                ref={listRef}
                orientation={orientation}
                $scrollable={false}
            >
                {children}
            </TabListContainer>
        );
    }

    return (
        <ScrollWrapper>
            {scrollable && (
                <ScrollButton onClick={() => scroll("left")}>
                    ◀
                </ScrollButton>
            )}
            <TabListContainer
                ref={listRef}
                orientation={orientation}
                $scrollable={scrollable && isScrollable}
            >
                {children}
            </TabListContainer>
            {scrollable && (
                <ScrollButton onClick={() => scroll("right")}>
                    ▶
                </ScrollButton>
            )}
        </ScrollWrapper>

    );
};
TabList.displayName = "TabList";

export const Tab: React.FC<TabProps> = ({
    value,
    label,
    disabled,
}) => {
    const context = useContext(TabsContext);
    if (!context) return null;

    const { value: activeValue, onChange, variant } = context;

    const isActive = activeValue === value;

    return (
        <TabButton
            $active={isActive}
            variant={variant || "underline"}
            onClick={() => !disabled && onChange(value)}
            disabled={disabled}
        >
            {label}
        </TabButton>
    );
};
Tab.displayName = "Tab";

export const TabPanel: React.FC<TabPanelProps> = ({
    value,
    children,
}) => {
    const context = useContext(TabsContext);
    if (!context) return null;

    return context.value === value ? (
        <TabPanelContainer>{children}</TabPanelContainer>
    ) : null;
};
TabPanel.displayName = "TabPanel";
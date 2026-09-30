import React, { forwardRef } from 'react';
import {
    ActivityIconWrapper,
    HorizontalLine,
    TimelineCenterLine,
    TimelineContent,
    TimelineDescription,
    TimelineDot,
    TimelineItemWrapper,
    TimelineLine,
    TimelineTime,
    TimelineTitle,
    TimelineWrapper,
} from './Timeline.styles';
import { TimelineProps, } from './Timeline.types';

export const Timeline = forwardRef<
    HTMLDivElement,
    TimelineProps
>(
    (
        {
            items,
            variant = 'left',
            orientation = 'vertical',
            className,
        },
        ref,
    ) => {
        return (
            <TimelineWrapper
                ref={ref}
                className={className}
                $variant={variant}
                $orientation={orientation}
                role="list"
                aria-label="Timeline"
            >
                {orientation === "vertical" && (
                    <TimelineCenterLine />
                )}
                {orientation === "horizontal" && (
                    <HorizontalLine />
                )}
                {items.map((item, index) => (
                    <TimelineItemWrapper
                        key={item.id}
                        $variant={variant}
                        $orientation={orientation}
                        $index={index}
                        role="listitem"
                    >

                        {variant === "activity" ? (
                            <ActivityIconWrapper />
                        ) : (
                            <TimelineDot $orientation={orientation}/>
                        )}

                        <TimelineContent
                            $variant={variant}
                            $index={index}
                            $orientation={orientation}
                        >
                            <TimelineTitle>
                                {item.title}
                            </TimelineTitle>

                            {item.description && (
                                <TimelineDescription>
                                    {item.description}
                                </TimelineDescription>
                            )}

                            {item.time && (
                                <TimelineTime>
                                    {item.time}
                                </TimelineTime>
                            )}
                        </TimelineContent>
                    </TimelineItemWrapper>
                ))}
            </TimelineWrapper>
        );
    },
);

Timeline.displayName = 'Timeline';
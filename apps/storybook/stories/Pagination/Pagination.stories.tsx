import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "@techv/ui";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],

  argTypes: {
    variant: {
      control: "select",
      options: ["numbered", "simple", "infinite"],
    },

    align: {
      control: "select",
      options: ["left", "center", "right"],
    },

    totalItems: {
      control: {
        type: "number",
      },
    },

    pageSize: {
      control: {
        type: "number",
      },
    },

    loading: {
      control: "boolean",
    },
  },

  args: {
    variant: "numbered",
    totalItems: 20,
    pageSize: 10,
    align: "center",
    loading: false,
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

const RenderPagination = (args: any) => {
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);

  const handleLoad = () => {
    setLoading(true);

    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <Pagination
      {...args}
      currentPage={page}
      loading={args.variant === "infinite" ? loading : args.loading}
      onPageChange={setPage}
      onLoadMore={handleLoad}
    />
  );
};

export const Numbered: Story = {
  args: {
    variant: "numbered",
  },
  render: (args) => RenderPagination(args),
};

export const SimplePrevNext: Story = {
  args: {
    variant: "simple",
    align: "left",
    totalItems: 50,
    pageSize: 10,
  },
  render: (args) => RenderPagination(args),
};

export const InfiniteScroll: Story = {
  render: () => {
    const TOTAL_ITEMS = 30;
    const PAGE_SIZE = 10;

    const [items, setItems] = useState(
      Array.from({ length: PAGE_SIZE }, (_, i) => i + 1),
    );

    const [loading, setLoading] = useState(false);

    const loadMore = () => {
      if (loading) return;

      if (items.length >= TOTAL_ITEMS) return;

      setLoading(true);

      setTimeout(() => {
        setItems((prev) => [
          ...prev,
          ...Array.from(
            {
              length: Math.min(PAGE_SIZE, TOTAL_ITEMS - prev.length),
            },
            (_, i) => prev.length + i + 1,
          ),
        ]);

        setLoading(false);
      }, 1500);
    };

    return (
      <div
        style={{
          height: 300,
          overflow: "auto",
          border: "1px solid #ddd",
        }}
      >
        {items.map((item) => (
          <div
            key={item}
            style={{
              padding: 12,
              borderBottom: "1px solid #eee",
            }}
          >
            Item {item}
          </div>
        ))}

        <Pagination
          variant="infinite"
          totalItems={TOTAL_ITEMS}
          loadedItems={items.length}
          hasMore={items.length < TOTAL_ITEMS}
          loading={loading}
          onLoadMore={loadMore}
        />
      </div>
    );
  },
};

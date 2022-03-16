import type { FunctionComponent, ReactElement } from "react";
import { forwardRef } from "react";

import type { ScheduleCard } from "@app/yueleme-api";
import { Avatar, Group, Select, Text } from "@mantine/core";

const dataItem: ScheduleCard[] = [];

const data = [
  {
    image: "https://img.icons8.com/clouds/256/000000/futurama-bender.png",
    label: "Bender Bending Rodríguez",
    value: "Bender Bending Rodríguez",
    description: "Fascinated with cooking",
  },

  {
    image: "https://img.icons8.com/clouds/256/000000/futurama-mom.png",
    label: "Carol Miller",
    value: "Carol Miller",
    description: "One of the richest people on Earth",
  },
  {
    image: "https://img.icons8.com/clouds/256/000000/homer-simpson.png",
    label: "Homer Simpson",
    value: "Homer Simpson",
    description: "Overweight, lazy, and often ignorant",
  },
  {
    image: "https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png",
    label: "Spongebob Squarepants",
    value: "Spongebob Squarepants",
    description: "Not just a sponge",
  },
];

interface ItemProps extends React.ComponentPropsWithoutRef<"div"> {
  image: string;
  label: string;
  description: string;
}

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ image, label, description, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar src={image} />

        <div>
          <Text size="sm">{label}</Text>
          <Text size="xs" color="dimmed">
            {description}
          </Text>
        </div>
      </Group>
    </div>
  ),
);

interface ItemProps1 extends React.ComponentPropsWithoutRef<"div"> {
  name: string;
  isDefault: string;
}
export const SelectItem1 = forwardRef<HTMLDivElement, ItemProps1>(
  ({ name, isDefault, ...others }: ItemProps1, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        {/*<Avatar src={image} />*/}

        <div>
          <Text size="sm">{name}</Text>
          <Text size="xs" color="dimmed">
            {isDefault && "默认"}
          </Text>
        </div>
      </Group>
    </div>
  ),
);

export function DemoSearchSelect(): ReactElement {
  return (
    <Select
      label="Choose employee of the month"
      placeholder="Pick one"
      itemComponent={SelectItem}
      data={data}
      searchable
      maxDropdownHeight={400}
      nothingFound="Nobody here"
      filter={(value, item) =>
        // @ts-ignore
        item.label.toLowerCase().includes(value.toLowerCase().trim()) ||
        item.description.toLowerCase().includes(value.toLowerCase().trim())
      }
    />
  );
}

export type ScheduleCardSelect = ScheduleCard & {
  label: string;
  value: string;
};

export const DemoScheduleSelect: FunctionComponent<{
  label?: string;
  name?: string;
  placeholder?: string;
  data: ScheduleCardSelect[];
}> = ({ data, label, placeholder, name }) => {

  // @ts-ignore
  return (
    <Select
      name={name}
      label={label}
      placeholder={placeholder}
      itemComponent={SelectItem1}
      data={data}
      searchable
      maxDropdownHeight={400}
      nothingFound="暂无内容"
      filter={(value, item) => {
        console.log("value value", value);
        console.log("item", item);
        if (value == null) {
          return true;
        } else {
          return item.name.toLowerCase().includes(value.toLowerCase().trim());
        }
      }}
    />
  );
};

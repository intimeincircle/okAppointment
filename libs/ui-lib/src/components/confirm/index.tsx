import type { ReactElement } from 'react';
import { useState } from 'react';
import React from 'react';

import { Button, Spoiler, Text } from '@mantine/core';
import { Title } from '@mantine/core';
import { Image, Mark } from '@mantine/core';
import { List } from '@mantine/core';
import { ThemeIcon } from '@mantine/core';
import { Tooltip } from '@mantine/core';
import { Popover } from '@mantine/core';
import { Select, Timeline } from '@mantine/core';
import { Indicator } from '@mantine/core';
import { Avatar } from '@mantine/core';
import { Card } from '@mantine/core';
import { Badge } from '@mantine/core';
import { Box } from '@mantine/core';
import { Center } from '@mantine/core';
import { BackgroundImage } from '@mantine/core';
import { Anchor } from '@mantine/core';
import { Breadcrumbs } from '@mantine/core';
import { Chip } from '@mantine/core';
import { Checkbox } from '@mantine/core';
import { Autocomplete } from '@mantine/core';
import { CopyButton } from '@mantine/core';
import { ActionIcon } from '@mantine/core';
import { Group } from '@mantine/core';
import { SimpleGrid } from '@mantine/core';
import { Paper } from '@mantine/core';
import { Divider } from '@mantine/core';
import { Loader } from '@mantine/core';
import { Alert } from '@mantine/core';
import { Menu } from '@mantine/core';
import { HoverCard } from '@mantine/core';
import { Accordion } from '@mantine/core';
import { Tabs } from '@mantine/core';
import { Stepper } from '@mantine/core';
import { Pagination } from '@mantine/core';
import { Switch } from '@mantine/core';
import { Slider } from '@mantine/core';
import { Radio } from '@mantine/core';
import { Affix } from '@mantine/core';
import { Transition } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { openConfirmModal } from '@mantine/modals';
import {
  IconAlertCircle,
  IconArrowUp,
  IconCircleCheck,
  IconCircleDashed,
  IconGitBranch,
  IconGitCommit,
  IconGitPullRequest,
  IconMessageCircle,
  IconMessageDots,
  IconPhoto,
  IconSearch,
  IconSettings,
  IconStar,
  IconTrash,
} from '@tabler/icons';

const items = [
  { title: 'Mantine', href: '#' },
  { title: 'Mantine hooks', href: '#' },
  { title: 'use-id', href: '#' },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

export function DemoComp(): ReactElement {
  const openModal = () =>
    openConfirmModal({
      title: 'Please confirm your action',
      children: (
        <Text size="sm">
          This action is so important that you are required to confirm it with a
          modal. Please click one of these buttons to proceed.
        </Text>
      ),
      labels: { confirm: 'Confirm', cancel: 'Cancel' },
      onCancel: () => console.log('Cancel'),
      onConfirm: () => console.log('Confirmed'),
    });

  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const [activePage, setPage] = useState(1);
  const [scroll, scrollTo] = useWindowScroll();

  // @ts-ignore
  // @ts-ignore
  return (
    <>
      <>
        <Text align="center">
          Affix is located at the bottom of the screen, scroll to see it
        </Text>
        <Affix position={{ bottom: 20, right: 20 }}>
          <Transition transition="slide-up" mounted={scroll.y > 0}>
            {(transitionStyles) => (
              <Button
                leftIcon={<IconArrowUp size={16} />}
                style={transitionStyles}
                onClick={() => scrollTo({ y: 0 })}
              >
                Scroll to top
              </Button>
            )}
          </Transition>
        </Affix>
      </>
      <Checkbox label="I agree to sell my privacy" />

      <Radio.Group
        name="favoriteFramework"
        label="Select your favorite framework/library"
        description="This is anonymous"
        withAsterisk
      >
        <Radio value="react" label="React" />
        <Radio value="svelte" label="Svelte" />
        <Radio value="ng" label="Angular" />
        <Radio value="vue" label="Vue" />
      </Radio.Group>

      <Select
        label="Your favorite framework/library"
        placeholder="Pick one"
        data={[
          { value: 'react', label: 'React' },
          { value: 'ng', label: 'Angular' },
          { value: 'svelte', label: 'Svelte' },
          { value: 'vue', label: 'Vue' },
        ]}
      />

      <Slider
        marks={[
          { value: 20, label: '20%' },
          { value: 50, label: '50%' },
          { value: 80, label: '80%' },
        ]}
      />

      <Switch label="I agree to sell my privacy" />
      <Anchor href="https://mantine.dev/" target="_blank">
        Mantine docs
      </Anchor>
      <Pagination page={activePage} onChange={setPage} total={10} />
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step label="First step" description="Create an account">
          Step 1 content: Create an account
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email">
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Get full access">
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>

      <Tabs defaultValue="gallery">
        <Tabs.List>
          <Tabs.Tab value="gallery" icon={<IconPhoto size={14} />}>
            Gallery
          </Tabs.Tab>
          <Tabs.Tab value="messages" icon={<IconMessageCircle size={14} />}>
            Messages
          </Tabs.Tab>
          <Tabs.Tab value="settings" icon={<IconSettings size={14} />}>
            Settings
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="gallery" pt="xs">
          Gallery tab content
        </Tabs.Panel>

        <Tabs.Panel value="messages" pt="xs">
          Messages tab content
        </Tabs.Panel>

        <Tabs.Panel value="settings" pt="xs">
          Settings tab content
        </Tabs.Panel>
      </Tabs>

      <Accordion defaultValue="customization">
        <Accordion.Item value="customization">
          <Accordion.Control>Customization</Accordion.Control>
          <Accordion.Panel>
            Colors, fonts, shadows and many other parts are customizable to fit
            your design needs
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="flexibility">
          <Accordion.Control>Flexibility</Accordion.Control>
          <Accordion.Panel>
            Configure components appearance and behavior with vast amount of
            settings or overwrite any part of component styles
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="focus-ring">
          <Accordion.Control>No annoying focus ring</Accordion.Control>
          <Accordion.Panel>
            With new :focus-visible pseudo-class focus ring appears only when
            user navigates with keyboard
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      <Group position="center">
        <HoverCard width={280} shadow="md">
          <HoverCard.Target>
            <Button>Hover to reveal the card</Button>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Text size="sm">
              Hover card is revealed when user hovers over target element, it
              will be hidden once mouse is not over both target and dropdown
              elements
            </Text>
          </HoverCard.Dropdown>
        </HoverCard>
      </Group>

      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Button>Toggle menu</Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Application</Menu.Label>
          <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
          <Menu.Item icon={<IconMessageCircle size={14} />}>Messages</Menu.Item>
          <Menu.Item
            icon={<IconSearch size={14} />}
            rightSection={
              <Text size="xs" color="dimmed">
                ⌘K
              </Text>
            }
          >
            Search
          </Menu.Item>

          <Menu.Divider />

          <Menu.Label>Danger zone</Menu.Label>
          <Menu.Item color="red" icon={<IconTrash size={14} />}>
            Delete my account
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <Loader variant="dots" />

      <Alert icon={<IconAlertCircle size={16} />} title="Bummer!" color="red">
        Something terrible happened! You made a mistake and there is no going
        back, your data was lost forever!
      </Alert>

      <Divider my="sm" />
      <Divider my="sm" variant="dashed" />
      <Divider my="sm" variant="dotted" />
      <Divider my="sm" />
      <Divider my="sm" variant="dashed" />
      <Divider my="sm" variant="dotted" />
      <Paper shadow="xs" p="md">
        <Text>Paper is the most basic ui component</Text>
        <Text>
          Use it to create cards, dropdowns, modals and other components that
          require background with shadow
        </Text>
      </Paper>
      <Group>
        <Button variant="outline">1</Button>
        <Button variant="outline">2</Button>
        <Button variant="outline">3</Button>
      </Group>
      <SimpleGrid cols={3}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </SimpleGrid>
      <ActionIcon variant="transparent">
        <IconSettings size={16} />
      </ActionIcon>
      <ActionIcon variant="subtle">
        <IconSettings size={16} />
      </ActionIcon>
      <ActionIcon variant="default">
        <IconSettings size={16} />
      </ActionIcon>
      <ActionIcon variant="outline">
        <IconSettings size={16} />
      </ActionIcon>
      <ActionIcon variant="filled">
        <IconSettings size={16} />
      </ActionIcon>
      <ActionIcon variant="light">
        <IconSettings size={16} />
      </ActionIcon>
      <Button.Group>
        <Tooltip label="Working as expected" withinPortal>
          <Button>With Tooltip</Button>
        </Tooltip>
        <Button>Regular button</Button>
      </Button.Group>
      <CopyButton value="https://mantine.dev">
        {({ copied, copy }) => (
          <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
            {copied ? 'Copied url' : 'Copy url'}
          </Button>
        )}
      </CopyButton>
      <Autocomplete
        label="Your favorite framework/library"
        placeholder="Pick one"
        data={['React', 'Angular', 'Svelte', 'Vue']}
      />
      <Checkbox label="I agree to sell my privacy" />
      <Chip.Group position="center">
        <Chip value="1">Single chip</Chip>
        <Chip value="2">Can be selected</Chip>
        <Chip value="3">At a time</Chip>
      </Chip.Group>
      <>
        <Breadcrumbs>{items}</Breadcrumbs>
        <Breadcrumbs separator="→">{items}</Breadcrumbs>
      </>
      <Box>
        {/* With image */}
        <Avatar src="avatar.png" alt="it's me" />

        {/* Default placeholder */}
        <Avatar radius="xl" />

        {/* Letters with xl radius */}
        <Avatar color="cyan" radius="xl">
          MK
        </Avatar>

        {/* Custom placeholder icon */}
        <Avatar color="blue" radius="sm">
          <IconStar size={24} />
        </Avatar>
      </Box>
      <Box sx={{ maxWidth: 300 }} mx="auto">
        <BackgroundImage
          src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
          radius="sm"
        >
          <Center p="md">
            <Text color="#fff">
              BackgroundImage component can be used to add any content on image.
              It is useful for hero headers and other similar sections
            </Text>
          </Center>
        </BackgroundImage>
      </Box>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section component="a" href="https://mantine.dev/">
          <Image
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            height={160}
            alt="Norway"
          />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>Norway Fjord Adventures</Text>
          <Badge color="pink" variant="light">
            On Sale
          </Badge>
        </Group>

        <Text size="sm" color="dimmed">
          With Fjord Tours you can explore more of the magical fjord landscapes
          with tours and activities on and around the fjords of Norway
        </Text>

        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          Book classic tour now
        </Button>
      </Card>
      <Spoiler
        maxHeight={120}
        showLabel="Show more"
        hideLabel="Hide"
        transitionDuration={0}
      >
        ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd
        ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd
        ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd
      </Spoiler>
      <Indicator
        dot
        inline
        size={16}
        offset={7}
        position="bottom-end"
        color="red"
        withBorder
      >
        <Avatar
          size="lg"
          radius="xl"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
        />
      </Indicator>
      <Timeline active={1} bulletSize={24} lineWidth={2}>
        <Timeline.Item bullet={<IconGitBranch size={12} />} title="New branch">
          <Text color="dimmed" size="sm">
            You&apos;ve created new branch{' '}
            <Text variant="link" component="span" inherit>
              fix-notifications
            </Text>{' '}
            from master
          </Text>
          <Text size="xs" mt={4}>
            2 hours ago
          </Text>
        </Timeline.Item>

        <Timeline.Item bullet={<IconGitCommit size={12} />} title="Commits">
          <Text color="dimmed" size="sm">
            You&apos;ve pushed 23 commits to
            <Text variant="link" component="span" inherit>
              fix-notifications branch
            </Text>
          </Text>
          <Text size="xs" mt={4}>
            52 minutes ago
          </Text>
        </Timeline.Item>

        <Timeline.Item
          title="Pull request"
          bullet={<IconGitPullRequest size={12} />}
          lineVariant="dashed"
        >
          <Text color="dimmed" size="sm">
            You&apos;ve submitted a pull request
            <Text variant="link" component="span" inherit>
              Fix incorrect notification message (#187)
            </Text>
          </Text>
          <Text size="xs" mt={4}>
            34 minutes ago
          </Text>
        </Timeline.Item>

        <Timeline.Item
          title="Code review"
          bullet={<IconMessageDots size={12} />}
        >
          <Text color="dimmed" size="sm">
            <Text variant="link" component="span" inherit>
              Robert Gluesticker
            </Text>{' '}
            left a code review on your pull request
          </Text>
          <Text size="xs" mt={4}>
            12 minutes ago
          </Text>
        </Timeline.Item>
      </Timeline>
      <Popover width={200} position="bottom" withArrow shadow="md">
        <Popover.Target>
          <Button>Toggle popover</Button>
        </Popover.Target>
        <Popover.Dropdown>
          <Text size="sm">
            This is uncontrolled popover, it is opened when button is clicked
          </Text>
        </Popover.Dropdown>
      </Popover>
      <Tooltip label="Tooltip">
        <Button variant="outline">Button with tooltip</Button>
      </Tooltip>
      <Text>
        Highlight <Mark>this chunk</Mark> of the text
      </Text>
      <Text>
        Highlight <Mark>this chunk</Mark> of the text
      </Text>
      <List>
        <List.Item>Clone or download repository from GitHub</List.Item>
        <List.Item>Install dependencies with yarn</List.Item>
        <List.Item>To start development server run npm start command</List.Item>
        <List.Item>
          Run tests to make sure your changes do not break the build
        </List.Item>
        <List.Item>Submit a pull request once you are done</List.Item>
      </List>
      <List
        spacing="xs"
        size="sm"
        center
        icon={
          <ThemeIcon color="teal" size={24} radius="xl">
            <IconCircleCheck size={16} />
          </ThemeIcon>
        }
      >
        <List.Item>Clone or download repository from GitHub</List.Item>
        <List.Item>Install dependencies with yarn</List.Item>
        <List.Item>To start development server run npm start command</List.Item>
        <List.Item>
          Run tests to make sure your changes do not break the build
        </List.Item>
        <List.Item
          icon={
            <ThemeIcon color="blue" size={24} radius="xl">
              <IconCircleDashed size={16} />
            </ThemeIcon>
          }
        >
          Submit a pull request once you are done
        </List.Item>
      </List>
      <Text size="xs">Extra small text</Text>
      <Text size="sm">Small text</Text>
      <Text size="md">Default text</Text>
      <Text size="lg">Large text</Text>
      <Text size="xl">Extra large text</Text>
      <Text weight={500}>Semibold</Text>
      <Text weight={700}>Bold</Text>
      <Text italic>Italic</Text>
      <Text underline>Underlined</Text>
      <Text strikethrough>Strikethrough</Text>
      <Text variant="link" component="a" href="https://mantine.dev">
        Link variant
      </Text>
      <Text color="red">Red text</Text>
      <Text color="blue">Blue text</Text>
      <Text color="teal">Teal text</Text>
      <Text transform="uppercase">Uppercase</Text>
      <Text transform="capitalize">capitalized text</Text>
      <Text align="center">Aligned to center</Text>
      <Text align="right">Aligned to right</Text>
      <Title order={1}>This is h1 title</Title>
      <Title order={2}>This is h2 title</Title>
      <Title order={3}>This is h3 title</Title>
      <Title order={4}>This is h4 title</Title>
      <Title order={5}>This is h5 title</Title>
      <Title order={6}>This is h6 title</Title>
      <Button onClick={openModal}>Open confirm modal</Button>
    </>
  );
}

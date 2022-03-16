import type { ReactElement } from 'react';
import React from 'react';
import { useState } from 'react';

import { Button, Dialog, Group, Text, TextInput } from '@mantine/core';

export function DemoDialog(): ReactElement {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Group position="center">
        <Button onClick={() => setOpened((o) => !o)}>Toggle dialog</Button>
      </Group>

      <Dialog
        opened={opened}
        withCloseButton
        onClose={() => setOpened(false)}
        size="lg"
        radius="md"
      >
        <Text size="sm" style={{ marginBottom: 10 }} weight={500}>
          Subscribe to email newsletter
        </Text>

        <Group align="flex-end">
          <TextInput placeholder="hello@gluesticker.com" style={{ flex: 1 }} />
          <Button onClick={() => setOpened(false)}>Subscribe</Button>
        </Group>
      </Dialog>
    </>
  );
}

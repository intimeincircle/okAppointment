import type { FunctionComponent } from 'react';
import React from 'react';

import {
  Button,
  Container,
  createStyles,
  Image,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  title: {
    fontWeight: 900,
    fontSize: 34,
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
    },
  },

  control: {
    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },

  mobileImage: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  desktopImage: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
}));

export const NotFoundImage: FunctionComponent<{
  onPrimary?: () => void;
}> = ({ onPrimary }) => {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <SimpleGrid
        spacing={80}
        cols={2}
        breakpoints={[{ maxWidth: 'sm', cols: 1, spacing: 40 }]}
      >
        <Image
          src="https://ui.mantine.dev/_next/static/media/image.11cd6c19.svg"
          className={classes.mobileImage}
        />
        <div>
          <Title className={classes.title}>Something is not right...</Title>
          <Text color="dimmed" size="lg">
            你似乎来到了没有东西的地方
          </Text>
          <Button
            variant="outline"
            size="md"
            mt="xl"
            onClick={() => onPrimary?.()}
            className={classes.control}
          >
            返回首页
          </Button>
        </div>
        <Image
          src="https://ui.mantine.dev/_next/static/media/image.11cd6c19.svg"
          className={classes.desktopImage}
        />
      </SimpleGrid>
    </Container>
  );
};

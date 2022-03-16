import type { FunctionComponent } from "react";

import { Box, Container, Title } from "@mantine/core";

export const SectionPage: FunctionComponent<{
  title: string;
  children: React.ReactNode;
  as?: {
    right?: React.ReactNode;
  };
}> = ({ title, children, as }) => {
  return (
    <Container
      py="96px"
      sx={{
        width: "100%",
      }}
    >
      <Box>
        <div>
          {title && <Title order={1}>{title}</Title>}

          {as?.right}
        </div>

        <Box pt="32px">{children}</Box>
      </Box>
    </Container>
  );
};

export const PageSection: FunctionComponent<{
  title: string;
  children: React.ReactNode;
  as?: {
    right?: React.ReactNode;
  };
}> = ({ title, children, as }) => {
  return (
    <Box
      py="96px"
      px="lg"
      sx={{
        width: "100%",
      }}
    >
      <Box>
        <div>
          {title && <Title order={1}>{title}</Title>}

          {as?.right}
        </div>

        <Box pt="32px">{children}</Box>
      </Box>
    </Box>
  );
};

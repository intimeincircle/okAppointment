import type { FunctionComponent, ReactNode } from "react";

import { Box, Group } from "@mantine/core";

import type { EnumPage } from "../sidebar";
import { NavbarSimpleColored } from "../sidebar";

export const Scaffold: FunctionComponent<{
  hasSidebar?: boolean;
  children: ReactNode;
  page: EnumPage;
}> = ({ hasSidebar, children, page }) => {
  return (
    <Group
      spacing="lg"
      className="flex-grow"
      sx={{
        flexGrow: 1,
        flex: 1,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        width: "100%",
        height: "100%",
        justifyContent: "space-between !important",
      }}
    >
      {hasSidebar && (
        <Box
          className="flex-grow-0"
          sx={{
            display: "flex",
            flex: "0",
          }}
        >
          <NavbarSimpleColored title={page} />
        </Box>
      )}
      <Box
        sx={{
          width: "100%",
          overflowX: "auto",
          overflowY: "auto",
          height: "100%",
          flex: "1 1 auto",
        }}
      >
        {children}
      </Box>
    </Group>
  );
};

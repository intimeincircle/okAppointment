import type { FunctionComponent, ReactElement } from "react";
import { useState } from "react";
import React from "react";

import { Code, createStyles, Group, Navbar } from "@mantine/core";
import {
  Icon2fa,
  IconBellRinging,
  IconDatabaseImport,
  IconFingerprint,
  IconKey,
  IconLogout,
  IconReceipt2,
  IconSettings,
  IconSwitchHorizontal,
} from "@tabler/icons";

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");
  return {
    navbar: {
      backgroundColor: theme.fn.variant({
        variant: "filled",
        color: theme.primaryColor,
      }).background,
    },

    version: {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: "filled", color: theme.primaryColor })
          .background!,
        0.1,
      ),
      color: theme.white,
      fontWeight: 700,
    },

    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${theme.fn.lighten(
        theme.fn.variant({ variant: "filled", color: theme.primaryColor })
          .background!,
        0.1,
      )}`,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${theme.fn.lighten(
        theme.fn.variant({ variant: "filled", color: theme.primaryColor })
          .background!,
        0.1,
      )}`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color: theme.white,
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      "&:hover": {
        backgroundColor: theme.fn.lighten(
          theme.fn.variant({ variant: "filled", color: theme.primaryColor })
            .background!,
          0.1,
        ),
      },
    },

    linkIcon: {
      ref: icon,
      color: theme.white,
      opacity: 0.75,
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      "&, &:hover": {
        backgroundColor: theme.fn.lighten(
          theme.fn.variant({ variant: "filled", color: theme.primaryColor })
            .background!,
          0.15,
        ),
        [`& .${icon}`]: {
          opacity: 0.9,
        },
      },
    },
  };
});

export enum EnumPage {
  Dashboard = "Dashboard",
  Service = "预约主题",
  "Schedule" = "可预约时间",
  "Setting" = "设置",
  "Address" = "地址管理",
}

const data = [
  { link: "/dashboard/task", label: EnumPage.Setting, icon: IconBellRinging },
  // { link: "", label: "Billing", icon: IconReceipt2 },
  // { link: "", label: "Security", icon: IconFingerprint },
  // { link: "", label: "SSH Keys", icon: IconKey },
  { link: "/dashboard", label: EnumPage.Dashboard, icon: IconDatabaseImport },
  { link: "/schedule", label: EnumPage.Schedule, icon: IconDatabaseImport },
  // { link: "", label: "Authentication", icon: Icon2fa },
  { link: "/service/my", label: EnumPage.Service, icon: IconSettings },
  { link: "/address", label: EnumPage.Address, icon: IconSettings },
];

export const NavbarSimpleColored: FunctionComponent<{
  title: string;
}> = ({ title }) => {
  const { classes, cx } = useStyles();
  // const [active, setActive] = useState(title);

  const links = data.map((item) => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: item.label === title,
      })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        // event.preventDefault();
        // setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  // height={700}
  return (
    <Navbar width={{ sm: 300 }} p="md" className={classes.navbar}>
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          {/*<MantineLogo size={28} inverted />*/}
          {title}
          <Code className={classes.version}>v3.1.2</Code>
        </Group>
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
};

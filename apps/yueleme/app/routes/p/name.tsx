import type { ReactElement } from "react";
import React from "react";
import type { MetaFunction } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { Form, useFetcher, useLoaderData } from "@remix-run/react";

import { Button, Group, Paper, Stack, Stepper } from "@mantine/core";
import { SectionPage } from "~/components/section";
import { handleAuthentication } from "~/utils/getAuth";
import { yuelemeApi } from "~/server/api/api-yueleme";
import { CONST_CONFIG } from "../../../src/config";

export const action = handleAuthentication(async ({ request }, t) => {
  const resultInfo = await yuelemeApi.postApiYuelemeV1YuelemeSymbol({
    reqCreateUserSymbol: {
      symbol: "ranglang",
    },
    authorization: t,
  });
  console.log("resultInfo");
  console.log(resultInfo);
  return resultInfo;
});

export const meta: MetaFunction = () => ({
  title: `地址-${CONST_CONFIG.title}`,
  description: CONST_CONFIG.slogan,
});

export const loader: LoaderFunction = handleAuthentication(async (a, t) => {
  const r444 = await yuelemeApi.getApiYuelemeV1YuelemeSymbol({
    authorization: t,
  });

  console.log("r4444", r444);
  return r444;
});
export default function NamePage(): ReactElement {
  const data = useLoaderData<unknown>();

  return (
    <SectionPage title="name">
      <Stack
        justify="flex-start"
        spacing="xl"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
          height: 300,
        })}
      >
        <Stepper active={1} breakpoint="sm">
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

        <Paper shadow="xs" p="md">
          {JSON.stringify(data)}
          {/*<ValidatedForm*/}
          {/*  validator={validator}*/}
          {/*  fetcher={newsletter}*/}
          {/*  method="post"*/}
          {/*  action="/login?index"*/}
          {/*>*/}
          {/*  <FormInput name="username" label="user name" />*/}
          {/*  <FormInput name="password" label="pass word" />*/}
          {/*  <SubmitButton />*/}
          {/*  <Group position="left" mt="xl">*/}
          {/*    <Button variant="default">Settings</Button>*/}
          {/*  </Group>*/}
          {/*</ValidatedForm>*/}

          <Form method="post">
            <input name="username" />
            <p>
              <button type="submit">new </button>
            </p>
          </Form>

          <Group position="left" mt="xl">
            <Button variant="default">Settings</Button>
          </Group>
        </Paper>
      </Stack>
    </SectionPage>
  );
}

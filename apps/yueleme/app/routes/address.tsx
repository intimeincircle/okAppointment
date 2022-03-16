import type { ReactElement } from "react";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";

import type { OptionDataYuelemeAddress } from "@app/yueleme-api";
import { Container } from "@mantine/core";

import { Scaffold } from "~/components/scaffold";
import { PageSection } from "~/components/section";
import { EnumPage } from "~/components/sidebar";
import { yuelemeApi } from "~/server/api/api-yueleme";
import { handleAuthentication } from "~/utils/getAuth";
import { CONST_CONFIG } from "../../src/config";

export const action = handleAuthentication(async ({ request }, t) => {
  return await yuelemeApi.postApiYuelemeV1YuelemeAddress({
    reqStoreAddress: {
      name: "string",
      images: [],
    },
    authorization: t,
  });
});

export const loader: LoaderFunction = handleAuthentication(async (a, t) => {
  const r444 = await yuelemeApi.getApiYuelemeV1YuelemeAddressMy({
    authorization: t,
  });

  console.log("r4444", r444);
  return r444;
});

export const meta: MetaFunction = () => ({
  title: `地址-${CONST_CONFIG.title}`,
  description: CONST_CONFIG.slogan,
});

export default function Address(): ReactElement {
  const products = useLoaderData<OptionDataYuelemeAddress>();

  return (
    <Scaffold hasSidebar page={EnumPage.Dashboard}>
      <PageSection title="看板资料">
        <Container size="md" mx="inherit">
          <Form method="post">
            <p>
              <button type="submit">new </button>
            </p>
          </Form>

          {/*<Button*/}
          {/*  onClick={() => {*/}
          {/*    createAddress.submit(*/}
          {/*      {},*/}
          {/*      {*/}
          {/*        method: "post",*/}
          {/*      },*/}
          {/*    );*/}
          {/*  }}*/}
          {/*>*/}
          {/*  add*/}
          {/*</Button>*/}
          {JSON.stringify(products)}
        </Container>
      </PageSection>
    </Scaffold>
  );
}

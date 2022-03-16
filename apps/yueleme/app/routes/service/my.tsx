import type { ReactElement } from "react";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";

import type { NoSqlPagingListDataPageMarkYuelemeServiceCard } from "@app/yueleme-api";
import { Container } from "@mantine/core";

import { DeleteServiceForm } from "~/components/business/service/delete";
import { LinkButton } from "~/components/navigate/NavigateButton";
import { Scaffold } from "~/components/scaffold";
import { PageSection } from "~/components/section";
import { EnumPage } from "~/components/sidebar";
import { yuelemeApi } from "~/server/api/api-yueleme";
import { HandleNotification } from "~/utils/checkIfSuccess";
import {
  orUndefiendNumber,
  revertBoolean,
} from "~/utils/convertBooleanOnOffText";
import { handleAuthentication } from "~/utils/getAuth";
import { CONST_CONFIG } from "../../../src/config";

export const action = handleAuthentication(async ({ request }, t) => {
  const result = await request.formData();

  const { _action } = Object.fromEntries(result);
  const dataItem = Object.fromEntries(result);

  if (_action === "update") {
    return await yuelemeApi.patchApiYuelemeV1YuelemeServiceCard({
      reqPatchServiceCard: {
        id: Number(dataItem.id),
        ...dataItem,
        chargeType: revertBoolean(dataItem.charge as string)
          ? "CHARGE"
          : "FREE",
        needConfirmed: revertBoolean(dataItem.needConfirmed as string),
        price: orUndefiendNumber(dataItem.price as string),
        timeDuration: orUndefiendNumber(dataItem.timeDuration as string),
        limitedFutureBookingDays: orUndefiendNumber(
          dataItem.limitedFutureBookingDays as string,
        ),
        limitedBookFrequency: orUndefiendNumber(
          dataItem.limitedBookFrequency as string,
        ),
        description:
          dataItem.description != null
            ? {
                content: String(dataItem.description),
                html: String(dataItem.description),
              }
            : undefined,
      },
      authorization: t,
    });
  }

  if (_action === "delete") {
    const resultInfo = await yuelemeApi.deleteApiYuelemeV1YuelemeServiceItemId({
      id: Number(dataItem.id),
      authorization: t,
    });
    return resultInfo;
  } else {
    // TODO
    return {};
  }
});

export const loader: LoaderFunction = handleAuthentication(async (a, t) => {
  const r444 = await yuelemeApi.getApiYuelemeV1YuelemeServiceMyList({
    authorization: t,
  });

  console.log("r4444", r444);
  return r444;
});

export const meta: MetaFunction = () => ({
  title: `卡片列表-${CONST_CONFIG.title}`,
  description: CONST_CONFIG.slogan,
});

export default function ServicePage(): ReactElement {
  const data = useLoaderData<NoSqlPagingListDataPageMarkYuelemeServiceCard>();

  const api = useFetcher();

  HandleNotification(api);

  return (
    <>
      <Scaffold hasSidebar page={EnumPage.Service}>
        <PageSection title="可预约时间">
          <Container size="md" mx="inherit">
            <LinkButton content="添加" url="/service/create" />
            <>
              {data?.records?.map((service) => (
                <>
                  <LinkButton content="查看" url={`/service/${service.id}`} />
                  {service.name}
                  {service.id}
                  <DeleteServiceForm id={service.id} api={api} />
                </>
              ))}
            </>
          </Container>
        </PageSection>
      </Scaffold>
    </>
  );
}

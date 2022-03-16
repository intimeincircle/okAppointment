import type { ReactElement } from "react";
import type { LoaderFunction } from "@remix-run/node";
import type { MetaFunction } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";

import type {
  NoSqlPagingListDataPageMarkScheduleCard,
  OptionDataUserShortName,
  RetMsg,
} from "@app/yueleme-api";
import { Container } from "@mantine/core";
import { validationError } from "remix-validated-form";

import {
  CreateServiceNewForm,
  createServiceValidator,
} from "~/components/business/service/create";
import { Scaffold } from "~/components/scaffold";
import { PageSection } from "~/components/section";
import type { ScheduleCardSelect } from "~/components/select/search";
import { EnumPage } from "~/components/sidebar";
import { handleAuthentication } from "~/utils/getAuth";
import { yuelemeApi } from "~/server/api/api-yueleme";
import { HandleNotification } from "~/utils/checkIfSuccess";
import { CONST_CONFIG } from "../../../src/config";

export const action = handleAuthentication(async ({ request }, t) => {
  const result = await createServiceValidator.validate(
    await request.formData(),
  );
  if (result.error) return validationError(result.error);
  const data = result.submittedData;
  const resultInfo = await yuelemeApi.postApiYuelemeV1YuelemeServiceCard({
    reqYuelemeServiceCard: {
      urlName: data.urlName,
      name: data.name,
      scheduleId: 0,
      symbol: "ranglang",
      chargeType: "FREE",
      needConfirmed: false,
    },
    authorization: t,
  });
  return resultInfo;
});

export const loader: LoaderFunction = handleAuthentication(async (a, t) => {
  const r444 = await yuelemeApi.getApiYuelemeV1YuelemeSymbol({
    authorization: t,
  });

  const schedulesList: NoSqlPagingListDataPageMarkScheduleCard =
    await yuelemeApi.getApiYuelemeV1YuelemeCanlendarMy({
      authorization: t,
    });
  const aList =
    schedulesList?.records?.map((r) => ({
      ...r,
      label: r.name,
      value: r.id,
    })) ?? [];
  return {
    record: r444,
    list: aList,
  };
});

export const meta: MetaFunction = () => ({
  title: `地址-${CONST_CONFIG.title}`,
  description: CONST_CONFIG.slogan,
});

export default function CreateSerice(): ReactElement {
  const products = useLoaderData<{
    list: ScheduleCardSelect[];
    record: OptionDataUserShortName;
  }>();

  const api = useFetcher<RetMsg>();
  HandleNotification(api);

  return (
    <Scaffold hasSidebar page={EnumPage.Schedule}>
      <PageSection title="可预约时间">
        <Container size="md" mx="inherit">
          <CreateServiceNewForm api={api} dataList={products.list} />
          {JSON.stringify(products)}
        </Container>
      </PageSection>
    </Scaffold>
  );
}

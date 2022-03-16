import type { ReactElement } from "react";
import type { LoaderFunction } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";

import type {
  NoSqlPagingListDataPageMarkScheduleCard,
  OptionDataYuelemeServiceCard,
  RetMsg,
} from "@app/yueleme-api";
import { Container } from "@mantine/core";
import { setFormDefaults } from "remix-validated-form";

import { UpdateServiceForm } from "~/components/business/service/update";
import { Scaffold } from "~/components/scaffold";
import { PageSection } from "~/components/section";
import type { ScheduleCardSelect } from "~/components/select/search";
import { EnumPage } from "~/components/sidebar";
import { handleAuthentication } from "~/utils/getAuth";
import { yuelemeApi } from "~/server/api/api-yueleme";
import { HandleNotification } from "~/utils/checkIfSuccess";
import { convertBooleanOnOffText } from "~/utils/convertBooleanOnOffText";

export const loader: LoaderFunction = handleAuthentication(async (a, t) => {
  const { id } = a.params;
  const r444 = await yuelemeApi.getApiYuelemeV1YuelemeServiceItemId({
    authorization: t,
    id: Number(id),
  });

  const schedulesList: NoSqlPagingListDataPageMarkScheduleCard =
    await yuelemeApi.getApiYuelemeV1YuelemeCanlendarMy({
      authorization: t,
    });
  console.log("r444", r444);
  if (r444.record != null) {
    return {
      ...r444,
      schedules:
        schedulesList?.records?.map((r) => ({
          ...r,
          label: r.name,
          value: r.id,
        })) ?? [],
      ...setFormDefaults("updateForm", {
        ...(r444.record ?? {}),
        charge: convertBooleanOnOffText(r444.record?.chargeType === "CHARGE"),
        needConfirmed: convertBooleanOnOffText(r444.record?.needConfirmed),
        description: r444.record?.description?.content,
      }),
    };
  }
  return r444;
});

export default function Schedulers(): ReactElement {
  const data = useLoaderData<
    OptionDataYuelemeServiceCard & {
      schedules: ScheduleCardSelect[];
    }
  >();

  const api = useFetcher<RetMsg>();
  HandleNotification(api);

  return (
    <Scaffold hasSidebar page={EnumPage.Schedule}>
      <PageSection title="可预约时间">
        <Container size="md" mx="inherit">
          <UpdateServiceForm api={api} dataList={data.schedules} />
        </Container>
      </PageSection>
    </Scaffold>
  );
}

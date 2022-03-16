import type { ReactElement } from "react";
import type { LoaderFunction } from "@remix-run/node";
import type { MetaFunction } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";

import type { OptionDataYuelemeServiceCard } from "@app/yueleme-api";
import { Box } from "@mantine/core";
import { useAtom } from "jotai";
import { useStateMachine } from "little-state-machine";

import { SectionPage } from "~/components/section";
import { updateState } from "~/little-machine/updateName";
import { yuelemeApi } from "~/server/api/api-yueleme";
import { ServiceUserCard } from "~/ui-kits/user-card";
import { selectedDateAtom } from "~/ui-kits/user-card/state";
import { handleAuthentication } from "~/utils/getAuth";
import { CONST_CONFIG } from "../../../src/config";

type A = { userId: string; name: string };

export const action = handleAuthentication(async ({ request, params }, t) => {
  const a = params as A;
  console.log("a", a);
  const resultInfo = await yuelemeApi.postApiYuelemeV1YuelemeAppointment({
    reqStartAppointment: {
      serviceCardId: 1,
      fromTime: 0,
    },
    authorization: t,
  });
  return resultInfo;
});

export const loader: LoaderFunction = async (a) => {
  const pa = a.params as A;
  const r444 = await yuelemeApi.getApiYuelemeV1YuelemeServiceSymbolSymbolName({
    symbol: pa.userId,
    name: pa.name,
  });

  return r444;
};

export const meta: MetaFunction = () => ({
  title: `卡片详情-${CONST_CONFIG.title}`,
  description: CONST_CONFIG.slogan,
});

export default function Appointment(): ReactElement {
  const products = useLoaderData<OptionDataYuelemeServiceCard>();

  const nav = useNavigate();
  const [count] = useAtom(selectedDateAtom);

  // @ts-ignore
  const { actions, state } = useStateMachine({ updateState });
  return (
    <SectionPage title="name">
      <Box>
        <ServiceUserCard
          data={products}
          onFinish={() => {
            nav("/book");
            actions.updateState({
              selectedDate: count.selectedDate,
              selectedTime: count.selectedHour,
              serviceCard: products?.record,
              selectedServiceId: products.record?.id ?? 0,
            });
          }}
        />
      </Box>
    </SectionPage>
  );
}

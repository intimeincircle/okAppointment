import type { ReactElement } from "react";
import { useEffect } from "react";
import type { LoaderFunction } from "@remix-run/node";
import type { MetaFunction } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";

import type {
  OptionDataScheduleCard,
  ReqPatchSchedule,
  RetMsg,
} from "@app/yueleme-api";
import { Container } from "@mantine/core";
import { setFormDefaults } from "remix-validated-form";

import { MarkForm } from "~/components/business/scheduler/mark";
import { UpdateForm } from "~/components/business/scheduler/update";
import { updateValidator } from "~/components/business/scheduler/updateValidator";
import { Scaffold } from "~/components/scaffold";
import { PageSection } from "~/components/section";
import { EnumPage } from "~/components/sidebar";
import { handleAuthentication } from "~/utils/getAuth";
import { yuelemeApi } from "~/server/api/api-yueleme";
import { handleNotification } from "~/utils/checkIfSuccess";
import {
  convertBooleanOnOffText,
  revertBoolean,
} from "~/utils/convertBooleanOnOffText";
import { CONST_CONFIG } from "../../../../src/config";

export const action = handleAuthentication(async ({ request }, t) => {
  const result = await request.formData();

  console.log("_action result ", result);
  const { _action } = Object.fromEntries(result);

  console.log("_action", _action);
  console.log("_action", _action);
  console.log("_action", _action);
  console.log("_action", _action);
  console.log("_action", _action);

  if (_action === "mark") {
    const { id } = Object.fromEntries(result);

    const resultInfo = await yuelemeApi.putApiYuelemeV1YuelemeScheduleDefault({
      id: Number(id),
      authorization: t,
    });

    console.log("action", resultInfo);
    return resultInfo;
  }

  if (_action === "update") {
    // const { id, ...rest } = Object.fromEntries(result);
    const a = await updateValidator.validate(result);
    console.log("....rest");
    console.log(a.formId);
    console.log(a.submittedData);
    const a1 = a.submittedData as unknown as ReqPatchSchedule;
    const resultInfo = await yuelemeApi.patchApiYuelemeV1YuelemeCalendar({
      reqPatchSchedule: {
        id: a1.id as number,
        ...a.submittedData,
        d1Disabled: revertBoolean(a.submittedData.d1Disabled),
        d2Disabled: revertBoolean(a.submittedData.d2Disabled),
        d3Disabled: revertBoolean(a.submittedData.d3Disabled),
        d4Disabled: revertBoolean(a.submittedData.d4Disabled),
        d5Disabled: revertBoolean(a.submittedData.d5Disabled),
        d6Disabled: revertBoolean(a.submittedData.d6Disabled),
        d7Disabled: revertBoolean(a.submittedData.d7Disabled),
      },
      authorization: t,
    });
    // console.log("result", resultInfo);
    // console.log("action", resultInfo);
    return resultInfo;
  }

  if (_action === "create") {
    // const { name } = Object.fromEntries(result);
    // const resultInfo = await yuelemeApi.postApiYuelemeV1YuelemeCalendarCreate({
    //   reqCreateSchedule: {
    //     ...result,
    //     blackDays: [],
    //     name: name as string,
    //     isDefault: false,
    //   },
    //   authorization: t,
    // });
    // console.log("result", resultInfo);
    // console.log("action", resultInfo);
    // return resultInfo;
  } else {
    return null;
  }
});

export const loader: LoaderFunction = handleAuthentication(async (a, t) => {
  const { id } = a.params;
  const r444 = await yuelemeApi.getApiYuelemeV1YuelemeCalendarId({
    authorization: t,
    id: Number(id),
  });

  if (r444.record != null) {
    return {
      ...r444,
      ...setFormDefaults("updateForm", {
        ...(r444.record ?? {}),
        id: r444.record?.id ?? "",
        d1Disabled: convertBooleanOnOffText(r444.record?.d1Disabled),
        d2Disabled: convertBooleanOnOffText(r444.record?.d2Disabled),
        d3Disabled: convertBooleanOnOffText(r444.record?.d3Disabled),
        d4Disabled: convertBooleanOnOffText(r444.record?.d4Disabled),
        d5Disabled: convertBooleanOnOffText(r444.record?.d5Disabled),
        d6Disabled: convertBooleanOnOffText(r444.record?.d6Disabled),
        d7Disabled: convertBooleanOnOffText(r444.record?.d7Disabled),
        name: r444.record?.name ?? "",
      }),
    };
  }
  return r444;
});

export const meta: MetaFunction = () => ({
  title: `预约-${CONST_CONFIG.title}`,
  description: CONST_CONFIG.slogan,
});

export default function Schedulers(): ReactElement {
  const data = useLoaderData<OptionDataScheduleCard>();

  console.log("data", data);

  const updateProfile = useFetcher<RetMsg>();

  useEffect(() => {
    if (updateProfile.type === "done") {
      handleNotification(updateProfile.data);
    }
  }, [updateProfile]);

  return (
    <Scaffold hasSidebar page={EnumPage.Schedule}>
      <PageSection
        title="可预约时间"
        as={{
          right: (
            <>
              {data?.record?.id && (
                <MarkForm api={updateProfile} id={data?.record?.id} />
              )}
            </>
          ),
        }}
      >
        <Container size="md" mx="inherit">
          <UpdateForm api={updateProfile} defaultValue={data.record} />
        </Container>
      </PageSection>
    </Scaffold>
  );
}

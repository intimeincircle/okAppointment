import type { ReactElement } from "react";
import { useEffect } from "react";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { useFetcher, useLoaderData, useNavigate } from "@remix-run/react";

import type {
  NoSqlPagingListDataPageMarkScheduleCard,
  RetMsg,
} from "@app/yueleme-api";
import { Container } from "@mantine/core";

import { CreateSchedulerNewForm } from "~/components/business/scheduler/create";
import { DeleteForm } from "~/components/business/scheduler/delete";
import { updateValidator } from "~/components/business/scheduler/updateValidator";
import { Scaffold } from "~/components/scaffold";
import { PageSection } from "~/components/section";
import { EnumPage } from "~/components/sidebar";
import { handleAuthentication } from "~/utils/getAuth";
import { yuelemeApi } from "~/server/api/api-yueleme";
import { handleNotification } from "~/utils/checkIfSuccess";
import { CONST_CONFIG } from "../../../src/config";

export const action = handleAuthentication(async ({ request }, t) => {
  console.log("ddddddddddddddddddddd");
  console.log("ddddddddddddddddddddd");
  console.log("ddddddddddddddddddddd");
  console.log("ddddddddddddddddddddd");
  console.log("ddddddddddddddddddddd");
  console.log("ddddddddddddddddddddd");
  const result = await request.formData();

  const { _action } = Object.fromEntries(result);

  console.log("ddddddddddddddddddddd");
  console.log("ddddddddddddddddddddd");
  console.log("ddddddddddddddddddddd");
  console.log("ddddddddddddddddddddd");
  console.log("action", _action);

  if (_action === "mark") {
    const { id } = Object.fromEntries(result);
    try {
      const resultInfo = await yuelemeApi.putApiYuelemeV1YuelemeScheduleDefault(
        {
          id: Number(id),
          authorization: t,
        },
      );

      console.log("action", resultInfo);
      return resultInfo;
    } catch (e) {
      console.log("e", e);
    }
  }
  if (_action === "delete") {
    const { id } = Object.fromEntries(result);
    const resultInfo = await yuelemeApi.deleteApiYuelemeV1YuelemeSchedule({
      id: id as unknown as number,
      authorization: t,
    });
    console.log("result", resultInfo);
    console.log("action", resultInfo);
    return resultInfo;
  }

  if (_action === "update") {
    console.log("accccc", _action);
    console.log("accccc", _action);
    console.log("accccc", _action);
    console.log("accccc", _action);
    console.log("accccc", _action);
    const a = await updateValidator.validate(await request.formData());
    console.log("....rest");
    console.log(a.formId);
    console.log(a.submittedData);
    const resultInfo = await yuelemeApi.patchApiYuelemeV1YuelemeCalendar({
      reqPatchSchedule: {
        id: a.submittedData.id as number,
        ...a.submittedData,
      },
      authorization: t,
    });

    console.log("action", resultInfo);
    return resultInfo;
  }

  if (_action === "create") {
    const { name } = Object.fromEntries(result);
    const resultInfo = await yuelemeApi.postApiYuelemeV1YuelemeCalendarCreate({
      reqCreateSchedule: {
        ...result,
        isDefault: false,
        d1Disabled: false,
        d2Disabled: false,
        d3Disabled: false,
        d4Disabled: false,
        d5Disabled: false,
        d6Disabled: false,
        d7Disabled: false,
        blackDays: [],
        name: name as string,
      },
      authorization: t,
    });
    console.log("result", resultInfo);
    console.log("action", resultInfo);
    return resultInfo;
  }
});

export const loader: LoaderFunction = handleAuthentication(async (a, t) => {
  return await yuelemeApi.getApiYuelemeV1YuelemeCanlendarMy({
    authorization: t,
  });
});

export const meta: MetaFunction = () => ({
  title: `预约-${CONST_CONFIG.title}`,
  description: CONST_CONFIG.slogan,
});

export default function Schedulers(): ReactElement {
  const products = useLoaderData<NoSqlPagingListDataPageMarkScheduleCard>();

  const updateProfile = useFetcher<RetMsg>();

  useEffect(() => {
    if (updateProfile.type === "done") {
      handleNotification(updateProfile.data);
    }
  }, [updateProfile]);

  const navigate = useNavigate();
  return (
    <Scaffold hasSidebar page={EnumPage.Schedule}>
      <PageSection
        title="可预约时间"
        as={{
          right: <>ddddddddd</>,
        }}
      >
        <Container size="md" mx="inherit">
          dddd
          <CreateSchedulerNewForm api={updateProfile} />
          {products.records?.map((item) => (
            <>
              <div
                onClick={() => {
                  navigate(`/schedule/${item.id}`);
                }}
              >
                {item.name}
              </div>
              <DeleteForm id={item.id} api={updateProfile} />
            </>
          ))}
        </Container>
      </PageSection>
    </Scaffold>
  );
}

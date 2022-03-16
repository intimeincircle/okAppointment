import type { FunctionComponent } from "react";
import { useMemo } from "react";
import type { MetaFunction } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";

import type { RetMsg } from "@app/yueleme-api";
import { Anchor, Box, Divider, Group, Paper, Stack, Text } from "@mantine/core";
import dayjs from "dayjs";
import { useStateMachine } from "little-state-machine";
import {
  useFormContext,
  ValidatedForm,
  validationError,
} from "remix-validated-form";

import { WithUserStatus } from "~/auth/server2";
import { LoginedInfo } from "~/components/checked-check";
import { FormInput } from "~/components/form/input";
import { SubmitButton } from "~/components/mySubmitButton";
import { SectionPage } from "~/components/section";
import UploadButton from "~/components/upload";
import { updateState } from "~/little-machine/updateName";
import { yuelemeApi } from "~/server/api/api-yueleme";
import { CONST_FORM_CREATE_APPOINTMENT } from "~/shared/form/formId";
import { createAppointmentValidator } from "~/shared/validators/create-appointment";
import type { GlobalState } from "~/types";
import { HandleNotification } from "~/utils/checkIfSuccess";
import { handleAuthentication } from "~/utils/getAuth";
import { CONST_CONFIG } from "../../../src/config";
import { LinksFunction } from "@remix-run/node";
import { linksBase } from "~/components/upload/base";
import { linksUpload } from "~/components/upload/linksUpload";

export const action = handleAuthentication(async ({ request }, t) => {
  const formData = await request.formData();
  const createAppointmentValidatorResult =
    await createAppointmentValidator.validate(formData);

  if (createAppointmentValidatorResult.error) {
    return validationError(createAppointmentValidatorResult.error);
  }

  const parsedData = createAppointmentValidatorResult.submittedData;
  return await yuelemeApi.postApiYuelemeV1YuelemeAppointment({
    reqStartAppointment: {
      serviceCardId: parsedData.serviceCardId,
      fromTime: Number(parsedData.fromTime),
      note: parsedData.note,
    },
    authorization: t,
  });
});

export const meta: MetaFunction = () => ({
  title: `预约-${CONST_CONFIG.title}`,
  description: CONST_CONFIG.slogan,
});

export const links: LinksFunction = () => linksUpload.concat(...linksBase);

const BookPage: FunctionComponent = () => {
  const { state } = useStateMachine({ updateState });

  const api = useFetcher<RetMsg>();
  const stateA = state as GlobalState;

  HandleNotification(api);

  const data = useMemo(() => {
    console.log(stateA.book);
    const day = dayjs(stateA.book.selectedDate).format("YYYY-MM-DD");
    const hour = `${day} ${stateA.book.selectedTime}`;
    return dayjs(hour).toDate().getTime();
  }, [stateA.book]);

  const form = useFormContext(CONST_FORM_CREATE_APPOINTMENT);

  return (
    <WithUserStatus>
      <SectionPage title="name">
        <Stack>
          <Anchor href="https://mantine.dev/" target="_blank">
            返回
          </Anchor>
          dddd
          <UploadButton
            onOk={(e) => {
              console.log("e", e);
            }}
          />

          <Paper shadow="xs" p="md">
            <LoginedInfo />
            <Group>
              {JSON.stringify(form.fieldErrors)}
              <Text>Label</Text>
              <Divider orientation="vertical" />
              <Box>
                <Text>Label</Text>
                <Text>formTime {data}</Text>
                <Text>formTime {stateA.book.selectedServiceId}</Text>
                {JSON.stringify(state)}
                <ValidatedForm
                  fetcher={api}
                  validator={createAppointmentValidator}
                  method="post"
                  id={CONST_FORM_CREATE_APPOINTMENT}
                  action="/book?index"
                >
                  <input type="hidden" name="fromTime" value={data} />
                  <input
                    type="hidden"
                    name="serviceCardId"
                    value={stateA.book.selectedServiceId}
                  />
                  <FormInput name="note" label="备注" />

                  <SubmitButton content="预约" />
                </ValidatedForm>
              </Box>
            </Group>
          </Paper>
        </Stack>
      </SectionPage>
    </WithUserStatus>
  );
};

export default BookPage;

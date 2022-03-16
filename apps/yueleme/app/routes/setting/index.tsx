import type { ReactElement } from "react";
import type { LoaderFunction } from "@remix-run/node";
import type { MetaFunction } from "@remix-run/node";
import type { LinksFunction } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";

import type { OptionDataKunUser, RetMsg } from "@app/yueleme-api";
import { Avatar, Button, Container, Group, Stack } from "@mantine/core";
import { withZod } from "@remix-validated-form/with-zod";
import { ValidatedForm, validationError } from "remix-validated-form";
import { z } from "zod";

import { InputAvator } from "~/components/form/avatar";
import { FormInput } from "~/components/form/input";
import { SubmitButton } from "~/components/mySubmitButton";
import { Scaffold } from "~/components/scaffold";
import { PageSection } from "~/components/section";
import { EnumPage } from "~/components/sidebar";
import { linksUpload } from "~/components/upload/linksUpload";
import { yuelemeApi } from "~/server/api/api-yueleme";
import { HandleNotification } from "~/utils/checkIfSuccess";
import { handleAuthentication } from "~/utils/getAuth";
import { CONST_CONFIG } from "../../../src/config";

type A = { userId: string; name: string };

export const action = handleAuthentication(async ({ request, params }, t) => {
  const result = await profileValidator.validate(await request.formData());

  if (result.error) {
    // validationError comes from `remix-validated-form`
    return validationError(result.error);
  }
  if (!result.data) {
    return validationError({
      fieldErrors: {},
    });
  }
  const resultInfo = await yuelemeApi.patchApiYuelemeV1TapirProfile({
    reqPatchKunPartial: result.data,
    authorization: t,
  });
  return resultInfo;
});

export const loader: LoaderFunction = handleAuthentication(async (a, t) => {
  const r444 = await yuelemeApi.getApiYuelemeV1TapirHorseLoginUser({
    authorization: t,
  });

  console.log("r4444", r444);
  return r444;
});

export const links: LinksFunction = () => linksUpload;

export const meta: MetaFunction = () => ({
  title: `预约-${CONST_CONFIG.title}`,
  description: CONST_CONFIG.slogan,
});

export const profileValidator = withZod(
  z.object({
    slogan: z.string().min(1, { message: "First name is required" }),
    nickName: z.string(),
    thumbnail: z.string(),
  }),
);

export default function Appointment(): ReactElement {
  const products = useLoaderData<OptionDataKunUser>();

  const updateProfile = useFetcher<RetMsg>();

  HandleNotification(updateProfile);

  return (
    <Scaffold hasSidebar page={EnumPage.Setting}>
      <PageSection title="个人资料">
        <Container size="md" mx="inherit">
          <div className="Uppy" />
          <ValidatedForm
            fetcher={updateProfile}
            validator={profileValidator}
            method="post"
            action="/setting?index"
          >
            <Stack>
              <Group>
                <InputAvator
                  name="thumbnail"
                  defaultValue={products.record?.thumbnail}
                />
              </Group>

              <FormInput
                name="nickName"
                label="昵称"
                defaultValue={products.record?.nickName}
              />

              <FormInput
                name="slogan"
                label="个性签名"
                defaultValue={products.record?.slogan}
              />
              <SubmitButton content="更新" />
            </Stack>
          </ValidatedForm>
        </Container>
      </PageSection>
    </Scaffold>
  );
}

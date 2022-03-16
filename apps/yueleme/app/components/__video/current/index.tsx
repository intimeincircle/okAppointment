import type { ReactElement } from "react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { SimplePlayer } from "@app/statics-lib";
import { ClientOnly } from "remix-utils";

import type { CapraHandle } from "~/types";

export const handle: CapraHandle = {};

interface LoaderData {
  url: string;
}

export const loader: LoaderFunction = async (a) => {
  // const id = await oneOneApi.getApiV1TapirHorseVideoCurrent({});
  // return json({
  //   url: id.push?.url,
  // });
  return json({
    url: "",
  });
};

export default function VideoPage(): ReactElement {
  const { url } = useLoaderData<LoaderData>();

  return (
    <>
      <ClientOnly fallback={<></>}>
        {() => <SimplePlayer url={url} />}
      </ClientOnly>
    </>
  );
}

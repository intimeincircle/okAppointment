import type { ReactElement } from "react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { insertDashUUID, SimplePlayer } from "@app/statics-lib";
import { ClientOnly } from "remix-utils";

import { CONST_CDN_IME } from "~/common";
import type { CapraHandle } from "~/types";

export const handle: CapraHandle = {};

interface LoaderData {
  url: string;
}

export const loader: LoaderFunction = async (a) => {
  const id = a.params.slug as string;
  return json({
    url: `${CONST_CDN_IME}/lux/${insertDashUUID(id)}.mp4`,
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

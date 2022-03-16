import type { ReactElement } from "react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => ({
  title: "Capra Consulting: IT-konsulenter med ekspertise i software",
  ogTitle: "Capra Consulting: IT-konsulenter med ekspertise i software",
  description:
    "Vi er IT-konsulenter innen softwareutvikling og Norges beste på sky. I Capra har vi høy kvalitet på våre ansatte, og det vil vi fortsette med. Bli med oss!",
});

export default function Index(): ReactElement {
  return (
    <>
      <div className="flex flex-col gap-12 w-full"></div>
    </>
  );
}

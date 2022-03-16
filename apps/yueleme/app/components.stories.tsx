import type { FunctionComponent } from "react";

import type { OptionDataYuelemeServiceCard } from "@app/yueleme-api";

import { UpdateForm1 } from "~/components/business/scheduler/update";
import {
  DemoScheduleSelect,
  DemoSearchSelect,
} from "~/components/select/search";
import { ServiceUserCard } from "~/ui-kits/user-card";
import { AccordionDemo } from "./components/collapse";

const a1: OptionDataYuelemeServiceCard = {
  code: "2001",
  msg: "",
  record: {
    id: 12,
    userId: "9dc327e0542111edb676f9850acc1857",
    deliveryType: undefined,
    urlName: "e",
    name: "e",
    needConfirmed: false,
    faq: undefined,
    locationNeeded: undefined,
    scheduleId: 0,
    locationId: undefined,
    timeDuration: undefined,
    onLineEnabled: undefined,
    onLinePlatform: undefined,
    avatar: undefined,
    description: undefined,
    scheduledMsgAfterAppointment: undefined,
    limitedFutureBookingDays: undefined,
    limitedBookFrequency: undefined,
    symbol: "ranglang",
    fillInList: [],
    chargeType: "FREE",
    price: undefined,
    refundTimeLimit: undefined,
  },
};
export const ServiceUserCardDemo: FunctionComponent = () => (
  <ServiceUserCard
    data={{
      record: undefined,
      code: "2001",
      msg: "",
    }}
  />
);

export const ServiceUserCard404Demo: FunctionComponent = () => (
  <ServiceUserCard data={a1} />
);

export const UpdateFormDemo: FunctionComponent = () => <UpdateForm1 />;

export const SelectDemo: FunctionComponent = () => <DemoSearchSelect />;

export const DemoScheduleSelectDemo: FunctionComponent = () => (
  <DemoScheduleSelect
    data={[
      {
        id: 1,
        name: "string",
        value: "2",
        label: "string",
        createAt: 1,
        userId: "1",
        isDefault: true,
        d1Disabled: false,
        d2Disabled: false,
        d3Disabled: false,
        d4Disabled: false,
        d5Disabled: false,
        d6Disabled: false,
        d7Disabled: false,
      },
      {
        id: 1,
        name: "string",
        value: "1",
        label: "string",
        createAt: 1,
        userId: "1",
        isDefault: true,
        d1Disabled: false,
        d2Disabled: false,
        d3Disabled: false,
        d4Disabled: false,
        d5Disabled: false,
        d6Disabled: false,
        d7Disabled: false,
      },
    ]}
  />
);

export const D1: FunctionComponent = () => <AccordionDemo />;

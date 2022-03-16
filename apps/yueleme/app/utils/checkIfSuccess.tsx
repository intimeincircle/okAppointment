import { useEffect } from "react";
import type { FetcherWithComponents } from "@remix-run/react/dist/components";

import type { ConstantMSG } from "@app/oneone-api";
import type { ConstantMSG as ConstantMSG1 } from "@app/yueleme-api";
import { showNotification } from "@mantine/notifications";

export const checkIfSuccess = (c: {
  code: ConstantMSG | ConstantMSG1;
}): boolean => {
  return c?.code?.toString() === "2001";
};

export const handleNotification = (c: {
  code: ConstantMSG | ConstantMSG1;
  msg: string;
}): void => {
  if (checkIfSuccess(c)) {
    showNotification({
      title: "操作成功",
      message: "",
      color: "green",
    });
  } else {
    showNotification({
      title: "未能处理成功",
      message: c.msg,
      color: "red",
    });
  }
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const HandleNotification = (
  updateProfile: FetcherWithComponents<unknown>,
) => {
  return useEffect(() => {
    if (updateProfile.type === "done") {
      handleNotification(
        updateProfile.data as {
          code: ConstantMSG | ConstantMSG1;
          msg: string;
        },
      );
    }
  }, [updateProfile]);
};

import type { RefObject } from "react";
import { useEffectOnce } from "react-use";

import Uppy from "@uppy/core";
import FileInput from "@uppy/file-input";
import XHRUpload from "@uppy/xhr-upload";

import { CONST_IMAGE_SAVE } from "~/common";
import { checkIfSuccess } from "~/utils/checkIfSuccess";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useUploadButton = (
  ref: RefObject<Element>,
  onOk: (data: string) => void,
) => {
  // const [v] = useAtom(rootInfoAtom);

  useEffectOnce(() => {
    console.log("xxxxxxxxxxxxx oo");
    const uppy = new Uppy({
      autoProceed: true,
    });
    uppy.setOptions({
      locale: {
        strings: {
          chooseFiles: "上传图片",
        },
      },
    });
    uppy.use(XHRUpload, {
      endpoint: CONST_IMAGE_SAVE,
      formData: true,
      fieldName: "file",
      headers: () => {
        // @ts-ignore
        console.log("window.ENV._T", window.ENV._T);
        console.log("x");
        return {
          // @ts-ignore
          authorization: window.ENV._T,
        };
      },
      // @ts-ignore
      getResponseData: (v, item) => {
        const a = JSON.parse(v) as unknown;
        console.log("aaa", v);
        // @ts-ignore
        if (checkIfSuccess(a)) {
          // @ts-ignore
          onOk(a.record.key as string);
        }
      },
    });
    console.log("Uppy");
    uppy.use(FileInput, {
      target: ".Uppy",
      // target: ref.current as Element,
      inputName: "Input",
      // target
    });

    return () => {
      uppy.close();
    };
  });
};

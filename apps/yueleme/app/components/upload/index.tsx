import type { FunctionComponent } from "react";
import React, { memo, useRef } from "react";

import { useUploadButton } from "./useUploadButton";

const UploadButton: FunctionComponent<{
  value?: string;
  onOk: (data: string) => void;
}> = memo(({ onOk }) => {
  const m = useRef<Element>(null);
  useUploadButton(m, onOk);

  return (
    <>
      {/*<div className="Uppy" ref={m as unknown as RefObject<HTMLDivElement>}>*/}
      {/* <form action="https://www.xunlianying.vip/api/horse/v1/card/image/save" method="post"> */}
      {/*    <h5>Uppy was not loaded — slow connection, unsupported browser, weird JS error on a page — but the */}
      {/*        upload still works, because HTML is cool like that</h5> */}
      {/*    <input type="file" name="file" /> */}
      {/*    <button type="submit">Fallback Form Upload</button> */}
      {/* </form> */}
      {/*</div>*/}
      <div className="UppyProgressBar" />
    </>
  );
});
export default UploadButton;

// import globalStyles from "~/global.css";
// import MusicStyle from "react-jinke-music-player/assets/index.css";
// import tailwindStyles from "~/tailwind.css";

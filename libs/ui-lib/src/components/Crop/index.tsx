import 'react-image-crop/dist/ReactCrop.css';

import type { FunctionComponent } from 'react';
import React from 'react';
import { useState } from 'react';
import type { Crop } from 'react-image-crop';
import ReactCrop from 'react-image-crop';
export const CropComp: FunctionComponent = () => {
  const [crop, setCrop] = useState<Crop>();
  return (
    <ReactCrop crop={crop} onChange={(c) => setCrop(c)}>
      <img src="https://lf3-static.bytednsdoc.com/obj/iconpark/main_banner_2.png" />
    </ReactCrop>
  );
};

import 'react-lazy-load-image-component/src/effects/blur.css';

import type { FunctionComponent } from 'react';
import React, { memo } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const KunImage: FunctionComponent<{
  image: {
    alt?: string;
    src: string;
  };
}> = memo(({ image }) => (
  <LazyLoadImage alt={image.alt} effect="blur" src={image.src} />
));

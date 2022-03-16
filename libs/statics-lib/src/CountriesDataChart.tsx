import type { FunctionComponent } from 'react';
import React from 'react';

import type { BarDatum } from '@nivo/bar';
import { Bar } from '@nivo/bar';
import { generateCountriesData } from '@nivo/generators';

const keys = ['hot dogs', 'burgers', 'sandwich', 'kebab', 'fries', 'donut'];
const commonProps = {
  width: 900,
  height: 500,
  margin: { top: 60, right: 110, bottom: 60, left: 80 },
  data: generateCountriesData(keys, { size: 7 }) as BarDatum[],
  indexBy: 'country',
  keys,
  padding: 0.2,
  labelTextColor: 'inherit:darker(1.4)',
  labelSkipWidth: 16,
  labelSkipHeight: 16,
};

export const CountriesDataChart: FunctionComponent = () => (
  <Bar
    {...commonProps}
    layout="horizontal"
    enableGridY={false}
    enableGridX={true}
  />
);

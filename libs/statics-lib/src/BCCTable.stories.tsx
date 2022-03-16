import React from 'react';

// @ts-ignore
import { AxisTickProps } from '@nivo/axes';
import type { BarDatum } from '@nivo/bar';
import { generateCountriesData } from '@nivo/generators';

import { BCCTable } from './Table';

const keys = ['hot dogs', 'burgers', 'sandwich', 'kebab', 'fries', 'donut'];

// @ts-ignore
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

export const BCCTableBasic = () => <BCCTable />;

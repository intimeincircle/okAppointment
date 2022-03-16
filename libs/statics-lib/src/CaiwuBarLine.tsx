import type { FunctionComponent } from 'react';
import React from 'react';

import { Bar } from '@nivo/bar';

export const MockCaiwuData = {
  width: 900,
  height: 500,
  margin: { top: 60, right: 110, bottom: 60, left: 80 },
  data: [
    { year: '2022', '06-30': '4.5771', '03-31': '100.0894' },
    {
      year: '2021',
      '12-31': '96.4695',
      '09-30': '106.6334',
      '06-30': '124.8687',
      '03-31': '19.5534',
    },
    {
      year: '2020',
      '12-31': '15.5275',
      '09-30': '86.7836',
      '06-30': '73.8026',
      '03-31': '83.9324',
    },
    {
      year: '2019',
      '12-31': '91.5287',
      '09-30': '17.1692',
      '06-30': '12.2005',
      '03-31': '1.9823',
    },
    { year: '2018', '12-31': '6.324' },
  ],
  indexBy: 'year',
  keys: ['03-31', '06-30'],
  padding: 0.2,
};

export const CaiwuBarLine = () => (
  <Bar {...MockCaiwuData} groupMode="grouped" />
);

export const CaiwuBarLineData: FunctionComponent<{
  data: unknown;
  // @ts-ignore
}> = ({ data: unknown }) => <Bar {...unknown} groupMode="grouped" />;

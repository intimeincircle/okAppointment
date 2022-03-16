import 'dayjs/locale/zh-cn';

import type { FunctionComponent } from 'react';
import { useState } from 'react';
import React from 'react';

import { Calendar } from '@mantine/dates';

export const CalendarComp: FunctionComponent = () => {
  const [value, setValue] = useState(null);
  return <Calendar value={value} onChange={setValue} locale="zh-cn" />;
};

import type { NextPage } from 'next';

import { MilkdownEditor } from '../src/editor';

const Page: NextPage = () => {
  return (
    <>
      <MilkdownEditor value="default v" />
    </>
  );
};

export default Page;

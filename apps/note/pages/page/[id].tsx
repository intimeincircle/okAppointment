import type { FunctionComponent } from 'react';

import { useRouter } from 'next/router';

import { EditPage } from '../../components/edit';

const Page: FunctionComponent = () => {
  const a = useRouter();

  const query = a.query as unknown as { id: string };
  return <EditPage id={query.id} />;
};

export default Page;

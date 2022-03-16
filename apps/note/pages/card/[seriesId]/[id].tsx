import type { FunctionComponent } from 'react';
import { useEffect, useState } from 'react';

import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { UpdatePage } from '../../../components/update';

const Page: FunctionComponent = () => {
  const a = useRouter();

  console.log('a.', a.query);
  const inputAuth: string = (a.query?.auth ?? '') as unknown as string;

  const query = a.query as unknown as { id: string; seriesId: string };
  console.log('query', query);
  console.log('query', query);
  console.log('query', query);
  console.log('query', query);
  console.log('query', query);
  const [content, setContent] = useState('');
  const [card, setCard] = useState({});
  const [title, setTitle] = useState('');

  const localVarPath = '/api/v1/tapir/horse/series/card/update';

  useEffect(() => {
    const localVarPath = `/api/v1/tapir/horse/series/card/get?seriesId=${query.seriesId}&id=${query.id}`;

    fetch(localVarPath, {
      method: 'GET', // or 'PUT'
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: inputAuth ?? 'xxx',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data);

        setContent(data?.record?.card.content ?? '');
        setTitle(data?.record?.card.title ?? '');
        setCard(data?.record?.card);
        //
        // code
        //   :
        //   2001
        // msg
        //   :
        //   ""
        // record
        //   :
        //   card
        //     :
        //   {cardId: 'ELnANE4v', seriesId: '27n6bnEq', authorId: 'd51e9340f36511ec8e3ac5d5982bf0b9', seriesVersion: 0, title: '写文章内容', …}
        // series
        //   :
        // {id: '27n6bnEq', title: 'scala-scala', authorId: 'd51e9340f36511ec8e3ac5d5982bf0
        //
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [query]);

  console.log('query', query);
  console.log('title', title);
  console.log('content', content);
  console.log('card', card);
  return (
    <>
      {JSON.stringify(query)}
      <Button
        onClick={() => {
          // 'cardId': string;
          // 'seriesId': string;
          // 'title': string;
          // 'richHtml'?: string;
          // 'delta'?: string;
          // 'audioName'?: string;
          // 'videoName'?: string;
          // 'imageNames'?: Array<string>;
          // 'content': string;
          // 'postType': ConstantPostType;

          // 'seriesId': string;
          // 'title': string;
          // 'richHtml'?: string;
          // 'delta'?: string;
          // 'content'?: string;
          const data = {
            ...card,
            title,
            content,
          };
          fetch(localVarPath, {
            method: 'POST', // or 'PUT'
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              Authorization: inputAuth ?? 'xxx',
            },
            body: JSON.stringify(data),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log('Success:', data);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        }}
      >
        Update
      </Button>
      <UpdatePage
        value={{
          content,
          title,
        }}
        onChange={(v) => {
          setTitle(v.title);
          setContent(v.content);
          console.log('change', v);
        }}
      />
    </>
  );
};

export default Page;

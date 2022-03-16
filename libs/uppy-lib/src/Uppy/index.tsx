import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import '@uppy/file-input/dist/style.css';

import type { FunctionComponent } from 'react';
import React, { memo, useEffect, useState } from 'react';

import Uppy from '@uppy/core';
import FileInput from '@uppy/file-input';
import XHRUpload from '@uppy/xhr-upload';

interface PropsA {
  getAuth: () => string;
  uploadEndpoint: string;
}
export const UpppyButton: FunctionComponent<PropsA> = memo(
  ({
    getAuth,
    uploadEndpoint = '/api/v1/card/image/save',
  }) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
      const uppy = new Uppy({
        autoProceed: true,
      });
      uppy.setOptions({
        locale: {
          strings: {
            'Choose files': '上传图片',
            chooseFiles: '上传图片',
          },
        },
      });
      console.log('Uppy');
      uppy.use(FileInput, {
        target: '.Uppy',
        inputName: 'Input',
      });
      uppy.use(XHRUpload, {
        endpoint: uploadEndpoint,
        formData: true,
        fieldName: 'file',
        headers: () => {
          console.log('x');
          return {
            authorization: getAuth(),
          };
        },
        getResponseData: (v, item) => {
          const a = JSON.parse(v);
          console.log('v', item);
          console.log('a', a);
        },
      });
      return () => {
        uppy.close();
      };
    }, [getAuth, uploadEndpoint]);

    const [groupId] = useState<string>('');
    const [userId, setUserId] = useState('');

    return (
      <>
        div
        <>
          <div className="Uppy">
          </div>

          <div className="UppyProgressBar" />
          <button
            onClick={() => {
              const a = document.getElementsByClassName(
                'uppy-FileInput-btn'
              )[0] as HTMLElement;
              a.click();
            }}
          >
            open
          </button>
        </>
      </>
    );
  }
);

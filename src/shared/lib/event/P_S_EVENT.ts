import { FormEvent } from 'react';

export default (e: FormEvent, cb: Function) => {
  e.preventDefault();
  e.stopPropagation();
  cb(e);
};

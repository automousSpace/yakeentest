import {atom, useAtom} from 'jotai';

const toastAtom = atom('');

export default () => useAtom(toastAtom);

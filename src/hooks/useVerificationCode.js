import {atom, useAtom} from 'jotai';
const _atom = atom('');

export default () => useAtom(_atom);

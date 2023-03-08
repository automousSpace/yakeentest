import {atom, useAtom} from 'jotai';

const searchAtom = atom(null);

export default () => useAtom(searchAtom);

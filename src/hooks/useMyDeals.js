import {atom, useAtom} from 'jotai';

const myDealsAtom = atom([]);

export default () => useAtom(myDealsAtom);

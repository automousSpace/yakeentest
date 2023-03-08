import {atom, useAtom} from 'jotai';

const transAtom = atom(false);

export default () => useAtom(transAtom);

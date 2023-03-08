import {useAtom} from 'jotai';
import {atomWithStorage} from 'jotai/utils';

const authAtom = atomWithStorage({});

export default () => useAtom(authAtom);

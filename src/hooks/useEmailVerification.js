import {useAtom} from 'jotai';
import {atomWithStorage} from 'jotai/utils';

const emailVerificationAtom = atomWithStorage(false);

export default () => useAtom(emailVerificationAtom);

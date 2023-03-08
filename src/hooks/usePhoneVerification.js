import {useAtom} from 'jotai';
import {atomWithStorage} from 'jotai/utils';

const phoneVerificationAtom = atomWithStorage(false);

export default () => useAtom(phoneVerificationAtom);

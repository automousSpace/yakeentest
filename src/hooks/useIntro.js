import {useAtom} from 'jotai';
import {atomWithStorage} from 'jotai/utils';

const showIntroAtom = atomWithStorage(true);

export default () => useAtom(showIntroAtom);

import { atom, useAtom } from "jotai";

import { store } from ".";

const cmdkAtom = atom(false);

export const useCmdkStore = () => {
  const [isOpen, setIsOpen] = useAtom(cmdkAtom, { store });

  return {
    isOpen,
    onClose: () => setIsOpen(false),
    onOpen: () => setIsOpen(true),
  };
};

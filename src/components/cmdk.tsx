"use client";

import React from "react";
import type { ButtonProps } from "@nextui-org/button";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Modal, ModalContent } from "@nextui-org/modal";
import { CloseIcon, SearchLinearIcon } from "@nextui-org/shared-icons";
import { isAppleDevice, isWebKit } from "@react-aria/utils";
import { Command } from "cmdk";

import { useCmdkStore } from "@/stores/cmdk-store";
import { cn } from "@/lib/utils";
import { useEventListener } from "@/hooks/use-event-listner";

export function Cmdk() {
  const [query, setQuery] = React.useState("");

  const { isOpen, onClose, onOpen } = useCmdkStore();

  useEventListener("keydown", (e) => {
    const hotkey = isAppleDevice() ? e.metaKey : e.ctrlKey;

    if (e.key.toLowerCase() === "k" && hotkey) {
      e.preventDefault();
      isOpen ? onClose() : onOpen();
    }
  });

  return (
    <Modal
      hideCloseButton
      isOpen={isOpen}
      onClose={onClose}
      backdrop="blur"
      placement="top-center"
      scrollBehavior="inside"
      size="xl"
      classNames={{
        base: "mt-[20vh] border-small dark:border-default-100 supports-[backdrop-filter]:bg-background/80 dark:supports-[backdrop-filter]:bg-background/30 supports-[backdrop-filter]:backdrop-blur-md supports-[backdrop-filter]:backdrop-saturate-150",
      }}
    >
      <ModalContent>
        <Command className="max-h-full overflow-y-auto">
          <div className="flex w-full items-center border-b border-default-400/50 px-4 dark:border-default-100">
            <SearchLinearIcon className="h-6 w-6 text-lg text-default-400" />
            <Command.Input
              autoFocus={!isWebKit()}
              placeholder="Search"
              value={query}
              onValueChange={setQuery}
              className="h-14 w-full rounded-none bg-transparent px-2 font-sans text-lg text-default-700 outline-none placeholder:text-default-500 dark:text-default-500 dark:placeholder:text-default-300"
            />
            {query.length > 0 && <CloseButton onPress={() => setQuery("")} />}
            <Kbd className="ml-2 hidden border-none px-2 py-1 text-[0.6rem] font-medium md:block">
              ESC
            </Kbd>
          </div>

          <Command.List
            role="listbox"
            className="mt-2 max-h-[50vh] overflow-y-auto px-4 pb-4"
          >
            {query.length > 0 && (
              <Command.Empty>
                <div className="flex h-32 flex-col items-center justify-center text-center">
                  <div>
                    <p>No results for &quot;{query}&quot;</p>
                    {query.length === 1 ? (
                      <p className="text-default-400">
                        Try adding more characters to your search term.
                      </p>
                    ) : (
                      <p className="text-default-400">
                        Try searching for something else.
                      </p>
                    )}
                  </div>
                </div>
              </Command.Empty>
            )}
          </Command.List>
        </Command>
      </ModalContent>
    </Modal>
  );
}

const CloseButton = ({ onPress, className, ...props }: ButtonProps) => {
  return (
    <Button
      isIconOnly
      className={cn(
        "border border-default-400 data-[hover=true]:bg-content2 dark:border-default-100",
        className
      )}
      radius="full"
      size="sm"
      variant="bordered"
      onPress={onPress}
      {...props}
    >
      <CloseIcon />
    </Button>
  );
};

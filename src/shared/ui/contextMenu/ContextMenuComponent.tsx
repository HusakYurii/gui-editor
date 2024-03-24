import type { FC, PropsWithChildren } from "react";
import { useEffect, useRef, useState } from "react";
import { useServices } from "../../services";
import { TContextMenuComponentProps } from "../../../types/shared/ui/contextMenu";

export const ContextMenuComponent: FC<
  PropsWithChildren<TContextMenuComponentProps>
> = ({ checkers, children }) => {
  const { contextMenu } = useServices();
  const [contextMenuState, setContextMenuState] = useState({
    left: 0,
    top: 0,
    display: "none",
  });
  const contextMenuContainer = useRef(document.createElement("div"));

  const openContextMenu = ({ clientX, clientY, target }: MouseEvent) => {
    if (checkers.showContextMenu(target as HTMLElement)) {
      setContextMenuState(() => ({
        display: "block",
        left: clientX - 5,
        top: clientY - 5,
      }));
    }
  };

  const closeContextMenu = () => {
    if (contextMenuState.display !== "block") {
      return;
    }
    setContextMenuState((state) => ({
      ...state,
      display: "none",
    }));
  };

  useEffect(() => {
    const contextMenu = contextMenuContainer.current;
    window.addEventListener("contextmenu", openContextMenu);
    window.addEventListener("click", closeContextMenu);
    contextMenu.addEventListener("mouseleave", closeContextMenu);

    return () => {
      window.removeEventListener("contextmenu", openContextMenu);
      window.removeEventListener("click", closeContextMenu);
      contextMenu.removeEventListener("mouseleave", closeContextMenu);
    };
    // I need those dependencies to re add listeners each time state changes
    // because all the handlers are recreated as well
  }, [contextMenuContainer, contextMenuState]);

  return (
    <>
      {contextMenu.createContextmenu(
        <div
          className="absolute"
          ref={contextMenuContainer}
          style={{ ...contextMenuState }}
        >
          {children}
        </div>
      )}
    </>
  );
};

import { FC, useRef } from "react";
import { TContextMenuListComponentProps } from "../../types/shared/ui/contextMenuList";
import { ENTITY_TYPES, TEntityType } from "../../types/entities/store/entity";
import { TREE_NODE_DATA_ATTRIBUTES, TreeEntity } from "../../entities/tree";
import { ContextMenuComponent } from "../../shared/ui/contextMenu";
import { ContextMenuListComponent } from "../../shared/ui/contextMenuList";
import { getDataAttribute } from "../../shared/dom";
import { useAppStoreDispatch, createNode } from "../../features/store";

export const TreeWidget: FC = () => {
  const dispatcher = useAppStoreDispatch();
  const treeContainer = useRef<HTMLDivElement>(document.createElement("div"));

  let lastHoveredNodeId: string = "";

  const checkers = {
    showContextMenu: (node: HTMLElement) => {
      const nodeID = getDataAttribute(TREE_NODE_DATA_ATTRIBUTES.ID, node);
      const isChild = treeContainer.current.contains(node);
      if (nodeID) {
        lastHoveredNodeId = nodeID;
      }

      return isChild && Boolean(nodeID);
    },
  };

  const handleContextMenuAction = (id: string) => {
    const entityType = id as TEntityType;
    dispatcher(
      createNode({
        parentNodeId: lastHoveredNodeId,
        entityType,
      })
    );
  };

  const list: TContextMenuListComponentProps = [
    {
      id: ENTITY_TYPES.CONTAINER,
      label: "Container",
      onClick: handleContextMenuAction,
    },
    {
      id: ENTITY_TYPES.SPRITE,
      label: "Sprite",
      onClick: handleContextMenuAction,
    },
  ];

  return (
    <div className="pt-2 pl-4 pr-2" ref={treeContainer}>
      <TreeEntity />
      <ContextMenuComponent checkers={checkers}>
        <ContextMenuListComponent list={list} />
      </ContextMenuComponent>
    </div>
  );
};
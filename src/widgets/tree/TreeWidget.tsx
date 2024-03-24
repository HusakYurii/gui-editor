import { FC, useRef } from "react";
import { TContextMenuListComponentProps } from "../../types/shared/ui/contextMenuList";
import { ENTITY_TYPES, TEntityType } from "../../types/entities/store/entity";
import { TREE_NODE_DATA_ATTRIBUTES, TreeEntity } from "../../entities/ui/tree";
import { ContextMenuComponent } from "../../shared/ui/contextMenu";
import { ContextMenuListComponent } from "../../shared/ui/contextMenuList";
import { getDataAttribute } from "../../shared/dom";
import { useAppStoreDispatch, createNode } from "../../features/store";

export const TreeWidget: FC = () => {
  const dispatcher = useAppStoreDispatch();
  const treeContainer = useRef<HTMLDivElement>(document.createElement("div"));

  let lastHoveredNodeId: string | undefined;

  const checkers = {
    showContextMenu: (node: HTMLElement) => {
      const nodeID = getDataAttribute(TREE_NODE_DATA_ATTRIBUTES.ID, node);
      const isChild = treeContainer.current.contains(node);
      lastHoveredNodeId = nodeID;

      return isChild && Boolean(nodeID);
    },
  };

  const handleContextMenuAction = (id: string) => {
    const entityType = id as TEntityType;
    if (!lastHoveredNodeId) {
      console.error(
        "Can't add an entity because last hovered node id was undefined"
      );
      return;
    }

    dispatcher(
      createNode({
        parentNodeId: lastHoveredNodeId,
        entityType,
      })
    );
  };

  const entityTypesWithLabels: Record<TEntityType, string> = {
    [ENTITY_TYPES.CONTAINER]: "Container",
    [ENTITY_TYPES.SPRITE]: "Sprite",
    [ENTITY_TYPES.TEXT]: "Text",
    [ENTITY_TYPES.GRAPHICS]: "Graphics",
    [ENTITY_TYPES.NINE_SLICE_SPRITE]: "Nine Slice Sprite",
  };

  const list: TContextMenuListComponentProps = Object.entries(
    entityTypesWithLabels
  ).map(([entityType, label]) => ({
    id: entityType,
    label,
    onClick: handleContextMenuAction,
  }));

  return (
    <div className="pt-2 pl-4 pr-2" ref={treeContainer}>
      <TreeEntity />
      <ContextMenuComponent checkers={checkers}>
        <ContextMenuListComponent list={list} />
      </ContextMenuComponent>
    </div>
  );
};

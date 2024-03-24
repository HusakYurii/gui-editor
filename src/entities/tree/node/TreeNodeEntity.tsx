import { useState } from "react";
import type { FC } from "react";
import type { TNodeData } from "../../../types/entities/store/tree";
import { useAppStoreSelector } from "../../../features/store";
import {
  ContainerIcon,
  GraphicsIcon,
  NineSliceSpriteIcon,
  SpriteIcon,
  TextIcon,
  PlusIcon,
  MinusIcon,
} from "../icons";
import {
  TEntityType,
  ENTITY_TYPES,
} from "../../../types/entities/store/entity";
import { TREE_NODE_DATA_ATTRIBUTES } from "./constants";
import TreeNodeStyles from "./TreeNode.module.css";

const ENTITY_TO_ICONS_MAP: Record<TEntityType, () => JSX.Element> = {
  [ENTITY_TYPES.SPRITE]: SpriteIcon,
  [ENTITY_TYPES.NINE_SLICE_SPRITE]: NineSliceSpriteIcon,
  [ENTITY_TYPES.TEXT]: TextIcon,
  [ENTITY_TYPES.CONTAINER]: ContainerIcon,
  [ENTITY_TYPES.GRAPHICS]: GraphicsIcon,
};

const createChildrenNodes = (children: TNodeData[]) => {
  return children.map((child) => (
    <TreeNodeEntity key={child.id} nodeData={child} />
  ));
};

export const TreeNodeEntity: FC<{ nodeData: TNodeData }> = ({ nodeData }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const entity = useAppStoreSelector(
    (state) => state.entities[nodeData.entityId]
  );

  const hasChildren = Boolean(nodeData.children.length);

  const handleClick = () => setIsExpanded(!isExpanded);

  return (
    <div className="select-none text-base pl-3 mt-1">
      {/* This is the icon that shows whether a node is collapsed */}
      <div className="relative">
        {hasChildren && (
          <div
            className={`bg-gray-500 ${TreeNodeStyles.togglerIcon}`}
            onClick={handleClick}
          >
            {isExpanded ? <MinusIcon /> : <PlusIcon />}
          </div>
        )}
        <div
          className={`flex items-center ${
            nodeData.isRootNode ? "" : TreeNodeStyles.horizontalConnectLine
          }`}
        >
          {/* This is the icon that shows the type of the node, like sprite, container etc */}
          {ENTITY_TO_ICONS_MAP[entity.type]()}
          {/* This is the actual name of the node. This element will be used other logic of mutating the tree */}
          <span
            className="w-full border-2 border-transparent hover:bg-gray-500"
            {...{
              [TREE_NODE_DATA_ATTRIBUTES.ID]: nodeData.id,
              [TREE_NODE_DATA_ATTRIBUTES.NAME]: entity.name,
            }}
          >
            {entity.name}
          </span>
        </div>
      </div>
      {isExpanded && hasChildren && createChildrenNodes(nodeData.children)}
    </div>
  );
};

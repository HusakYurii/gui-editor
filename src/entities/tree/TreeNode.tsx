import { useState } from "react";
import type { FC } from "react";
import type { TNodeData } from "../../types/entities/store/tree";
import { useAppStoreSelector } from "../../features/store";
import { PlusIcon, MinusIcon } from "../../shared/icons/tree";
import { TREE_NODE_DATA_ATTRIBUTES } from "./constants";
import { ENTITY_ICONS_MAP } from "./entityIconsMap";
import TreeNodeStyles from "./TreeNode.module.css";

const createChildrenNodes = (children: TNodeData[]) => {
  return children.map((child) => <TreeNode key={child.id} nodeData={child} />);
};

export const TreeNode: FC<{ nodeData: TNodeData }> = ({ nodeData }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const entity = useAppStoreSelector(
    (state) => state.entities[nodeData.entityId]
  );

  const hasChildren = Boolean(nodeData.children.length);

  const handleClick = () => setIsExpanded(!isExpanded);

  return (
    <div
      className="select-none text-base pl-3 mt-1"
      {...{ [TREE_NODE_DATA_ATTRIBUTES.ID]: nodeData.id }}
    >
      <div
        className="relative"
        {...{ [TREE_NODE_DATA_ATTRIBUTES.NAME]: entity.name }}
      >
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
            nodeData.isRootNode ? "" : TreeNodeStyles.connectLine
          }`}
        >
          {ENTITY_ICONS_MAP[entity.type]()}
          <span className="w-full border-2 border-transparent hover:bg-gray-500">
            {entity.name}
          </span>
        </div>
      </div>
      {isExpanded && hasChildren && createChildrenNodes(nodeData.children)}
    </div>
  );
};

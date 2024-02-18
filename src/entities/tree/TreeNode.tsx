import { useState } from "react";
import type { FC } from "react";
import type { TNodeData } from "../../types/entities/store/tree";
import { useAppStoreSelector } from "../../features/store";
import { PlusIcon, MinusIcon } from "../../shared/icons";
import TreeNodeStyles from "./TreeNode.module.css";

const TREE_NODE_DATA_ATTRIBUTES = {
  ID: "data-tree-node-id",
  NAME: "data-tree-node-name",
};

const createChildrenNodes = (children: TNodeData[]) => {
  return children.map((child) => <TreeNode key={child.id} nodeData={child} />);
};

export const TreeNode: FC<{ nodeData: TNodeData }> = ({ nodeData }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const { name } = useAppStoreSelector(
    (state) => state.entities[nodeData.entityId]
  );

  const hasChildren = Boolean(nodeData.children.length);

  const handleClick = () => setIsExpanded(!isExpanded);

  return (
    <div
      className="select-none text-base pl-3 mt-1"
      {...{ [TREE_NODE_DATA_ATTRIBUTES.ID]: nodeData.id }}
    >
      <div className="relative" {...{ [TREE_NODE_DATA_ATTRIBUTES.NAME]: name }}>
        {hasChildren && (
          <div
            className={`bg-gray-500 ${TreeNodeStyles.togglerIcon}`}
            onClick={handleClick}
          >
            {isExpanded ? <MinusIcon /> : <PlusIcon />}
          </div>
        )}

        <p
          className={`border-2 border-transparent ${
            nodeData.isRootNode ? "" : TreeNodeStyles.connectLine
          }`}
        >
          {name}
        </p>
      </div>
      {isExpanded && hasChildren && createChildrenNodes(nodeData.children)}
    </div>
  );
};

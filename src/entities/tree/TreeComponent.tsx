import { FC } from "react";
import { useAppStoreSelector } from "../../features/store";
import { TreeNode } from "./TreeNode";

export const TreeComponent: FC = () => {
  const tree = useAppStoreSelector((state) => state.tree);

  return <TreeNode key={tree.id} nodeData={tree} />;
};

import { FC } from "react";
import { useAppStoreSelector } from "../../features/store";
import { TreeNodeEntity } from "./node/TreeNodeEntity";

export const TreeEntity: FC = () => {
  const tree = useAppStoreSelector((state) => state.tree);

  return <TreeNodeEntity key={tree.id} nodeData={tree} />;
};

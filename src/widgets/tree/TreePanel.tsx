import { FC } from "react";
import { TreeComponent } from "../../entities/tree";

export const TreePanel: FC = () => {
  return (
    <div className="pt-2 pl-4 pr-2">
      <TreeComponent />
    </div>
  );
};

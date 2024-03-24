import { FC } from "react";
import { TContextMenuListComponentProps } from "../../../types/shared/ui/contextMenuList";

export const ContextMenuListComponent: FC<{
  list: TContextMenuListComponentProps;
}> = ({ list }) => {
  return (
    <ul className="min-w-[180px] overflow-auto rounded-sm border  bg-white p-1 text-sm  focus:outline-none">
      {list.map(({ id, label, onClick }) => {
        return (
          <li
            key={id}
            onClick={(event) => onClick(id, event)}
            className="block w-full cursor-pointer select-none rounded-sm p-1 transition-all hover:bg-gray-500 hover:bg-opacity-50 hover:text-white"
          >
            {label}
          </li>
        );
      })}
    </ul>
  );
};

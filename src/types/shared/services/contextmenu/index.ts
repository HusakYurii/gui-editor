import { ReactNode, ReactPortal } from "react";
import { TService } from "../baseService";

export type TContextMenuService = TService<{
    container: HTMLDivElement
}> & {
    createContextmenu: (child: ReactNode, key?: string) => ReactPortal
}
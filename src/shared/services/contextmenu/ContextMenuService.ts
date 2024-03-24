import { ReactNode } from "react";
import { TContextMenuService } from "../../../types/shared/services/contextmenu";
import { createPortal } from "react-dom";

export class ContextMenuService implements TContextMenuService {

    private _container: HTMLDivElement;

    /**
     * Essentially ContextMenuService uses the portal to draw all the elements
     * you need in a provided container
     * 
     * @param container - the container where all the elements will be rendered
     */
    constructor() {
        this._container = document.createElement("div");
        this._preventContextmenu = this._preventContextmenu.bind(this);
    }

    createContextmenu(child: ReactNode, key?: string | undefined) {
        return createPortal(child, this._container, key);
    }

    initialize(dependencies: {
        container: HTMLDivElement
    }) {
        this._container = dependencies.container;
        document.body.addEventListener("contextmenu", this._preventContextmenu);
        return Promise.resolve();
    }

    destroy() {
        this._container = null!;
        document.body.removeEventListener("contextmenu", this._preventContextmenu);
        return Promise.resolve();
    }

    private _preventContextmenu(event: Event) {
        event.preventDefault();
    }

}
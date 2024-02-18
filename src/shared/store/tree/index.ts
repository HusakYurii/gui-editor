import { TNodeData } from "../../../types/entities/store/tree";

export const getNodeById = (tree: TNodeData, id: string): TNodeData | null => {
    if (tree.id === id) {
        return tree;
    }

    for (let i = 0; i < tree.children.length; i++) {
        const node = tree.children[i];
        const found = getNodeById(node, id);
        if (found) {
            return found;
        }
    }
    return null;
};

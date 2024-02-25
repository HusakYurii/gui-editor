import { TNodeData } from "../../../types/entities/store/tree";

export const getNodeData = (
    id: string,
    entityId: string,
    parentId?: string | null,
    isRootNode?: boolean,
    children?: TNodeData[]
): TNodeData => {
    return {
        id,
        entityId,
        parentId: parentId ?? null,
        isRootNode: isRootNode ?? false,
        children: children ?? []
    };
};
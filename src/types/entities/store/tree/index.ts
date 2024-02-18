
export type TNodeData = {
    id: string;
    entityId: string;
    parentId: string | null;
    isRootNode?: boolean;
    children: TNodeData[];
};
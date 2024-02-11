export type TEntity = {
    id: string;
    name: string;
    tags: string[];
};

export type TEntitiesMap = Record<string, TEntity>;
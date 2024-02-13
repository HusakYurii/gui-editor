const idsHistory = new Set<string>();

export const initIdsHistory = (usedIds: string[] = []) => {
    usedIds.forEach(id => idsHistory.add(id));
}

export const cleanIdsHistory = () => {
    idsHistory.clear();
}

export const getId = (): string => {
    let uid = String(Math.floor(Math.random() * 100000));
    while (idsHistory.has(uid)) {
        uid = String(Math.floor(Math.random() * 100000));
    }
    idsHistory.add(uid);
    return uid;
}

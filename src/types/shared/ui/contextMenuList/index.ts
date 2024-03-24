export type TContextMenuListComponentProps = Array<{
    id: string;
    label: string;
    onClick: (
        id: string,
        event: React.MouseEvent<HTMLLIElement, MouseEvent>
    ) => void;
}>;
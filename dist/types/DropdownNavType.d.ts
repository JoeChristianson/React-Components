type SubItem = {
    name: string;
    href: string;
};
export type SubItemGroup = {
    heading?: string;
    subItems: SubItem[];
};
type Item = {
    name: string;
    href?: string;
    subItemGroups?: SubItemGroup[];
};
type DropdownNavType = {
    items: Item[];
};
export default DropdownNavType;

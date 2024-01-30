import { SubItemGroup } from "types/DropdownNavType";
import React from "react";
type Props = {
    className?: string;
    subItemGroups: SubItemGroup[];
};
declare const DropDownContent: ({ className, subItemGroups }: Props) => React.JSX.Element;
export default DropDownContent;

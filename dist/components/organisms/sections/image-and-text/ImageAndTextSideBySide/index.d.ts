import React, { ReactNode } from "react";
type Props = {
    className?: string;
    src: string;
    alt: string;
    children: ReactNode;
    backboxBg?: string;
    reverse?: boolean;
};
declare const ImageAndTextSideBySide: ({ className, src, alt, children, reverse, backboxBg }: Props) => React.JSX.Element;
export default ImageAndTextSideBySide;

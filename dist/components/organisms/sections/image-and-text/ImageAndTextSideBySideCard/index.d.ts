import React, { ReactNode } from "react";
type Props = {
    className?: string;
    src: string;
    alt: string;
    children: ReactNode;
};
declare const ImageAndTextSideBySideCard: ({ className, src, alt, children }: Props) => React.JSX.Element;
export default ImageAndTextSideBySideCard;

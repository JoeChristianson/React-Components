import React, { ReactNode } from "react";
import SocialsObject from "../../../../types/SocialsObject";
type Props = {
    className?: string;
    socials?: SocialsObject;
    src: string;
    alt: string;
    logoText: ReactNode;
};
declare const StandardFooter: ({ className, socials, src, alt, logoText }: Props) => React.JSX.Element;
export default StandardFooter;

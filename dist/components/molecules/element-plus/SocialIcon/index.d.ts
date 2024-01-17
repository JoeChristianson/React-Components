import { SocialPlatform } from "../../../../utils/socials/getSocialIcon";
import React from "react";
type Props = {
    className?: string;
    platform: SocialPlatform;
    href?: string;
};
declare const SocialIcon: ({ className, platform, href }: Props) => React.JSX.Element;
export default SocialIcon;

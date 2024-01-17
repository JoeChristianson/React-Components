import SocialsObject from "../../types/SocialsObject";
import { SocialPlatform } from "./getSocialIcon";
type Args = {
    socials: SocialsObject;
};
declare const getSocialsList: ({ socials }: Args) => {
    platform: SocialPlatform;
    href: string | undefined;
}[];
export default getSocialsList;

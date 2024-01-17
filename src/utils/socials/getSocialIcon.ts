import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
    faYoutube,
    faPinterest,
    faSnapchat,
    faTiktok,
    faReddit,
    faTumblr,
    faFlickr,
    faTwitch,
    faVimeo,
    faWhatsapp,
    faTelegram,
    faDiscord
} from '@fortawesome/free-brands-svg-icons';

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const socialMediaIcons = new Map<SocialPlatform,any>()

socialMediaIcons.set("Facebook", faFacebook);
socialMediaIcons.set("Twitter", faTwitter);
socialMediaIcons.set("Instagram", faInstagram);
socialMediaIcons.set("LinkedIn", faLinkedin);
socialMediaIcons.set("YouTube", faYoutube);
socialMediaIcons.set("Pinterest", faPinterest);
socialMediaIcons.set("Snapchat", faSnapchat);
socialMediaIcons.set("TikTok", faTiktok);
socialMediaIcons.set("Reddit", faReddit);
socialMediaIcons.set("Tumblr", faTumblr);
socialMediaIcons.set("Flickr", faFlickr);
socialMediaIcons.set("Twitch", faTwitch);
socialMediaIcons.set("Vimeo", faVimeo);
socialMediaIcons.set("WhatsApp", faWhatsapp);
socialMediaIcons.set("Telegram", faTelegram);
socialMediaIcons.set("Discord", faDiscord);
socialMediaIcons.set("Email", faPaperPlane);


export type SocialPlatform = "Facebook" | "Twitter" | "Instagram" | "LinkedIn" | "YouTube" | "Pinterest" | "Snapchat" | "TikTok" | "Reddit" | "Tumblr" | "Flickr" | "Twitch" | "Vimeo" | "WhatsApp" | "Telegram" | "Discord" | "Email"


const getSocialIcon = (platform:SocialPlatform)=>{
    const icon = socialMediaIcons.get(platform)
    return icon
}

export default getSocialIcon
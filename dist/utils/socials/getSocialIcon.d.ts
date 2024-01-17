export type SocialPlatform = "Facebook" | "Twitter" | "Instagram" | "LinkedIn" | "YouTube" | "Pinterest" | "Snapchat" | "TikTok" | "Reddit" | "Tumblr" | "Flickr" | "Twitch" | "Vimeo" | "WhatsApp" | "Telegram" | "Discord" | "Email";
declare const getSocialIcon: (platform: SocialPlatform) => any;
export default getSocialIcon;

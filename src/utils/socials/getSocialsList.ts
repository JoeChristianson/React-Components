import SocialsObject from "../../types/SocialsObject"
import { SocialPlatform } from "./getSocialIcon"

type Args = {
    socials:SocialsObject
}

const getSocialsList = ({socials}: Args) => {
    const socialsArray = []
    
    for (let key in socials){
        const platform:SocialPlatform = key as any
        socialsArray.push({platform,href:socials[platform]})
    }
    return socialsArray
    
}

export default getSocialsList
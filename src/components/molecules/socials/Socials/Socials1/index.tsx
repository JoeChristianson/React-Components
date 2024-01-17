import styles from "./index.module.scss"
import React from "react"
import SocialIcon from "../../../../../components/molecules/element-plus/SocialIcon"
import SocialsObject from "../../../../../types/SocialsObject"
import getSocialsList from "../../../../../utils/socials/getSocialsList"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Props = {
className?:string
    socials?:SocialsObject
}

const Socials1 = ({className,socials}: Props) => {

const fullClassName = styles.div+" " + className||""


    if(!socials){
        return<></>
    }
    const socialsList = getSocialsList({socials})

    return <div className={fullClassName}>
        {socialsList.map((social,index)=>{
            const {platform,href} = social
            return<SocialIcon
            key={index}
            platform={platform}
            href={href}
            ></SocialIcon>
        })}
    </div>
}

export default Socials1
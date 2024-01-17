import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import getSocialIcon, { SocialPlatform } from "../../../../utils/socials/getSocialIcon"
import styles from "./index.module.scss"
import React from "react"

type Props = {
className?:string
    platform:SocialPlatform
    href?:string
}

const SocialIcon = ({className,platform,href}: Props) => {

const fullClassName = styles.div+" " + className||""
const icon = getSocialIcon(platform)

    return <div className={fullClassName}>
        <a href={href||""} target="_blank">
        <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
        </a>
    </div>
}

export default SocialIcon
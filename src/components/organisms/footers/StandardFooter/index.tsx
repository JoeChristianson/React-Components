import styles from "./index.module.scss"
import React, { ReactNode } from "react"
import LogoAndName from "../../../../components/molecules/logo/LogoAndName"
import Socials1 from "../../../../components/molecules/socials/Socials/Socials1"
import SocialsObject from "../../../../types/SocialsObject"

type Props = {
    className?:string
    socials?:SocialsObject
    src:string
    alt:string
    logoText:ReactNode
}

const StandardFooter = ({className,socials,src,alt,logoText}: Props) => {

const fullClassName = styles.footer+" " + className||""


    return <footer className={fullClassName}>
        <div className={styles.left}>
            <LogoAndName
            src={src}
            alt={alt}
            >{logoText}</LogoAndName>
        </div>
        <div className={styles.center}></div>
        <div className={styles.right}><Socials1
        socials={socials}
        ></Socials1></div>

    </footer>
}

export default StandardFooter
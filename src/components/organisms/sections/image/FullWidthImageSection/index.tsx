import React from "react"
import styles from "./index.module.scss"
import bgImage from "../../../../../utils/images/bgImage"

type Props = {
    src:string
    alt:string
    className?:string
}

const FullWidthImageSection = ({src,alt,className}: Props) => {
    
    const fullClassName = `${styles.section} ${className||""}`

    const style = {
        backgroundImage:bgImage(src)
    }

return <section style={style} className={fullClassName}>

    </section>
}

export default FullWidthImageSection
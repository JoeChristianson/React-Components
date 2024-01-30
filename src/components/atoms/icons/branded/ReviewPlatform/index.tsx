import styles from "./index.module.scss"
import React from "react"

type Props = {
className?:string
    platform:ReviewSourceType
}

const ReviewPlatformIcon = ({className,platform}: Props) => {

const fullClassName = styles.div+" " + className||""

    const logos = {
        yelp:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Yelp.svg/640px-Yelp.svg.png",
        google:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/640px-Google_%22G%22_logo.svg.png"
    }

    return <div className={fullClassName}>
        <img src={logos[platform]} alt={platform}></img>
    </div>
}

export default ReviewPlatformIcon
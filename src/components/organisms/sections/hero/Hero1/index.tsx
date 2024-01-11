import React from "react"
import styles from "./index.module.scss"
import SideBySide from "../../../../atoms/containers/SideBySide"
import FullHeightSection from "../../../../atoms/FullHeightSection"
import BoldLightHeading from "../../../../molecules/element-plus/BoldLightHeading"
import PaddedDiv from "../../../../atoms/containers/PaddedDiv"
import ParagraphSplitter from "../../../../molecules/element-plus/ParagraphSplitter"
import ImageBottomDiv from "../../../../molecules/image/ImageBottomDiv"
import BounceButton from "../../../../atoms/buttons/BounceButton"

type Props = {
    boldHeading:string
    lightHeading:string
    paragraph:string
    image:string
    ctaHref?:string
    className?:string
}

const Hero1 = ({boldHeading,lightHeading,paragraph,className,image,ctaHref}: Props) => {
    
    const fullClassName = `${styles.section} ${className||""}`
    
    return <FullHeightSection className={fullClassName}>
        <SideBySide>
            <PaddedDiv className={styles.left}>
            <div>
            <BoldLightHeading
            boldHeading={boldHeading}
            lightHeading={lightHeading}
            ></BoldLightHeading>
            </div>
            <div className={styles['paragraph-cta']}>
            <ParagraphSplitter
            text={paragraph}
            ></ParagraphSplitter>
            <div className={styles.cta}>
            <a href={ctaHref||"/contact"}>
            <BounceButton className={styles.box}>
                <h2>
                Book Now
                </h2>
            </BounceButton>
            </a>
            </div>
            </div>
            </PaddedDiv>
            <ImageBottomDiv
            className={styles["image-cont"]}
            src={image}
            alt="woman-in-diamond-necklace"
            ></ImageBottomDiv>
        </SideBySide>
    </FullHeightSection>
}

export default Hero1
import React from "react"
import styles from "./index.module.scss"
import SideBySide from "../../../../../atoms/containers/SideBySide"
import ImageStele from "../../../../../molecules/image/ImageStele"
import AppointmentForm1 from "../../../../../organisms/forms/appointments/AppointmentForm1"

type Props = {
    src:string
    alt:string
    availableServices:string[]
    steleBg?:string
    className?:string
}

const AppointmentBooking1 = ({src,alt,steleBg,availableServices,className}: Props) => {
    
    const fullClassName = `${styles.section} ${className||""}`
    
    return <section className={fullClassName}>
        <SideBySide className={styles['side-by-side']}>
            <>
            <div className={styles.left}>
            <ImageStele
            steleBg={steleBg}
            className={styles['stele-cont']}
            src={src}
            alt={alt}
            ></ImageStele>
            </div>
            <AppointmentForm1
            availableServices={availableServices}
            className={styles['form-cont']}
            ></AppointmentForm1>
            </>
        </SideBySide>
    </section>
}

export default AppointmentBooking1
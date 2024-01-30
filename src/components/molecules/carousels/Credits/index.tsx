"use client"

import CreditType from "types/CreditType"
import defaultCreditCards, { IAwardDetail } from "./defaultCreditCards"
import styles from "./index.module.scss"
import React, { useEffect, useState } from "react"
import Anchor1 from "../../../../components/atoms/anchors/Anchor1"

type Props = {
className?:string
creditCards?:CreditType[][]
cardIndexUseState?:[number,React.Dispatch<number>]
}

const d = {
    creditCards:defaultCreditCards
}

const Credits = ({className,creditCards,cardIndexUseState}: Props) => {

const fullClassName = styles.section+" " + className||""
    const [currentIndex,setCurrentIndex] = cardIndexUseState||useState(0)

    const cardsArray = creditCards||d.creditCards

    useEffect(()=>{
        const interval = setInterval(()=>setCurrentIndex((currentIndex+1)%cardsArray.length),4000)
        return ()=>clearInterval(interval)
    },[currentIndex])

    const currentCard = cardsArray[currentIndex]

    return <section className={fullClassName}>
        {currentCard.map((credit:CreditType,index:number)=>{
            const {top,bottom,href} = credit
        return<div className={styles.credit}>
            <Anchor1 href={href} targetBlank={true}>
            <h4>{top}</h4>
            <h3>{bottom}</h3>
            </Anchor1>
        </div>
        })}
    </section>
}

export default Credits
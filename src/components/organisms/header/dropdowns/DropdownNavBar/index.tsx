"use client"

import DropdownNavType from "types/DropdownNavType"
import DropdownNavBar1 from "../../../../molecules/nav/dropdowns/DropdownNavBar1"
import styles from "./index.module.scss"
import React, { useEffect, useRef, useState } from "react"
import DropdownHamburger1 from "../../../../../components/atoms/buttons/hamburgers/DropdownHamburger1"



type Props = {
className?:string
src?:string
dropdownNav?:DropdownNavType
}

type DProps = {

    src:string
    dropdownNav:DropdownNavType
}



const d:DProps = {
    src:"http://northernlightsfilms.com/wp-content/uploads/2016/12/logo4.png",
    dropdownNav:{items:[
        {name:"Home",href:"/"},
        {name:"About Us",href:"/about-us"},
        {name:"Our Films",subItemGroups:[
            {subItems:[
                {name:"To The Stars (2019)",href:"/films/to-the-stars"},
                {name:"The Hero (2017)",href:"/films/the-hero"},
                {name:"Kicks (2016)",href:"/films/kicks"},
                {name:"I'll See You in My Dreams (2015)",href:"/films/ill-see-you-in-my-dreams"},
                {name:"It Follows (2014)",href:"/films/it-follows"},
                {name:"The Brass Teapot (2012)",href:"/films/the-brass-teapot"},
                {name:"The High Road",href:"/films/the-high-road"}
            ]}
        ]
        },
        {name:"Awards & Accolades",href:"/awards-and-accolades"},
        {name:"Contact",href:"/#contact"}
    ]
}
}



const DropdownHeader1 = ({className,src,dropdownNav}: Props) => {
    const ref = useRef<HTMLElement|null>(null)

let fullClassName = styles.header+" " + className||""


    useEffect(()=>{
        if(ref.current){
            window.addEventListener('scroll', function() {
                const header = ref.current
                if(header){   
                    header.classList.toggle(styles.scrolled, window.scrollY > 50);
                }
              });
        }
    },[ref.current])


    return <header ref={ref} className={fullClassName}>
        <div className={styles.centerer}>
        <div className={styles.left}>

        <a href="/">
        <img src={src||d.src}></img>
        </a>
        </div>
        <DropdownHamburger1
        navItems={dropdownNav||d.dropdownNav}
        ></DropdownHamburger1>
        <DropdownNavBar1
        dropdownNav={dropdownNav||d.dropdownNav}
        ></DropdownNavBar1>
        </div>
    </header>
}

export default DropdownHeader1
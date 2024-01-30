import React from "react"

const HalfStar = ()=>{
    return<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="halfGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="50%" stopColor="#FFC107" stopOpacity="1" />
            <stop offset="50%" stopColor="#FFF" stopOpacity="1" />
        </linearGradient>
    </defs>
    <path d="M12 .587l3.668 7.431 8.2 1.191-5.934 5.787 1.402 8.174-7.336-3.858-7.336 3.858 1.402-8.174L.132 9.209l8.2-1.191L12 .587z" fill="url(#halfGrad)"/>
</svg>



}

export default HalfStar
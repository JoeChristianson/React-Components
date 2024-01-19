// this map is for images that are not png

const imageMap = new Map<string,string>()
imageMap.set("next","nextJS.webp")


const getImageURL = ({tech}:{tech:string})=>{
    const match = imageMap.get(tech)
    if(match){
        return `/images/tech/${match}`
    }
    return `/images/tech/${tech}.png`
}

export default getImageURL
// add additonal option types as required

import LinkType from "./LinkType"

type CardType = {
    img?:string
    alt?:string
    heading?:string
    subheading?:string
    text?:string
    links?:LinkType[]
}

export default CardType
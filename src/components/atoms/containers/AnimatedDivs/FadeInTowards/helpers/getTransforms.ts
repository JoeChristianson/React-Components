import Direction from "../../../../../../types/animation/Direction"

type Args = {
    direction?:Direction
    scale?:number
}

const getTransforms = ({direction,scale}: Args) => {
    
    const dir = direction||"left"
    const scl = scale||30

    switch (dir){
        case "left":
            return {
                hiddenTransform:`translateX(-${scl}px)`,
                visibleTransform:`translateX(0px)`
            }
            case "right":
                return {
                    hiddenTransform:`translateX(${scl}px)`,
                    visibleTransform:`translateX(0px)`
                }
                case "up":
                    return {
                        hiddenTransform:`translateY(-${scl}px)`,
                        visibleTransform:`translateY(0px)`
                    }
                    case "down":
                        return {
                            hiddenTransform:`translateY(${scl}px)`,
                            visibleTransform:`translateY(0px)`
                        }    
    }
}

export default getTransforms
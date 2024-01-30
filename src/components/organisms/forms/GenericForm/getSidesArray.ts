import FormInputType from "types/FormInput"

type Args = {
    inputs:FormInputType[]
}

type Side = "left" | "right" |"full"

const getSidesArray = ({inputs}: Args) => {
    const array:Side[] = []
    inputs.forEach((input,index)=>{
        if(input.width===2||!input.width){
            array.push("full")
        }
        else if(index===0){
            array.push("left")
        }
        else if(array[index-1]==="left"){
            array.push("right")
        }
        else{
            array.push("left")
        }
    })
    return array
    
}

export default getSidesArray
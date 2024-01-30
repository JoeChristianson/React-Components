const makeArrayFromObject = ({object}:{object:any})=>{
    const array:{
        key:string,
        value:any
    }[] = []
    for (let key in object){
        const res = {key:key,value:object[key]}
        array.push(res)
    }
    return array
}

export default makeArrayFromObject
const getStarsArray = (number:number)=>{
    const array = []
    for (let i = 0;i<number;i++){
        if(number-i>=1){
            array.push("full")
        }else{
            array.push("half")
        }
    }
    return array
}

export default getStarsArray
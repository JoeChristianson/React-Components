const makeAlt = (imageUrl:string)=>{
    const baseName = imageUrl.split('/').pop();
    if(!baseName){
        return imageUrl
    }
    const filenameWithoutExtension = baseName.split('.').slice(0, -1).join('.');
    const withoutHyphens = filenameWithoutExtension.replaceAll("-"," ")
    return withoutHyphens
}

export default makeAlt
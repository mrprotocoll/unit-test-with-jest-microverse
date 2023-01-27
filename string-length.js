function stringLength(string) {
    const length = string.trim().length;
    if(length < 1){
        throw new Error("String must have atleast 1 character")
    }else if(length > 10){
        throw new Error("String must not be more than 10 characters")
    }else{
        return length;
    }
}

module.exports = stringLength;
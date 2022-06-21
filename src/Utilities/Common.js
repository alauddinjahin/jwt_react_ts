function upperCase(str){
    return str && typeof str == "string" ? str.toUpperCase() : str;
}

function lowerCase(str){
    return str && typeof str == "string" ? str.toLowerCase() : str;
}

function capitalize(str){
    if(str && typeof str == "string") {
        return str.replace('_', ' ').split(' ').map(x => {
            return (x.charAt(0).toUpperCase() + x.substr(1, x.length))
        }).join(' ')
    }

    return str;
}


export { upperCase, lowerCase, capitalize };


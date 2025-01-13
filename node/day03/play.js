const funA = (name,callback) =>{
    console.log('Welcome from funtion A. '+ name);
    callback();
}
const funB = () =>{
    console.log('Welcome from function B');   
}

funA('ram',funB);

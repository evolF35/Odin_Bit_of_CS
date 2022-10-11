

function fibsIterator(n){

    let fiboArray = [];

    if(n === 1){
        fiboArray.push(0);
        return(fiboArray);
    }

    if(n >= 2){
        fiboArray.push(0);
        fiboArray.push(1);
    }

    for(let i = 1; i < (n-1); i++){
        fiboArray.push(fiboArray[i-1]+fiboArray[i]);
    }

    return(fiboArray);

}


console.log(fibsIterator(3));

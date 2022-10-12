


function fibsRec(n){

    if(n == 1){
        return([0]);
    }
    if(n == 2){
        return ([0,1]);
    }
    else{
        return(fibsRec(n-1).concat(
            [fibsRec(n-1)[n-1-1] + fibsRec(n-1)[n-2-1]]
        ));
    }
}

console.log(fibsRec(20));
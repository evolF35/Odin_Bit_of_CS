
function mergeSort(array){

    if(array.length < 2){
        return array;
    }
    else{
        let mid = Math.floor(array.length/2);
        let left = mergeSort(array.slice(0,mid));
        let right = mergeSort(array.slice(mid));
        return(merge(left,right));
    }

}

function merge(arrayA,arrayB){

    let a = 0;
    let b = 0;
    let c = 0;
    let arrayC = [];

    while(a < arrayA.length && b < arrayB.length){

        if(arrayA[a] < arrayB[b]){
            arrayC[c] = arrayA[a];
            c = c + 1;
            a = a + 1;
        }
        else{
            arrayC[c] = arrayB[b];
            c = c + 1;
            b = b + 1;
        }
    }

    for(; a < arrayA.length; a++){
        arrayC[c] = arrayA[a];
        c = c + 1;
    }
    for(; b < arrayB.length; b++){
        arrayC[c] = arrayB[b];
        c = c + 1;
    }

    return(arrayC);
}

console.log(mergeSort([1,23,43,22,4,1,3423,2]));
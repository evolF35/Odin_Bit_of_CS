
function newNode(value,leftPtr = null,rightPtr = null){
    return{
        value,
        leftPtr,
        rightPtr
    }
}

function newTree(array){

    function sortedArrayToBST(array,start,end) {
       
        if(start > end){
            return null;
        }

        let mid = parseInt((start+end)/2);
        let node = newNode(array[mid]);

        node.leftPtr = sortedArrayToBST(array,start, mid -1);
        node.rightPtr = sortedArrayToBST(array,mid + 1, end);

        return (node);
    }

    function preOrder(node)
    {
    if (node == null)
    {
        return;
    }
    console.log((node.value + " "));
    preOrder(node.leftPtr);
    preOrder(node.rightPtr);
    }


    return{
        root: null,

        buildTree(array){
            let setArray = [...new Set(array)];
            let newArray = [...setArray];

            newArray = mergeSort(newArray);

            let n = newArray.length;
            rt = sortedArrayToBST(newArray,0,n-1);

            return(rt);
        },
        preOrder
    }
}


let alps = newTree([4,32,543,67,4,2,1,56,7]);

let g = alps.buildTree([4,32,543,67,4,2,1,56,7]);

console.log(g);

console.log(alps.preOrder(g));



















////////////////////////////////////////////////////////

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

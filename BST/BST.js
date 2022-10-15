
function newNode(value,leftPtr = null,rightPtr = null){
    return{
        value,
        leftPtr,
        rightPtr
    }
}

function  buildTree(array){
    let setArray = [...new Set(array)];
    let newArray = [...setArray];

    newArray = mergeSort(newArray);

    let n = newArray.length;
    rt = sortedArrayToBST(newArray,0,n-1);

    return(rt);
}

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

function newTree(array){


    function preOrder(node){
    if (node == null) {return;}
    console.log((node.value + " "));
    preOrder(node.leftPtr);
    preOrder(node.rightPtr);
    }

    function inOrder(node){
    if (node == null) {return;}
    inOrder(node.leftPtr);
    console.log((node.value + " "));
    inOrder(node.rightPtr);
    }

    function postOrder(node){
    if (node == null) {return;}
    postOrder(node.leftPtr);
    postOrder(node.rightPtr);
    console.log((node.value + " "));
    }

    function find(value,root = this.root){

        if(root == null || root.value == value){
            return root;
        }

        if(root.value > value){
            return(find(value,root.leftPtr));
        }
        return(find(value,root.rightPtr));
    }


    function insert(value,root = this.root){

        if(root == null){
            root = newNode(value);
            return(root);
        }

        if(value < root.value){
            root.leftPtr = insert(value,root.leftPtr);
        }
        else if (value > root.value){
            root.rightPtr = insert(value,root.rightPtr);
        }
        return root;
    }

    function del(value,root = this.root){
        
        if (root == null){
            return root;
        }
   
        if (value < root.value){
            root.leftPtr = del(value,root.leftPtr);
        }
        else if (value > root.value){
            root.rightPtr = del(value,root.rightPtr);
        }
 
        else{
            if(root.leftPtr == null){
                return root.rightPtr;
            }
            else if (root.rightPtr == null){
                return root.leftPtr;
            }
            else{
                root.value = minValue(root.rightPtr);
                root.rightPtr = del(root.value,root.rightPtr);

            }

        }

        return(root);
    }
    

    function minValue(root){
        let minv = root.value;
        let newroot = root;
        while (newroot.leftPtr != null)
        {
            minv = root.leftPtr.value;
            newroot = root.leftPtr;
        }
        return minv;
    }


    function levelOrder(func){
        
        if (root == null){
            return null;
        }

        let queue = [root];
        let res = [];

        while(queue.length > 0){
        
            let cNode = queue.shift();
            res.push(cNode.value);

            if (cNode.rightPtr != null) {
                queue.push(cNode.rightPtr);
              }
            if (cNode.leftPtr != null) {
                queue.push(cNode.leftPtr);
            }

            if(func) func(cNode);
        }

        if(!func) {return res};


    }    

    function height(node){

    }

    function depth(node){

    }

    function isBalanced(tree){

    }

    function rebalance(tree){

    }


    return{
        root: buildTree(array),
        preOrder,
        inOrder,
        postOrder,
        find,
        insert,
        del
    }
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.rightPtr !== null) {
      prettyPrint(node.rightPtr, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
    if (node.leftPtr !== null) {
      prettyPrint(node.leftPtr, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }

let a = [12,1,2,3,5,32,12,44];
let tree = newTree(a);

console.log(tree.root);

prettyPrint(tree.root);

console.log(tree.root);

tree.insert(8);
tree.insert(9);
tree.insert(90);
tree.insert(4);

prettyPrint(tree.root);
console.log(tree.root);

prettyPrint(tree.root);
tree.del(4);

console.log(tree.root);
prettyPrint(tree.root);


tree.del(2);
prettyPrint(tree.root);




console.log(tree.find(3));







































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


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


    function preOrder(func){
    if (this.root == null) {return;}

    let preStack = [];
    let preRes = [];
    let cNode = this.root;

    while(preStack.length > 0){
        cNode = preStack.pop();
        preRes.push(cNode.value);

        if(cNode.rightPtr != null){
            preStack.push(cNode.rightPtr);
        }

        if(cNode.leftPtr != null){
            preStack.push(cNode.leftPtr);
        }

        if(func) func(cNode);
    }

    if(!func) return (preRes);

    }

    function inOrder(func){
        if (this.root == null) {return;}

        let preStack = [];
        let preRes = [];
        let cNode = this.root;
    
        while(preStack.length > 0 || cNode !== null){

            if(cNode != null){
                preStack.push(cNode);
                cNode = cNode.leftPtr;
            }
            else{
                cNode = preStack.pop();
                preRes.push(cNode.value);

                if(func) {
                    func(cNode);
                    cNode = cNode.rightPtr;
                }

            }

        }

        if(!func) return (preRes);
    
    }

    function postOrder(func){
        if (this.root == null) {return;}

        let preStack = [];
        let preRes = [];
        let cNode = this.root;
    
        while(preStack.length > 0){
            cNode = preStack.pop();
    
            if(cNode.leftPtr != null){
                preStack.push(cNode.leftPtr);
            }
    
            if(cNode.rightPtr != null){
                preStack.push(cNode.rightPtr);
            }

            if(func) func(cNode);

            preRes.unshift(cNode.value);

        }
    
        if(!func) return (preRes);
    
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

        if (this.root == null){
            return null;
        }

        let queue = [this.root];
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

    function height(node = this.root){

        if(node == null){
            return 0;
        }

        let leftHeight = height(node.leftPtr);
        let rightHeight = height(node.rightPtr);

        if(leftHeight > rightHeight){
            return (leftHeight + 1);
        }
        else{
            return (rightHeight + 1);
        }

    }

    function depth(node,root = this.root, depth = 0){

        if(node == null){
            return 0;
        }

        if(node == root) 
        {
            return depth;
        }

        if (node.value < root.value) {
            return this.depth(node, root.leftPtr, depth += 1);
          } else {
            return this.depth(node, root.rightPtr, depth += 1);
          }

    }

    function isBalanced(tree = this.root){

        if(tree == null){
            return(false);
        }

        let leftHalf = tree.leftPtr;
        let rightHalf = tree.rightPtr;

        if(Math.abs(height(leftHalf) - height(rightHalf)) > 1){
            return(false);
        }
        else{
            return (true);
        }

    }

    function rebalance(tree){

        if(tree == null){
            return tree;
        }

        else if(tree.isBalanced()){
            return ( tree);
        }

        else{
            let threeNodes = this.preOrder();
            let newTree = new TreeWalker(threeNodes);
            return(newTree);
        }

    }


    return{
        root: buildTree(array),
        preOrder,
        inOrder,
        postOrder,
        find,
        insert,
        del,
        rebalance,
        isBalanced,
        height,
        depth,
        levelOrder
    }
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.rightPtr !== null) {
      prettyPrint(node.rightPtr, `${prefix}${isLeft ? '???   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '????????? ' : '????????? '}${node.value}`);
    if (node.leftPtr !== null) {
      prettyPrint(node.leftPtr, `${prefix}${isLeft ? '    ' : '???   '}`, true);
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




// /// inspiration code down below. 
// 

// https://github.com/lnicepei/binary-search-tree/blob/main/binary-search-tree.js
// https://github.com/TYLPHE/binary-search-trees/blob/main/src/bst.js
// https://github.com/JoshDevHub/JavaScript-Binary-Search-Tree/blob/main/binary-tree.js
// https://github.com/HardRoof/binary-search-tree/blob/main/binary-tree.js
// https://github.com/TYLPHE/binary-search-trees/blob/main/src/bst.js
// https://github.com/Appletri/binary-search-trees
// https://github.com/NabilHadi/binary-search-tree-javascript/blob/main/index.js
// https://github.com/Daze-bot/binary-search-trees/blob/main/Tree.js
// https://github.com/Apestein/Binary-Search-Tree/blob/main/bst.js
// https://github.com/evan1mclean/binary-search-tree/blob/main/BST.js



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


function newNode(value,pointer = null){
    return{
        value,
        pointer
    }
}

function LinkedList() {

    return{
        start: null,

    append(value){

        let node = newNode(value);

        if(this.start === null){
            this.start = node;
        }
        else{
            let end = this.start;
            while(end.pointer !== null){
                end = end.pointer;
            }
            end.pointer = node;
        }
    },

    prepend(value){

        let node = newNode(value,this.start);

        this.start = node;
    },

    size(){

        let count = 0;
        let current = this.start;
        while(current !== null){
            count = count + 1;
            current = current.pointer;
        }
        return(count);
    },

    head(){

        return(this.start);

    },

    tail(){

        let current = this.start;
        while(current.pointer !== null){
            current = current.pointer;
        }
        return(current);

    },

    at(index){

        let current = this.start;
        let i = 0;

        while( i < index){
            if(current.pointer !== null){
                current = current.pointer;
            }
            i = i + 1;
        }
        return(current);
    },

    pop(){

        let current = this.start;

        while(current.pointer.pointer !== null){
            current = current.pointer;
        }

        current.pointer = null;

    },

    contains(value){

        let current = this.start;

        while(current.pointer !== null){
            if(current.value === value){
                return(true);
            }
            current = current.pointer;
        }
        if(current.value === value){
            return(true);
        }

        return(false);
    },

    find(value){

        let current = this.start;

        let i = 0;

        while(current.pointer !== null){
            if(current.value === value){
                return(i);
        }
        i = i + 1;
        current = current.pointer;
    }
    if(current.value === value){
        return(i);
    }

    return(0);
},

    toString(){

        let string = ``;

        let current = this.start;

        while(current.pointer !== null){
            string += `${current.value} -> `;
            current = current.pointer;
        }
        string += `${current.value}`;


        return(string);
    }
}

}

let li = LinkedList();

li.prepend(2);
li.prepend(34);
li.prepend(44);
li.prepend(4);
li.prepend(24);
li.append(90);




console.log(li.head());

console.log(li.size());

console.log(li.head());
console.log(li.tail());

console.log("goo");

console.log(li.at(2));

console.log(li.size());
console.log(li.tail());

li.pop();
console.log(li.size());
console.log(li.tail());


console.log(li.contains(2));


console.log(li.find(2));


console.log(li.toString());
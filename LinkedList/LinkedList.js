
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

        this.start.pointer = node;
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
        while(current !== null){
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
    return(0);
},

    toString(){

        let string = ``;

        let current = this.start;

        while(current.pointer !== null){
            string += `${current.value}`;
            current = current.pointer;
        }

        return(string);
    }

}

}

let li = LinkedList();
li.append(9);
li.append(10);
li.append(12);
li.prepend(2);

console.log(li.head());
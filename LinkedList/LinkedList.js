

function newNode(value,pointer){
    return{
        value:value,
        pointer:pointer
    }
}

function LinkedList() {

    function append(value){

        let newNode = newNode(value);

        if(this.start === null){
            this.start = newNode;
        }
        else{
            let end = this.start;
            while(end.pointer !== null){
                end = end.pointer;
            }
            end.pointer = newNode;
        }
    }

    function prepend(value){

        let newNode = newNode(value,this.start);

        this.start.pointer = newNode;

    }

    function size(){

        let count = 0;
        let current = this.start;
        while(current !== null){
            count = count + 1;
            current = current.pointer;
        }
        return(count);

    }

    function head(){

        return(this.start);

    }

    function tail(){

        let current = this.start;
        while(current !== null){
            current = current.pointer;
        }
        return(current);

    }

    function at(index){

        let current = this.start;
        let i = 0;

        while( i < index){
            if(current.pointer !== null){
                current = current.pointer;
            }
            i = i + 1;
        }
        return(current);
    }

    function pop(){

        let current = this.start;

        while(current.pointer.pointer !== null){
            current = current.pointer;
        }

        current.pointer = null;

    }

    function contains(value){

        let current = this.start;

        while(current.pointer !== null){
            if(current.value === value){
                return(true);
            }
            current = current.pointer;
        }
        return(false);
    }

    function find(value){

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
}

    function toString(){

        let string = ``;

        let current = this.start;

        while(current.pointer !== null){
            string += `${current.value}`;
            current = current.next;
        }

        return(string);
    }



    return{
        start: null,
        append,
        prepend,
        size,
        head,
        tail,
        at,
        pop,
        contains,
        find,
        toString
    }
}

let li = LinkedList();
class Stack{
    constructor(){
       this.stack = []; 
    }

    push(val){
        this.stack.push(val);
    }
    pop(){
        if(this.isEmplty()) return null;
        return this.stack.pop();
    }

    isEmplty(){
        return this.stack.length === 0
    }
    peek(){
        if(this.isEmplty()) return null;
        return this.stack[this.stack.length - 1];
    }
}

const stack = new Stack();
console.log(stack);
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());   
console.log(stack.pop());   
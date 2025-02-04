import {Node} from './Node.js';

export class LinkedList {
    constructor(value) {
        this.head = value ? new Node(value):null;
        this.tail = this.head;
    }

    append(value){
        const node = new Node(value);
        if(!this.head)
            this.head = node
        if(!this.tail)
            this.tail = node
        this.tail.next = node;
        this.tail = node;
    }

    prepend(value){
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
    }

    size(){
        let current = this.head;
        let count = 0;
        while(current){
            count++;
            current = current.next;
        }
        return count;
    }

    head(){
        return this.head;
    }

    tail(){
        return this.head;
    }

    at(index){
        let current = this.head;
        let count = 0;
        while(current){
            if(count++ == index)
                return current;
            current = current.next;
        }
        return count;
    }

    pop(){
        let current = this.head;
        while(current){
            if(current.next == this.tail){
                this.tail = current;
                return;
            }
            current = current.next;
        }
        return count;
    }

    contains(value){
        let current = this.head;
        while(current){
            if(current.value == value)
                return true;
            current = current.next;
        }
        return false;
    }

    find(value){
        let current = this.head;
        let count = 0;
        while(current){
            if(current.value == value)
                return count++;
            current = current.next;
        }
        return count;
    }

    toString() {
        let current = this.head;
        let output = '';
        while (current) {
            output += `( ${current.value} ) --> `;
            current = current.next;
        }
        output += 'null';
        return output.trim();
    }

    insertAt(value, index){
        let current = this.head;
        let count = 0;

        if(index == 0){
            const node = new Node(value);
            node.next = this.head;
            this.head = node;
            return;
        }


        let prev = null
        while(current){
            if(count++ == index){
                const node = new Node(value);
                node.next = current;
                prev.next = node;
                return;
            }
            prev = current;
            current = current.next;
        }
        return count;
    }

    removeAt(index){
        let current = this.head;
        let count = 0;
        let prev = null;
        if(index == 0){
            this.head = this.head.next;
            return;
        }
        while(current){
            if(count++ == index){
                prev.next = current.next;
                return;
            }
            prev = current;
            current = current.next;
        }
        return count;
    }
}
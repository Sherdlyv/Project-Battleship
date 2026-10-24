
export class ship {
    constructor(length) {
        this.length = length;
        this.time= 0;
       
    }

    hit(){
            return this.time++;
        
    }

    isSunk (){
        if (this.length === this.time) {
            return true;

        }
        return false;
    }
}


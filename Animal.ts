class Animal{
    name: string;
    constructor(name){
        this.name = name;
    }
    protected run(){
        return `${this.name} is running`
    }
}

const snake = new Animal('zxy');


class Dog extends Animal{
    bark(){
        return `${this.name} is bark`;
    }

    run(){
        return 'Dog, ' + super.run();
    }
}

const hangou = new Dog('hangou');
hangou.bark()
hangou.run();
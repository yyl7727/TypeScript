interface IRadio{
    switchRadio(trigger: boolean): void;
}

interface IBattery{
    checkBatteryStatus(): void
}

class Car implements IRadio{
    switchRadio(trigger: boolean){

    }
}

class Phone implements IRadio,IBattery{
    checkBatteryStatus(): void {
        
    }
    switchRadio(trigger: boolean){

    }
    
}
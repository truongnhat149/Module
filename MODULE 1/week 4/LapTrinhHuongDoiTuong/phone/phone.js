class Phone {
    constructor() {
        this.draff = [];
        this.sent = [];
        this.recive = [];
    }
        useBattery(battery) {
            this.battery = battery;
        }
        getStatus() {
            return this.battery.enery > 0;
        }
        composeMessage(content) {
            this.draff.push(content);
        }

        sendMessage(message, recivePhone) {
            this.sent.push(message);
            recivePhone.recive.push(message);
            this.battery.incrementEnery();
        }
        showEnery() {
            return this.battery.getEnery();
        }
}


class Battery {
    constructor(enery) {
        this.enery = this.enery;
    }

    incrementEnery() {
        if (this.enery - 1 == 0) {
            this.enery = 0;
        } 
        else {
            this.enery -= 1;
        }
    }

    getEnery() {
        return this.enery;
    }

    charge(value) {
        if (this.enery + value > 100) {
            this.enery = 100;
        } else {
            this.enery += value;
        }
    }
}

let pin1 = new Battery(5);
let android = new Phone();
android.useBattery(pin1);

let pin2 = new Battery(5);
let iphone = new Phone();
iphone.useBattery(pin2);

console.log(android.showEnery(), iphone.showEnery());
android.composeMessage('alo?');
android.sendMessage('alo?', iphone);

console.log(android.draff, android.sent, android.recive);
console.log(iphone.draff, iphone.sent, iphone.recive);

iphone.composeMessage('what?');
iphone.sendMessage('what?', android);
console.log(android.draff, android.sent, android.recive);
console.log(iphone.draff, iphone.sent, iphone.recive);
console.log(android.showEnery(), iphone.showEnery());

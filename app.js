'use strict';


let donatorInfo = ['Donator name', 'Donation amount', 'age'];

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Donate.all = [];

function Donate(name, amount) {


    this.name = name;
    this.amount = amount;
    this.age = random(20, 60);

    Donate.all.push(this);
}


// Donate.prototype.getRandomAge=function () {

//    return this.age.push(random(20,60))
// }

let Ahmad = new Donate('Ahmad', '100 Dinar');
let Mohammad = new Donate('Mohammad', '300 Dinar');
let ALi = new Donate('Ali', '500 Dinar');


let parent = document.getElementById('parent');

let table = document.createElement('table');
parent.appendChild(table);



function MakeHeader() {

    let headerRow = document.createElement('tr');
    table.appendChild(headerRow);

    for (let i = 0; i < donatorInfo.length; i++) {

        let thElement = document.createElement('th');
        headerRow.appendChild(thElement);
        thElement.textContent = donatorInfo[i];
    }

}
MakeHeader();



Donate.prototype.renderInfo = function () {

    let trElement = document.createElement('tr');

    table.appendChild(trElement);


    let tdElement = document.createElement('td');

    trElement.appendChild(tdElement);

    for (let i = 0; i < donatorInfo.length; i++) {

        tdElement.textContent = Donate.all[i];

    }

}

let form = document.getElementById('form');

form.addEventListener('submit', Submitter)


function Submitter(event) {

    event.preventDefault();

    let name = (event.target.name.value);
    let amount = Number(event.target.amount.value);
    let addedInfo = new Donate(name, amount);
    updateInfo();

    addedInfo.renderInfo();

}



function updateInfo() {


    let stringArr = JSON.stringify(Donate.all);

    localStorage.setItem('Info', stringArr);

    
}


function getInfo() {

    let Info = localStorage.getItem('Info');

    let parsingArr = JSON.parse(Info);

    if (parsingArr != null) {

        for (let i = 0; i < parsingArr.length; i++) {

            new Donate(parsingArr[i].name, parsingArr[i].amount, parsingArr[i].age);
        }

    }
}

function clearInfo() {
    
    localStorage.clear();

}
getInfo();
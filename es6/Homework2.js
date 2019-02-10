import 'babel-polyfill'

// import {watchObj, EmailParser} from './lesson2/hw';
import {EmailParser , watchObj} from './lesson2/lesson2.hw';


let parser = new EmailParser('info@ntschool.ru');
console.log(parser.name);
console.log(parser.domain);
console.log(parser.isCorrect);

parser.email = 'some@nz';
console.log(parser.name);
console.log(parser.domain);
console.log(parser.isCorrect);


let div = document.createElement('div');
document.body.appendChild(div);

let cleverDiv = watchObj(div, function(prop, val) {
    // console.log(prop, val);
});
cleverDiv.innerHTML = '<strong>HTML</strong><em>Changed</em>';
console.log(cleverDiv)
cleverDiv.style.color = 'red';


// cleverDiv.querySelector('em').style.color = 'green';
console.log(cleverDiv.querySelector('em'))
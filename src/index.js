import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
console.log("%c Обнаружил ошибку? \n Мне важно знать – телега @grhgrmgrhrm",
"background-color: #0053b3; color: #fff; ");
console.log("%c А может у тебя есть интересный проект и ты мне хочешь что-то предложить?", "background-color: #007b23; color: #fff; ");
console.log("%c А если найду?", "background-color: #f00; color: #fff; ");

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

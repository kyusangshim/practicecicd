import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './Nav';
import InputCom from './component/InputCom';
import Product from './component/Product';
import App from './App';
import FontColor from './component/FontColor';
import InputList from './page/InputList';
import Reacthook from './page/Reacthook';
// import InputType from './component/InputType';
import CommentList from './page/CommentList';
import ReactArray from './page/ReactArray';
import BingoGame from './page/BingoGame';
import LoginToolbarApp from './component/LoginToolbarApp';
import Loginmode from './page/Loginmode'
import TimeTrans from './page/TimeTrans'
import Dday from './page/Dday'
import AppPag from './page/AppPag'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Dday />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

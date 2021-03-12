/* Annova Software

File:index.js

Contents: gerekli kütüphane importları yapıldı

History: 12.03.2021 FatihK
*/ 
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/root/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux"//oluşturduğumuz reduxları uygulamamızda kullanabilmek için App dosyamızı Provider içine almamız gerekiyor
import configureStore from './redux/reducers/configureStore';
const store=configureStore();//redux ın oluşturulan reducerları tanıyabilmesi için configurestore fonksiyonu çağrıldı ve providerın store'a bu oluşturulan reducerlar eşitlendi 
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     <App /> 
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

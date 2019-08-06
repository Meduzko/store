import './scss/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import App from 'index';


// const renderApplication = () => {
//   ReactDOM.render(
//     <Home /> ,
//     document.querySelector('#root')
//   );
// }
//
// renderApplication(Home);
//
// if (module.hot) {
//   module.hot.accept("./components/Home", () => {
//     renderApplication();
//   });
// }

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
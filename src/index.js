import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/app/';

// const All = () => {
// 	return (
// 		<>

// 		</>
// 	)
// }

ReactDOM.render(
	<React.StrictMode>
	<App/>
	</React.StrictMode>,
	document.getElementById('root')
);
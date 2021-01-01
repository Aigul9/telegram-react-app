import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/';

// // jsx-элементы д.б. обернуты в div и в скобках, если многострочные
// const Header = () => {
// 	const scr = "<script>alert('Error!')</script>" // автомзамена скриптов на текст
// 	return <h2>{scr}</h2>
// 	// return <>Hello, React2</>
// }

// const Field = () => {
// 	const holder = "Enter here";
// 	const styledField = {
// 		width: "600px"
// 	};

// 	return <input
// 				style={styledField}
// 				type="text"
// 				placeholder={holder}
// 				autoComplete=""
// 				className="first"
// 				htmlFor=""/> // вместо label for
// }

// const Button = () => {
// 	const text = "Log in";
// 	const logged = false;
// 	const res = () => {
// 		return "Log in, please"
// 	};
// 	const p = <p>Log in</p>
// 	return (
// 		<div>
// 			<button>{logged ? null : text}</button>
// 			<button>{res()}</button>
// 			<button>{p}</button>
// 		</div>
// 	)
// }

// const App = () => {
// 	return (
// 		<div>
// 			<Header/>
// 			<Field/>
// 			<Button/>
// 		</div>
// 	)
// }

ReactDOM.render(
	<React.StrictMode>
	<App/>
	</React.StrictMode>,
	document.getElementById('root')
);
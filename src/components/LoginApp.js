import React from 'react';
import '../sass/_loginapp.scss';
import Navegation from './Navegation';

class LoginApp extends React.Component {
	render() {
		return (
			<div className="loginapp">
				<Navegation history={this.props.history}/>
				<h1 className="title">Hello World!!!!</h1>
			</div>
		)
	}
}

export default LoginApp;
import React from 'react';
import Navegation from './Navegation';
import '../sass/_login.scss';
import '../sass/_buttons.scss';


class Login extends React.Component {
	state = { loginClass: '' };

	render() {
		return (
			<div>
				<Navegation history={this.props.history} />
				<div className={`login ${this.state.loginClass}`}>
					<div className="login_box login_box-front">
						<div className="login_box-header">
							<h1 className="login_box-header--title">Login</h1>
							<button onClick={() => this.setState({ loginClass: 'active' })} className="btn2">Register</button>
						</div>
						<form className="login_box-form">
							<span>Email:</span>
							<input type="email" autoComplete="email" required placeholder="email@email.com"/>
							<span>Password:</span>
							<input type="password" autoComplete="current-password" required placeholder="Password123"/>
							<button className="btn">Login</button>
						</form>
					</div>
					<div className="login_box login_box-back">
						<div className="login_box-header">
							<button onClick={() => this.setState({ loginClass: '' })} className="btn2">Sign In</button>
							<h1 className="login_box-title">Register</h1>
						</div>
						<form className="login_box-form">
							<span>Name:</span>
							<input type="text" required placeholder="Name"/>
							<span>Email:</span>
							<input type="email" autoComplete="email" required placeholder="email@email.com"/>
							<span>Password:</span>
							<input type="password" autoComplete="current-password" required placeholder="Password123"/>
							<span>Re-Password:</span>
							<input type="password" autoComplete="current-password" required placeholder="Password123"/>
							<button className="btn">Register</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default Login;
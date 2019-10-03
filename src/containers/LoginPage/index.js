/* eslint-disable no-console */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Button from '../../conponents/Button/Loadable'

import LoginPageStyled from './styledComponent'

import * as LoginActions from './actions'

class LoginPage extends Component {
	gotoHome = () => {
		this.props.history.push("/home")
	}
	render() {
		return (
			<LoginPageStyled>
				Login Page
				<Button text="Goto Home" onClick={this.gotoHome}/>
				<Button text="Error Ja" onClick={() => this.MakeSomeError()}/>
			</LoginPageStyled>
		)
	}
}

const mapStateToProps = state => {
	return {
		loginPage: state.loginPage
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators(Object.assign({},	LoginActions), dispatch)
}

LoginPage.propTypes = {
	history: PropTypes.object.isRequired,
	location: PropTypes.object.isRequired,
	match: PropTypes.object.isRequired,
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginPage)

define(
[
    'react'
    , 'registeruser'
]
, function( React, RegisterUser ) {

    var RegisterBox = React.createClass({
	addUser: function( e ) {
		e.preventDefault();
		RegisterUser.addUser( this.state.email, this.getPW( 'inputPassword' ) );
	}
	, setEmail: function( e ) {
		this.setState({email: e.target.value});
	}
	, getPW: function( $pw ) {
		return document.getElementById( $pw ).value;
	}
	, getEmailForm: function() {
		return (
<div className="form-group">
	<label for="inputEmail" className="col-lg-2 control-label">Email</label>
	<div className="col-lg-10">
		<input
			type="text"
			className="form-control js-email js-input"
			id="inputEmail"
			placeholder="Email"
			onBlur={this.setEmail}
		/>
	</div>
</div>
		);
	}
	, getPWForm: function() {
		return (
<div className="form-group">
	<label for="inputPassword" className="col-lg-2 control-label">Password</label>
	<div className="col-lg-10">
		<input
			type="password"
			className="form-control js-password js-input"
			id="inputPassword"
			placeholder="Password"
		/>
	</div>
</div>
		);
	}
	, getSubmitForm: function() {
		return (

<div className="form-group">
	<div className="col-lg-10 col-lg-offset-2">
		<button className="btn btn-default">Cancel</button>
		<button type="submit" className="btn btn-primary js-submit js-input" onClick={this.addUser}>Submit</button>
	</div>
</div>
		);
	}
        , render: function() {
            return (
<div className="registerBox container">
	<div className="col-lg-6 override--center">
		<div className="well bs-component">
			<form className="form-horizontal js-register">
				<fieldset>
				<legend>Register</legend>
				{ this.getEmailForm() }
				{ this.getPWForm() }
				{ this.getSubmitForm() }
				</fieldset>
			</form>
		</div>
	</div>
</div>
            ); // return JSX for RegisterBox

        } // render RegisterBox

    }); // declare RegisterBox

    return RegisterBox;
}); // define Register module

import React, { Component, Fragment } from 'react';
import firebase from '../../firebase';
import "./Auth.css"
import { toast } from "react-toastify"
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
class PasswordReset extends Component {
    state = {
        email: "",
    };
     handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = async e => {
        let{email}=this.state
        try {
            e.preventDefault();
            await firebase.auth().sendPasswordResetEmail(email);
            toast.success(`Reset password has been sent to ${email} please reset password`);
            this.props.history.push('/signin')
        } catch (err) {
            toast.error(err.message);
            this.props.history.push('/PasswordReset');
        }
    }
        render() {
            let { email} = this.state;
            return (
                <Fragment>
                    <section id="authSection" className="col-md-4 mx-auto my-2 card">
                        <article className="card-body">
                            <h4>Password Reset</h4>
                            <small>Enter your Spotify username, or the email address that you used to register. We'll send you an email with your username and a link to reset your password.</small>
                            <form onSubmit={this.handleSubmit}>
                                {/*---------Email start here-----*/}
                                <div className="form-group">
                                    <label>Email address or username</label>
                                    <input type="email" className="form-control" placeholder="Enter your Email." name="email" value={email} onChange={this.handleChange} />
                                </div>
                                {/*---------Email End here-----*/}
                                <div className="form-group">
                                    <button className="btn btn-success btn-block">Reset Password</button>
                                </div>
                                <p>If you still need help, contact <a href="">Spotify Support</a>.</p>
                            </form>
                        </article>
                    </section>
                </Fragment>
            );
        }
}
 
export default withRouter(PasswordReset);
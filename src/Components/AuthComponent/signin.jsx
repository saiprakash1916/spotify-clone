import React, { Component, Fragment } from 'react';
import firebase from '../../firebase';
import "./Auth.css"
import { toast } from "react-toastify"
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
class SignIn extends Component {
    state = {
        email: "",
        password: "",
    };
     handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = async e => {
        let { email, password } = this.state
        let { history, match, location } = this.props;
        e.preventDefault();
        try {
            var userData = await firebase.auth().signInWithEmailAndPassword(email, password);
            if (userData.user.emailVerified === true) {
                toast.success(`successfully ${email} is loggedIn`);
                history.push("/");
            } else {
                toast.error(`${email} is not yet verified please verify it and login`);
                //Redirect to login
                history.push("/SignIn");
            }
        } catch (err) {
            toast.error(err.message);
        } 
    };
        render() {
            let { email, password } = this.state;
            return (
                <Fragment>
                    <section id="authSection" className="col-md-4 mx-auto my-2 card">
                        <article className="card-body">
                            <h4>Sign up with your email address</h4>
                            <p style={{padding:"10px",width:"100%",border:"1px solid #111",borderRadius:"20px",textAlign:"center",margin:"10px auto"}}><Link to="/PhoneAuth" style={{textDecoration:"none",color:"#555"}}>Continue with phone number</Link></p>
                            <form onSubmit={this.handleSubmit}>
                                {/*---------Email start here-----*/}
                                <div className="form-group">
                                    <label>Email address or username</label>
                                    <input type="email" className="form-control" placeholder="Enter your Email." name="email" value={email} onChange={this.handleChange} />
                                </div>
                                {/*---------Email End here-----*/}
                                {/*---------password start here-----*/}
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Enter your password." name="password" value={password} onChange={this.handleChange} />
                                </div>
                                {/*---------password end here-----*/}
                                <small><Link to="/PasswordReset">Forget your password?</Link></small>
                                {/*---------Check box start here-----*/}
                                <div className="form-group">
                                    <input type="checkbox" name="checkdata" checked /> Remember me
                                </div>
                                {/*---------Check box end here-----*/}
                                <div className="form-group">
                                    <button className="btn btn-success btn-block">SIGN up</button>
                                </div>
                                <p className="account">Don't have an account?</p>
                                <div className="form-group">
                                    <button><Link to="/signup" style={{textDecoration:"none",color:"white"}}>SIGN UP FOR SPOTIFY</Link></button>
                                </div>
                            </form>
                        </article>
                    </section>
                </Fragment>
            );
        }
}
 
export default withRouter(SignIn) 
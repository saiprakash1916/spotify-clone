import React, { Component, Fragment } from 'react';
import firebase from '../../firebase';
import "./Auth.css"
class SignIn extends Component {
    state = {
        email: "",
        password: "",
    };
     handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = e => {
        e.preventDefault();
        let { email, password } = this.state;
        console.log({ email, password });
        firebase.auth().createUserWithEmailAndPassword(email,password).then(data =>{console.log(data)}).catch(err=>console.log(err))
    };
        render() {
            let { email, password } = this.state
            return (
                <Fragment>
                    <section id="authSection" className="col-md-4 mx-auto my-2 card">
                        <article className="card-body">
                            <h4>Sign up with your email address</h4>
                            <form onSubmit={this.handleSubmit}>
                                {/*---------Email start here-----*/}
                                <div className="form-group">
                                    <lable>Email address or username</lable>
                                    <input type="email" className="form-control" placeholder="Enter your Email." name="email" value={email} onChange={this.handleChange} />
                                </div>
                                {/*---------Email End here-----*/}
                                {/*---------password start here-----*/}
                                <div className="form-group">
                                    <lable>Password</lable>
                                    <input type="password" className="form-control" placeholder="Enter your password." name="password" value={password} onChange={this.handleChange} />
                                </div>
                                {/*---------password end here-----*/}
                                <small><a href="/">Forget your password?</a></small>
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
                                    <button className="btn btn-success btn-block">SIGN UP FOR SPOTIFY</button>
                                </div>
                            </form>
                        </article>
                    </section>
                </Fragment>
            );
        }
}
 
export default SignIn
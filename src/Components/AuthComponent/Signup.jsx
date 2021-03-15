import React, { Component, Fragment } from 'react';
import firebase from '../../firebase';
import "./Auth.css"
class Signup extends Component {
    state = {
        email: "",
        confirmEmail: "",
        password: "",
        profile: "",
        dob: "",
        gender: "",
    };
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = e => {
        e.preventDefault();
        let { email, confirmEmail, password, profile, dob } = this.state;
        console.log({ email, confirmEmail, password, profile, dob });
        firebase.auth().createUserWithEmailAndPassword(email,password).then(data =>{console.log(data)}).catch(err=>console.log(err))
    };
    render() {
        let{email,confirmEmail,password,profile,dob,gender}=this.state
        return (
             <Fragment>
            <section id="authSection" className="col-md-4 mx-auto my-2 card">
                    <article className="card-body">
                        <h4>Sign up with your email address</h4>
                        <form onSubmit={this.handleSubmit}>
                        {/*---------Email start here-----*/}    
                            <div className="form-group">
                                <lable>What's your email?</lable>
                                <input type="email" className="form-control" placeholder="Enter your Email." name="email" value={email} onChange={this.handleChange}/>
                            </div>
                            {/*---------Email End here-----*/}
                            {/*---------Confirm Email start here-----*/} 
                            <div className="form-group">
                                <lable>Confirm your email</lable>
                                <input type="email" className="form-control" placeholder="Enter your Email again."name="confirmEmail" value={confirmEmail} onChange={this.handleChange}/>
                            </div>
                            {/*---------Confirm Email End here-----*/}
                            {/*---------password start here-----*/} 
                            <div className="form-group">
                                <lable>Create a password</lable>
                                <input type="password" className="form-control" placeholder="create a password."name="password" value={password} onChange={this.handleChange}/>
                            </div>
                            {/*---------password end here-----*/}
                            {/*---------profile start here-----*/} 
                            <div className="form-group">
                                <lable>What should we call you?</lable>
                                <input type="text" className="form-control" placeholder="Enter a profile name."name="profile" value={profile} onChange={this.handleChange}/>
                            </div>
                            {/*---------profile end here-----*/}
                            {/*---------DOB Start here-----*/} 
                            <small>This appears on your profile.</small>
                            <div className="form-group">
                                <label>What's your date of birth?</label>
                                <input type="datetime-local" className="form-control" placeholder="Month" name="dob" value={dob} onChange={this.handleChange}/>
                            </div>
                            {/*---------DOB end here-----*/}
                            {/*---------Gender start here-----*/}
                            <div className="form-group">
                                <label>What's your gender?</label>
                                <input type="radio" name="gender"  value={gender} onChange={this.handleChange}/> Male
                                <input type="radio" name="gender"  value={gender} onChange={this.handleChange}/> Female
                                <input type="radio" name="gender"  value={gender} onChange={this.handleChange}/> Non-binary
                            </div>
                            {/*---------Gender end here-----*/}
                            {/*---------Check box start here-----*/}
                            <div className="form-group">
                                <input type="checkbox" name="checkdata" /> Share my registration data with Spotify's content providers for marketing purposes.
                            </div>
                            {/*---------Check box end here-----*/}
                            <small>By clicking on Sign up, you agree to Spotify's <a href="/">Terms and Conditions of Use</a>.</small><br/><br/>
                            <small>To learn more about how Spotify collects, uses, shares and protects your personal data please read Spotify's <a href="/">Privacy Policy</a>.</small>
                            <div className="form-group">
                                <button className="btn btn-success btn-block">SIGN up</button>
                            </div>
                            <p className="account">Have an account? <a href="/">Log in</a>.</p>
                    </form>
                </article>
            </section>
        </Fragment>
        );
    }
}
 
export default Signup;
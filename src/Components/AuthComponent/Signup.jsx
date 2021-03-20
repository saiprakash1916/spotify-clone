import React, { Component, Fragment } from 'react';
import firebase from '../../firebase';
import "./Auth.css"
import { toast } from 'react-toastify';
import md5 from 'md5';
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
    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let { email, confirmEmail, password, profile, dob } = this.state;
            console.log({ email, confirmEmail, password, profile, dob });
            //auth
            let userdata = await firebase.auth().createUserWithEmailAndPassword(email, password);
            userdata.user.sendEmailVerification();
            let message = `verification mail has sent to ${email} please confirm it and Singin...`;
            toast.success(message);
            await userdata.user.updateProfile({
                displayName: profile,
                photoURL: `https://www.gravatar.com/avatar/${md5(email)}?d=identicon`,
            });
            //Store information into firebase realtime databade
            await firebase.database().ref().child("users/" + userdata.user.uid).set({
                username:userdata.user.displayName,
                email: userdata.user.email,
                photoURL: userdata.user.photoURL,
                registrationDate:new Date().toLocaleDateString(),
            })
        } catch (err) {
            console.log(err);
            toast.error(err.message)
        }   
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
                                <label>What's your email?</label>
                                <input type="email" className="form-control" placeholder="Enter your Email." name="email" value={email} onChange={this.handleChange}/>
                            </div>
                            {/*---------Email End here-----*/}
                            {/*---------Confirm Email start here-----*/} 
                            <div className="form-group">
                                <label>Confirm your email</label>
                                <input type="email" className="form-control" placeholder="Enter your Email again."name="confirmEmail" value={confirmEmail} onChange={this.handleChange}/>
                            </div>
                            {/*---------Confirm Email End here-----*/}
                            {/*---------password start here-----*/} 
                            <div className="form-group">
                                <label>Create a password</label>
                                <input type="password" className="form-control" placeholder="create a password."name="password" value={password} onChange={this.handleChange}/>
                            </div>
                            {/*---------password end here-----*/}
                            {/*---------profile start here-----*/} 
                            <div className="form-group">
                                <label>What should we call you?</label>
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
                            <div className="form-group" name="gender" value={gender}>
                                <label>What's your gender?</label>
                                <input type="radio" name="gender" value="Male" onChange={this.handleChange}/> Male
                                <input type="radio" name="gender" value="Female" onChange={this.handleChange}/> Female
                                <input type="radio" name="gender" value="Non-binary" onChange={this.handleChange}/> Non-binary
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
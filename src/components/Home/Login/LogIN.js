import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { userContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';
import signInImage from '../../../Images/preview.png';
import googleBtn from '../../../Images/GButton.jpg';
import './Login.css';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

const LogIN = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/book" } };

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                console.log(result)
                console.log(result.user)
                const signedInUser = { name: result.user.displayName, email: result.user.email }
                // console.log(signedInUser)
                setLoggedInUser(signedInUser)
                sessionStorage.setItem('email', signedInUser.email)
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;

                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }

    return (
        // <div className="container text-center">
        //         <h2>Sign In With</h2>
        //         <div className="row" onClick={handleGoogleSignIn} style={{ border: "1px solid gray", borderRadius: "50px" }}>
        //             <span>Continue With Google</span>
        //         </div>            
        // </div>
        <div className="container" style={{backgroundImage: `URL(${signInImage})`, height:'100vh', backgroundRepeat: 'no-repeat'}}>
            <div className="signInBtnDiv" style={{height: '100px'}}>
                <img style={{height: '100px', cursor:'pointer'}} onClick={handleGoogleSignIn} src={googleBtn} alt=""/>                
            </div>
        </div>
    );
};

export default LogIN;
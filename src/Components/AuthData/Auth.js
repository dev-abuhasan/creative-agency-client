import React, { createContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";

import { } from 'react-router-dom';
import firebaseConfig from './firebase.config';


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

let Context = null;
const { Provider, Consumer } = Context = createContext();

const UserAuthProvider = (props) => {
    //Declare State
    const [user, setUser] = useState(null);
    const [succeed, setSucceed] = useState(false);
    const [error, setError] = useState('');

    //  register user with email and password
    const registerEmailAndPassword = (email, password, name) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
                const isPossibleNewUser = true;
                setSucceed(isPossibleNewUser);
                verifyEmail();
                updateUserProfile(name);
                return res;
            })
            .catch(error => {
                const errorMessageDuplicate = error.message;
                setSucceed(errorMessageDuplicate);
            });
    }

    // sign in user of google
    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(googleProvider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const signedIUser = {
                    isSigned: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(signedIUser);
                authStateChange();
                // storeAuthJwtToken();
                return result;
            }).catch(error => {
                const errorMessage = error.message;
                const email = error.email;
                console.log(errorMessage, email);
            });
    }

    // facebook registration user 
    const facebookRegistration = () => {
        const facebookProvider = new firebase.auth.FacebookAuthProvider();
        return firebase.auth().signInWithPopup(facebookProvider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const signedIUser = {
                    isSigned: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(signedIUser);
                storeAuthJwtToken()
            }).catch(error => {
                const errorMessage = error.message;
                const email = error.email;
                console.log(errorMessage, email);
            });
    }

    //update user profile
    const updateUserProfile = name => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name
        }).then(() => {
            console.log('user name updated successfully');
        }).catch(error => {
            console.log(error);
        });
    }

    //verifyEmail
    const verifyEmail = () => {
        const user = firebase.auth().currentUser;
        user.sendEmailVerification().then(() => {
            // Email sent.
        }).catch(error => {
            console.log(error);
        });
    }

    //reset password
    const resetPassword = email => {
        var auth = firebase.auth();
        auth.sendPasswordResetEmail(email).then(() => {

        }).catch(error => {
            console.log(error);
        });
    }

    //login in user email & pass
    const loginInUserEmailAndPass = (email, password) => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                const name = result.user.displayName;
                setUser(name);
                storeAuthJwtToken()
                return result;
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    //auth state changed
    const authStateChange = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                sessionStorage.setItem("user", user.email);
                sessionStorage.setItem("name", user.displayName);
                sessionStorage.setItem("photo", user.photoURL);
            } else {
               console.log("Logout success");
              
            }
        });
    }
    //verify with JWT Token
    const storeAuthJwtToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(idToken => {
                console.log(idToken);
                sessionStorage.setItem('token', idToken);
            }).catch(error => {
                console.log(error);
            });
    }

    // logout user
    const logOut = () => {
        firebase.auth().signOut()
            .then(() => {
                setUser(null);
            }).catch(error => {
                console.log(error);
            })
    }
    return (
        <Provider value={
            {
                user,
                succeed,
                error,
                loginInUserEmailAndPass,
                resetPassword,
                registerEmailAndPassword,
                handleGoogleSignIn,
                facebookRegistration,
                logOut,
                setUser,
            }
        }>
            {props.children}
        </Provider>
    )

}


export { UserAuthProvider, Consumer as UserConsumer, Context as AuthContext };
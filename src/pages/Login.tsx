
   
import React, { useState, useEffect } from "react";

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonButtons,
  IonRow,
  IonCol,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonText,
  IonRouterLink,
  IonIcon
} from "@ionic/react";
import { RouteComponentProps } from "react-router";


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

/*
import {
  signInWithGoogleIFCM,
  signInWithTwitter,
  signInWithFacebook,
} from "../firebase/firebaseAuth";
*/

import { connect } from "../data/connect";

import "./Login.scss";

import { logoFacebook, logoGoogle, logoTwitter } from "ionicons/icons";


import { signInWithGoogle } from "../firebase/firebaseConfig";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  
//  const user = firebase.auth().currentUser;
/*
  useEffect(() => {
    if (user) {
     // console.log("The user logged in is : ");
    ////  console.log(user);
      //Redirect to Home page if logged in succesfull
    //  history.replace("/tabs/home");
    }
  }, [user ]);
*/
  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (!username) {
      setUsernameError(true);
    }
    if (!password) {
      setPasswordError(true);
    }
/*
    if (username && password) {
      login(username, password);
      await setIsLoggedIn(true);
      await setUsernameAction(username);
      //   history.push('/tabs/home', {direction: 'none'});
    }
    */
  };

  return (
    <IonPage id="login-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start"></IonButtons>
          <IonTitle>Login to IFCM</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="login-logo">
          <img src="assets/img/ifcm_logo.png" alt="ifcm Logo" />
        </div>

        <form noValidate onSubmit={login}>
          <IonList>
            <IonButton
              expand="block"
              color="facebook"
              className="margin"
              //onClick={() => signInWithFacebook()}
            >
              <IonIcon icon={logoFacebook} color={"#ffffff"}  />{" "}
              <IonText className="facebook">Facebook Connect</IonText>
            </IonButton>

            <IonButton  className="margin-google"  onClick={() => signInWithGoogle()}
            >
            <IonIcon icon={logoGoogle} color={"#ffffff"} />{" "}
              </IonButton>

              <IonButton  className="margin-google"// onClick={() => signInWithTwitter( )}
              >
            <IonIcon icon={logoTwitter} color={"#ffffff"} />{" "}
              </IonButton>

            <IonText className="ion-text-center">
              {" "}
              <p className="gray"> OR</p>
            </IonText>

            <IonItem>
              <IonLabel position="stacked" color="primary">
                Email
              </IonLabel>
              <IonInput
                name="username"
                type="text"
                value={username}
                spellCheck={false}
                autocapitalize="off"
                onIonChange={(e) => setUsername(e.detail.value!)}
                required
              ></IonInput>
            </IonItem>

            {formSubmitted && usernameError && (
              <IonText color="danger">
                <p className="ion-padding-start">Email is required</p>
              </IonText>
            )}

            <IonItem>
              <IonLabel position="stacked" color="primary">
                Password
              </IonLabel>
              <IonInput
                name="password"
                type="password"
                value={password}
                onIonChange={(e) => setPassword(e.detail.value!)}
              ></IonInput>
            </IonItem>

            {formSubmitted && passwordError && (
              <IonText color="danger">
                <p className="ion-padding-start">Password is required</p>
              </IonText>
            )}
          </IonList>

          <IonRow>
            <IonCol>
              <IonButton className="login-button" type="submit" expand="block">
                Login
              </IonButton>
            </IonCol>
          </IonRow>
        </form>
        <IonText className="ion-text-center">
          <IonRouterLink href="/forgot" class="forgot">
            Forgot Password ?
          </IonRouterLink>
          <p>
            Don't have an account ?{" "}
            <IonRouterLink href="/signup">Sign up</IonRouterLink>
          </p>
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default Login;

import React, { useState } from "react";
import { ActionSheetButton } from "@ionic/core";
import {
  IonThumbnail,
  IonContent,
  IonIcon,
  IonPage,
  IonToolbar,
  IonFab,
  IonFabList,
  IonFabButton,
  IonButton,
  IonText,
  IonCard,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonListHeader,
} from "@ionic/react";
import {
  bookmarkSharp,
  shareSocialOutline,
  chevronBackCircleOutline,
  copyOutline,
} from "ionicons/icons";

import { Event, PropheticMessage, VerseOfToday } from "../data/models";
import { connect } from "../data/connect";

//import { auth } from "../data/firebaseApi";
import { useAuthState } from "react-firebase-hooks/auth";

import "./Homepage.scss";
import { authuser, logout } from "../firebase/firebaseConfig";
import styled from 'styled-components'
interface OwnProps {}

interface StateProps {
  events: Event[];
  propheticmessage: PropheticMessage;
  verseoftoday: VerseOfToday;
}

interface DispatchProps {}

interface HomePageProps extends OwnProps, StateProps, DispatchProps {}

const Homepage: React.FC = () => {
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [actionSheetButtons, setActionSheetButtons] = useState<
    ActionSheetButton[]
  >([]);
  const [actionSheetHeader, setActionSheetHeader] = useState("");
  const [user, loading, error] = useAuthState(authuser);

  console.log("Liste des variables");


  var fullname: any;
 console.log(user)
  if (user) {
    user.providerData.forEach((profile) => {
      //var uid = profile.uid;
      // var email = profile.email;
      if (profile.displayName != null) {
        fullname = profile.displayName;

        console.log("  Email: " + profile.email);
        console.log("  Photo URL: " + profile.photoURL);
      } else {
        fullname = " ";
      }
    });
  } else {
    fullname = "  ";
  }

  const greetings = () => {
    var today = new Date();
    var curHr = today.getHours();

    if (curHr < 12) {
      console.log("good morning");
      return "Good morning";
    } else if (curHr < 18) {
      console.log("good afternoon");
      return "Good afternoon";
    } else {
      console.log("good evening");
      return "Good evening";
    }
  };

  function openPropheteicMsgShare(propheticmessage: PropheticMessage) {
    setActionSheetButtons([
      {
        text: "Copy Link",
        handler: () => {
          console.log("Copy Link clicked");
        },
      },
      {
        text: "Share via ...",
        handler: () => {
          console.log("Share via clicked");
        },
      },
      {
        text: "Cancel",
        role: "cancel",
        handler: () => {
          console.log("Cancel clicked");
        },
      },
    ]);
    setActionSheetHeader(`Share ${propheticmessage.text}`);
    setShowActionSheet(true);
  }
  const isLoggedIn = user?.uid
  let Button = styled.div``;
  return (
    <IonPage id="home-page">
      <IonToolbar>
        <img src="/assets/img/ifcm_logo.png" className="logo"  alt="logo-ifcm"/>
        <br />
        <br />
        <IonText className="home_title">
          {" "}
          {`${greetings()} ${user?.displayName}`},{" "}
        </IonText>
      </IonToolbar>
      <br />
      <br />

      <IonContent fullscreen={true}>
        <IonCard className="home_emptcard">
          <IonCardContent className="home_contentcard">
            <br />
            <br />

            <IonList className="verse_block" lines="none">
              <IonListHeader className="verse_titre">
                Verse of the day{" "}
              </IonListHeader>
              <br />

              <IonItem className="home-item">
                <IonButton className="verse-button">
                  <IonIcon
                    icon={bookmarkSharp}
                    className="blue-icon"
                    slot="start"
                  />
                  <IonLabel className="verse_auteur">
                    {" "}
                  
                  </IonLabel>
                </IonButton>
              </IonItem>

              <IonItem>
                <IonLabel className="verse_texte">
                  {" "}
               
                </IonLabel>
              </IonItem>
            </IonList>

            <br />
            <br />
           
        
                <IonButton onClick={logout}>
                logout
            </IonButton>

           
            <IonButton href="/login">
                go to login page
            </IonButton>

            <IonFab vertical="bottom" horizontal="end" slot="fixed">
              <IonFabButton>
                <IonIcon icon={chevronBackCircleOutline}></IonIcon>
              </IonFabButton>
              <IonFabList side="top">
                <IonFabButton>
                  <IonIcon
                    className="prophet-icon"
                    icon={shareSocialOutline}
                  
                  ></IonIcon>
                </IonFabButton>
                <IonFabButton>
                  <IonIcon
                    className="prophet-icon"
                    icon={copyOutline}
                  
                  ></IonIcon>
                </IonFabButton>
              </IonFabList>
            </IonFab>
          </IonCardContent>
        </IonCard>
        <img src="./assets/img/quotes.png" className="quotes" alt="double"/>
      </IonContent>
    </IonPage>
  );
};

export default Homepage;


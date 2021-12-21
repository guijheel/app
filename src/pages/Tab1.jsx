import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import db from '../Firebase/firebaseConfig';
import './Tab1.css';



const Tab1 = () => {
  const [reels, setReels] = useState([]) 
  

  useEffect(() => {
    db.collection("orders").onSnapshot(snapshot=>
        setReels(snapshot.docs.map(doc=>doc.data()))
        )
}, [])
const test = reels[0]
{
  console.log('firebase',reels)
}
{
  console.log('test',test)
}
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}>
          
            <IonText>
              hello
            </IonText>
      {
        reels.map( event  => (
          <div >
        
          <p>{event.createdByName}</p> 
        
        
        </div>
     
        ))
      }
        
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

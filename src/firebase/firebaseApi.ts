import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {db} from './firebaseConfig';

import { COLLECTIONS, LOCAL_STORAGE } from './firebaseConstants';


import {setIsLoggedIn, setUsername} from '../data/userActions'

import {
  Event,
  Shopping,
  Teaching,
  PropheticMessage,
  VerseOfToday,
  OrderItem,
  Order,
  TeachingLesson,
  DonationOrder,
  UserAccount,
  Branch,
} from "../data/models";


import { parseShoppingItems, parseLessons } from "../data/dataApi";


const dataUrl2 = "/assets/data/locations.json";


/**** Fonction Stripe Firestore *****/


export const getPhopheticMessageFS = async () => {
try{
      let itemsRef = db.collection(COLLECTIONS.PROPHETICMESSAGE)
      let activeRef = await itemsRef.get();

      const items: PropheticMessage[] = []
      for (let item of activeRef.docs) {
        let data = item.data();

        const newItem = {
          id: data.id,
          date: new Date(data.creationdate.toDate()),
          title: data.title,
          text: data.text,
          author: data.author
        }

        items.push(newItem)
      }

      return items[0];
    } catch (err) {
      console.log('error getting items');
      return null;
    }

}


export const getEventListFS = async () => {
  const EventList: Event[] = [];

  try{
    let itemsRef = db.collection(COLLECTIONS.EVENTS)
    let activeRef = await itemsRef.get();

    const items: Event[] = []
    for (let item of activeRef.docs) {
      let data = item.data();

      const newItem = {
        id: data.id,
        imgsrc: data.imgsrc,
        title: data.title,
        startdate: "19-10-11",
        enddate: "19-10-11",
        shortdesc: data.shortdesc,
        description: data.description,
        location: data.location,
        address: data.address,
        price: data.price,
        currencycode: data.currencycode,
        currency: data.currency
      }

      items.push(newItem);
    }

    return items
  } catch (err) {
    console.log('error getting items');
    return []
  }
}



export const getTodayVerseFS = async () => {
  const VerseOfToday: VerseOfToday[] = [];

  try{
    let itemsRef = db.collection(COLLECTIONS.EVENTS)
    let activeRef = await itemsRef.get();

    const items: VerseOfToday[] = []
    for (let item of activeRef.docs) {
      let data = item.data()

      const newItem = {
        id: data.uid,
        verse: data.verse,
        text: data.text,
        date: new Date(data.creationdate.toDate())
      }

      items.push(newItem)
    }

    return items[0];
  } catch (err) {
    console.log('error getting items');
    return null;
  }
}
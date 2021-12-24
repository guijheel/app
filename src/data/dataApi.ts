import { Storage } from "@capacitor/storage";
import {
  Shopping,
  ShoppingItem,
  Teaching,
  TeachingLesson,
  Order,
  OrderItem,
} from "./models";

import {getPhopheticMessageFS, getEventListFS, getTodayVerseFS} from '../firebase/firebaseApi';
//import fs from 'browserify-fs';

const dataUrl2 = "/assets/data/locations.json";



const HAS_LOGGED_IN = "hasLoggedIn";
const HAS_SEEN_TUTORIAL = "hasSeenTutorial";
const USERNAME = "username";



export const parseLessonsItem = (teaching: Teaching) => {
  const lessons: TeachingLesson[] = [];

  console.log(teaching);
  teaching.lessons.forEach((s) => lessons.push(s));
  console.log("List of lessons");
  console.log(lessons);

  return lessons;
};

export function parseLessons(teachings: Teaching[]) {
  const lessons: TeachingLesson[] = [];
  teachings.forEach((g) => {
    console.log(g);
    g.lessons.forEach((s) => lessons.push(s));
  });
  console.log("lessons");
  console.log(lessons);

  return lessons;
}

export function parseShoppingItems(shopping: Shopping[]) {
  const items: ShoppingItem[] = [];
  shopping.forEach((g) => {
    console.log(g);
    g.items.forEach((s) => items.push(s));
  });
  console.log(items);

  return items;
}

export function parseOrderItems(order?: Order) {
  const items: OrderItem[] = [];
  console.log(order);
  order?.orderitems.forEach((s) => items.push(s));
  console.log(items);

  return items;
}

export const getUserData = async () => {
  const response = await Promise.all([
    Storage.get({ key: HAS_LOGGED_IN }),
    Storage.get({ key: HAS_SEEN_TUTORIAL }),
    Storage.get({ key: USERNAME }),
  ]);
  const isLoggedin = (await response[0].value) === "true";
  const hasSeenTutorial = (await response[1].value) === "true";
  const username = (await response[2].value) || undefined;

  const data = {
    isLoggedin,
    hasSeenTutorial,
    username,
  };
  return data;
};

export const setIsLoggedInData = async (isLoggedIn: boolean) => {
  await Storage.set({ key: HAS_LOGGED_IN, value: JSON.stringify(isLoggedIn) });
};

export const setUsernameData = async (username?: string) => {
  if (!username) {
    await Storage.remove({ key: USERNAME });
  } else {
    await Storage.set({ key: USERNAME, value: username });
  }
};

export const setHasSeenTutorialData = async (hasSeenTutorial: boolean) => {
  await Storage.set({
    key: HAS_SEEN_TUTORIAL,
    value: JSON.stringify(hasSeenTutorial),
  });
};

export const getAppDataFS = async () => {
  /* Récupération des données des collections Firestore */

  const propheticmessage = await getPhopheticMessageFS();
  console.log("getAppDataFromFS : propheticmessage");
  console.log(propheticmessage);

  const verseoftoday = await getTodayVerseFS();
  console.log("getAppDataFromFS : verseoftoday");
  console.log(verseoftoday);

  const events = await getEventListFS();
  console.log("getAppDataFromFS : events");
  console.log(events);
  
  
  const data = {
    propheticmessage,
    verseoftoday,
    events
  };

  console.log(data);

  console.log("fin initialisation data App FS");

  return data;
};
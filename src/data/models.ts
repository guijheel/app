
  export interface Event {
    
    id: number;
    imgsrc: string;
    title: string;
    startdate: string;
    enddate: string;
    shortdesc: string;
    description: string;
    location: string;
    address: string;
    price: number;
    currencycode : string;
    currency : string;
  }
  

  export interface Shopping {
    
    id: number;
    category: string;
    count : number;
    items : ShoppingItem[];

  }


  export interface ShoppingItem {
    
    id: number;
    idcat: number;
    category : string,
    title: string;
    description: string;
    imgsrc: string;
    author: string;
    price: number;
    currencycode : string;
    currency : string;
    date : Date;
    }


  export interface Teaching {
    id: number;
    category: string;
    count : number;
    imgsrc: string;
    lessons : TeachingLesson[];
  }


  export interface TeachingLesson {
    id: number;
    idcat: number;
    category: string;
    title: string;
    text: string;
    imgsrc: string;
    author: string;
    price: number;
    currencycode : string;
    currency : string;
    date : Date;
    lock: boolean;
  }


  export interface ShoppingCartItem {
    id : number;
    idcat : number;
    category : string;
    type : string;
    title: string;
    imgsrc: string;
    author : string;
    price: number;
    qty : number;
    currencycode : string;
    currency : string;
    amount : number;
  };


  export interface Order {
    orderid: number;
    creationdate: Date;
    deliverydate: Date;
    createdBy : string;
    createdByName : string;
    shippingstatus: string;
    orderstatus : string;
    totalamount : number;
    currencycode : string;
    currency : string;
    paymentmethod : string;
    paymentcard : string;
    transactionid : string;
    shippingaddress : string;
    orderitems : OrderItem[];
  };

  export interface OrderItem {
    id : number;
    idcat : number;
    category : string;
    type : string;
    title: string;
    imgsrc: string;
    author : string;
    price: number;
    qty : number;
    amount : number;
    currencycode : string;
    currency : string;


  }

  

  export interface DonationOrder {
    id : number;
    type : string;
    branch: string;
    project: string;
    author : string;
    amount: number;
    currencycode : string;
    currency : string;
    date : Date;

  }

  export interface PropheticMessage {
    
    id: number;
    date : Date;
    title: string;
    text: string;
    author: string;

  }

  export interface VerseOfToday {
    
    id: number;
    verse: string;
    text: string;
    date: Date;


  }
 

   
  export interface Country {
    
    id: string;
    name: string;
  }

  export interface Branch {
    
    location: string;
    name : string;
    address: string;
    contact: string;
    facebookUrl : string;
    instagramUrl: string;
    twitterUrl : string;
    youtubeUrl : string;

  }

  export interface UserAccount {
    
    uid: string;
    fullname: string;
    email: string;
    profilePhoto : string;
    gender : string;
    age : number;
    country : string;
    branch : string;

  }

  export interface AppIfcmState {
    propheticmessage : PropheticMessage;
    verseoftoday : VerseOfToday;
    events : Event[];
    shopping: Shopping[];
    shoppingitems: ShoppingItem[];
    teachings: Teaching[];
    lessons: TeachingLesson[];
    myunlockedteachings : number[];
    myOrders : Order [];
    branches :Branch  [];
    loading?: boolean;
    currentorder : Order;

  }

  export interface UserState {
    isLoggedin: boolean;
    username?: string;
    hasSeenTutorial: boolean;
    loading: boolean;

  };
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import leifHolmstrand from "../../assets/images/leifHolmstrand.jpg";
import publicChrismasBus from "../../assets/images/publicChrismasBus.jpg";
import liveAdventCalendar from "../../assets/images/liveAdventCalendar.jpg";
import nobelMuseum from "../../assets/images/nobelMuseum.jpg";
import Gringerbread from "../../assets/images/Gringerbread.jpg";
import winterTour from "../../assets/images/winterTour.jpg";
import aRoom from "../../assets/images/aRoom.jpg";
import masterTest from "../../assets/images/masterTest.jpg";
import arctic from "../../assets/images/arctic.jpg";
import photography from "../../assets/images/photography.jpg";

import { RootState } from "../store";

export interface Event {
  name: string;
  date: Date;
  id: number;
  imageSrc: any;
  description: string;
  address: string;
  category: string[];
  seats: number;
}

export const initialState: Event[] = [
  {
    name: "Leif Holmstrand - From the Depth",
    date: new Date('2022-01-19'),
    id: 1,
    imageSrc: leifHolmstrand,
    description:
      "Leif Holmstrand is perhaps mostly known as a performance artist, and the performative is a clear red thread in the exhibition. The exhibition highlights his comprehensive work as a visual artist. His many objects where the material is central – yarn, textile, black garbage bags, prams, tough nylon rope – have occasionally been actors in his performances, but are also independent works in their own right.",
    address: "Marabouparken konsthall, Löfströmsvägen 8, Stockholm",
    category: ["Exhibitions"],
    seats: 100,
  },
  {
    name: "The Public Christmas bus",
    date: new Date('2021-12-20'),
    id: 2,
    imageSrc: publicChrismasBus,
    description:
      "With the Christmas bus, you travel free of charge to Christmas concerts, markets or just for fun. The bus is filled with music and culture. Every day brings a new experience from live music to atmospheric performances that you do not want to miss. Free of charge!",
    address: "Julbussen, Stockholm city",
    category: ["FAMILY", "MUSIC"],
    seats: 50,
  },
  {
    name: "Live Advent Calendar (in Swedish only)",
    date: new Date('2021-12-23'),
    id: 3,
    imageSrc: liveAdventCalendar,
    description:
      "Welcome to join and open 24 shutters in different places in the Old Town. Every day you are offered 15 minutes of entertainment with music and speeches related to Christmas, community and the Old Town. Note that this event is in Swedish. More info and times on the website.",
    address: "Gamla stan, Stockholm",
    category: ["FAMILY", "MUSIC", "FESTIVALS"],
    seats: 100,
  },
  {
    name: "The Nobel Prize Banquet – Behind the Scenes",
    date: new Date('2022-03-20'),
    id: 4,
    imageSrc: nobelMuseum,
    description:
      "Welcome to an exhibition where you can get a sense of what it feels like to attend the Nobel Prize Gala. The food, the clothing, the decorations, and the laureates’ speeches are in the spotlight.",
    address: "Nobel Prize Museum, Stortorget 2, Stockholm",
    category: ["Exhibitions"],
    seats: 20,
  },
  {
    name: "Gingerbread House 2021",
    date: new Date('2022-01-08'),
    id: 5,
    imageSrc: Gringerbread,
    description:
      "The year's incarnation of Gingerbread House is a unique, fragrant exhibition made up of imaginatively designed and constructed gingerbread houses. But it is also a competition in which children, adults, amateurs, and professionals alike are invited to create side by side. 2021's theme: coming up shortly on www.arkdes.se!",
    address: "ArkDes, Exercisplan 4, Stockholm",
    category: ["Exhibitions", "FAILY"],
    seats: 30,
  },
  {
    name: "Stockholm Winter City Kayak Tour",
    date: new Date('2022-04-21'),
    id: 6,
    imageSrc: winterTour,
    description:
      "There is nothing quite like having the waterways in the ‘Venice of the North’ to yourself. During wintertime in Stockholm, when the water isn’t frozen and busy with ice skaters, the waterways are left quiet and peaceful which is just perfect for an invigorating paddle. Join us for a 3.5 hour winter city paddle in the capital of Scandinavia with dry suits on and enjoy a hearty lunch whilst looking out over the beautiful Stockholm skyline.",
    address: "Stockholm Adventures, Kungsbro Strand 21",
    category: ["SPORTS", "GUIDED TOURS"],
    seats: 15,
  },
  {
    name: "A Room of One's Own - The Role of the Artist in the Late 19th century",
    date: new Date('2022-01-22'),
    id: 7,
    imageSrc: aRoom,
    description:
      "The exhibition sheds light on how female artists conquered the artist role during a time of radical societal changes and gender-equality aspirations. The presentation describes how significant Nordic artists such as Julia Beck, Hanna Hirsch-Pauli, and Helene Schjerfbeck cast themselves in the role of the artist in dialogue with their contemporary male colleagues.",
    address: "Prins Eugens Waldemarsudde,Prins Eugens Väg 6, Stockholm",
    category: ["Exhibitions"],
    seats: 50,
  },
  {
    name: "Art and Photography around 1900",
    date: new Date('2022-01-27'),
    id: 8,
    imageSrc: photography,
    description:
      "Based on the Moderna Museet's and Nationalmuseum's rich collections of art and photography, the exhibition stretches from the end of the 19th century until the First World War. During this period, pictorialism was the style in which many of the most prominent photographers worked, inspired by from impressionism, symbolism and naturalism.",
    address: "Moderna Museet,Exercisplan 4, Stockholm",
    category: ["Exhibitions"],
    seats: 150,
  },
  {
    name: "The master test - an armor is created",
    date: new Date('2022-04-21'),
    id: 9,
    imageSrc: masterTest,
    description:
      "What does a newly manufactured armor look like, created with one of the Armory Chamber's, and Europe's finest armor as a model? Meet the armor maker Albert Collins who has performed a master test in armor forging.",
    address: "Livrustkammaren, Strömparterren 3, Stockholm",
    category: ["Exhibitions"],
    seats: 50,
  },
  {
    name: "The Arctic - while the ice is melting",
    date: new Date("2022-08-23"),
    id: 10,
    imageSrc: arctic,
    description:
      "The Arctic - home to four million people – is now facing challenges affecting us all. Nordiska museet’s upcoming major exhibition, The Arctic – while the ice is melting, allows visitors to meet people from some of the world's coldest places, where the environment and living conditions are changing at a rapid pace. The exhibition depicts people’s everyday life in a dramatic landscape, interpreted in a grand artistic and architectural space by the artist- and design duo MUSEEA.",
    address: "Nordiska museet, Djurgårdsvägen 6-16, Stockholm",
    category: ["Exhibitions"],
    seats: 20,
  },
];

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    // addProduct:(state,action:PayloadAction<Product>)=>{
    //     return [action.payload,...state]
    interestHandler: (state, action: PayloadAction<Event>) => {
      const eventIndex = state.findIndex(
        (event) => event.id === action.payload.id
      );
      state[eventIndex].seats -= 1;
    },
    
  },
});

// export const {addProduct}= productSlice.actions

export const getEventsSelector = (state: RootState) => state.events;
export const { interestHandler } = eventSlice.actions


export default eventSlice.reducer;


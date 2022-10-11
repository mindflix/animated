import { createRef } from "react";
import { Vector3 } from "three";

const state = {
  sections: 9,
  pages: 8,
  zoom: 75,
  paragraphs: [
    {
      offset: 1,
      factor: 1.75,
      header: "Hellwise.com",
      image: "/store-g7dcee4052_1920.jpg",
      aspect: 1.51,
      text: "En mars 2019, j'ai créé une boutique de cosmétiques en ligne. Le principe était de redistribuer des produits et de les promouvoir à l'international. L'entreprise a été ensuite vendue.",
    },
    {
      offset: 2,
      factor: 2.0,
      header: "K2 Process",
      image: "/k2process.png",
      aspect: 1.5,
      text: "Je suis recruté dans une entreprise de fabrication de carte électronique. L'objectif était de mettre en place un Webservice, ainsi qu'une ERP permettant d'assurer la traçabilité des produits.",
    },
    {
      offset: 3,
      factor: 2.25,
      header: "Brainfinger.fr",
      image: "/brainfinger.png",
      aspect: 1.5037,
      text: "Avec un associé, je suis contacté pour intervenir sur la création du site web Brainfinger : une entreprise de produits digitaux intégré à de l'immobilier.",
    },
    {
      offset: 4,
      factor: 2.0,
      header: "Intelligence Artificielle",
      image: "/ia.png",
      aspect: 1.665,
      text: "Je réalise une IA permettant de transcrire les nombres par reconnaissance d'image, j'ai utilisé un perceptron multicouche en langage C.",
    },
    {
      offset: 5,
      factor: 1.75,
      header: "Face Recognition",
      image: "/faceapi.png",
      aspect: 1.665,
      text: "J'intégre de l'intelligence artifielle dans la conception d'une application web afin d'authentifier les utilisateurs par reconnaissance faciale.",
    },
    {
      offset: 7,
      factor: 1.05,
      header: "D&C",
      image: "/dnc.png",
      aspect: 1.77,
      text: "Création de mon agence de développement Web.",
    },
  ],
  stripes: [
    { offset: 0, color: "#000", height: 13 },
    { offset: 6.3, color: "#000", height: 20 },
  ],
  diamonds: [
    { x: 0, offset: 0.15, pos: new Vector3(), scale: 0.6, factor: 1.8 },
    { x: 2, offset: 1.1, pos: new Vector3(), scale: 0.8, factor: 2.1 },
    { x: -5, offset: 2, pos: new Vector3(), scale: 0.8, factor: 2.5 },
    { x: 1, offset: 3.2, pos: new Vector3(), scale: 0.8, factor: 1.75 },
    { x: -5, offset: 4, pos: new Vector3(), scale: 0.8, factor: 2.5 },
    { x: 2, offset: 5.5, pos: new Vector3(), scale: 1.25, factor: 0.85 },
    { x: -5, offset: 7, pos: new Vector3(), scale: 0.8, factor: 2 },
    { x: 0, offset: 8, pos: new Vector3(), scale: 1.5, factor: 6 },
  ],
  top: createRef(),
};

export default state;

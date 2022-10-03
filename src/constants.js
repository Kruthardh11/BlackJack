// imported a folder and kept it in src 


import HA from "./assets/HA.png";
import H2 from "./assets/H2.png";
import H3 from "./assets/H3.png";
import H4 from "./assets/H4.png";
import H5 from "./assets/H5.png";
import H6 from "./assets/H6.png";
import H7 from "./assets/H7.png";
import H8 from "./assets/H8.png";
import H9 from "./assets/H9.png";
import H10 from"./assets/H10.png";
import HJ from "./assets/HJ.png";
import HQ from "./assets/HQ.png";
import HK from "./assets/HK.png";

import SA from "./assets/SA.png";
import S2 from "./assets/S2.png";
import S3 from "./assets/S3.png";
import S4 from "./assets/S4.png";
import S5 from "./assets/S5.png";
import S6 from "./assets/S6.png";
import S7 from "./assets/S7.png";
import S8 from "./assets/S8.png";
import S9 from "./assets/S9.png";
import S10 from"./assets/S10.png";
import SJ from "./assets/SJ.png";
import SQ from "./assets/SQ.png";
import SK from "./assets/SK.png";

import DA from "./assets/DA.png";
import D2 from "./assets/D2.png";
import D3 from "./assets/D3.png";
import D4 from "./assets/D4.png";
import D5 from "./assets/D5.png";
import D6 from "./assets/D6.png";
import D7 from "./assets/D7.png";
import D8 from "./assets/D8.png";
import D9 from "./assets/D9.png";
import D10 from "./assets/D10.png";
import DJ from "./assets/DJ.png";
import DQ from "./assets/DQ.png";
import DK from "./assets/DK.png";

import CA from "./assets/CA.png";
import C2 from "./assets/C2.png";
import C3 from "./assets/C3.png";
import C4 from "./assets/C4.png";
import C5 from "./assets/C5.png";
import C6 from "./assets/C6.png";
import C7 from "./assets/C7.png";
import C8 from "./assets/C8.png";
import C9 from "./assets/C9.png";
import C10 from "./assets/C10.png";
import CJ from "./assets/CJ.png";
import CQ from "./assets/CQ.png";
import CK from "./assets/CK.png";

const DECKOFCARDS = [
    { suit: "H", faceValue: "A", value: 11, id: 1, img:HA},
    { suit: "H", faceValue: "2", value: 2, id: 2 , img:H2},
    { suit: "H", faceValue: "3", value: 3, id: 3 , img:H3},
    { suit: "H", faceValue: "4", value: 4, id: 4 , img:H4},
    { suit: "H", faceValue: "5", value: 5, id: 5 , img:H5},
    { suit: "H", faceValue: "6", value: 6, id: 6 , img:H6},
    { suit: "H", faceValue: "7", value: 7, id: 7 , img:H7},
    { suit: "H", faceValue: "8", value: 8, id: 8 , img:H8},
    { suit: "H", faceValue: "9", value: 9, id: 9 , img:H9},
    { suit: "H", faceValue: "10",value: 10, id: 10,img:H10},
    { suit: "H", faceValue: "J", value: 10, id: 11,img:HJ},
    { suit: "H", faceValue: "Q", value: 10, id: 12,img:HQ},
    { suit: "H", faceValue: "K", value: 10, id: 13,img:HK},

    { suit: "S", faceValue: "A", value: 11, id: 14 ,img:SA},
    { suit: "S", faceValue: "2", value: 2, id: 15 , img:S2},
    { suit: "S", faceValue: "3", value: 3, id: 16 , img:S3},
    { suit: "S", faceValue: "4", value: 4, id: 17 , img:S4},
    { suit: "S", faceValue: "5", value: 5, id: 18 , img:S5},
    { suit: "S", faceValue: "6", value: 6, id: 19 , img:S6},
    { suit: "S", faceValue: "7", value: 7, id: 20 , img:S7},
    { suit: "S", faceValue: "8", value: 8, id: 21 , img:S8},
    { suit: "S", faceValue: "9", value: 9, id: 22 , img:S9},
    { suit: "S", faceValue: "10",value: 10, id: 23, img:S10},
    { suit: "S", faceValue: "J", value: 10, id: 24 ,img:SJ},
    { suit: "S", faceValue: "Q", value: 10, id: 25 ,img:SQ},
    { suit: "S", faceValue: "K", value: 10, id: 26 ,img:SK},

    { suit: "C", faceValue: "A", value: 11, id: 27 ,img:CA},
    { suit: "C", faceValue: "2", value: 2, id: 27 , img:C2},
    { suit: "C", faceValue: "3", value: 3, id: 27 , img:C3},
    { suit: "C", faceValue: "4", value: 4, id: 27 , img:C4},
    { suit: "C", faceValue: "5", value: 5, id: 27 , img:C5},
    { suit: "C", faceValue: "6", value: 6, id: 27 , img:C6},
    { suit: "C", faceValue: "7", value: 7, id: 27 , img:C7},
    { suit: "C", faceValue: "8", value: 8, id: 27 , img:C8},
    { suit: "C", faceValue: "9", value: 9, id: 27 , img:C9},
    { suit: "C", faceValue: "10",value: 10, id: 27, img:C10},
    { suit: "C", faceValue: "J", value: 10, id: 27 ,img:CJ},
    { suit: "C", faceValue: "Q", value: 10, id: 27, img:CQ},
    { suit: "C", faceValue: "K", value: 10, id: 27 ,img:CK},

    { suit: "D", faceValue: "A", value: 11, id: 27,img:DA},
    { suit: "D", faceValue: "2", value: 2, id: 2 , img:D2},
    { suit: "D", faceValue: "3", value: 3, id: 2 , img:D3},
    { suit: "D", faceValue: "4", value: 4, id: 2 , img:D4},
    { suit: "D", faceValue: "5", value: 5, id: 2 , img:D5},
    { suit: "D", faceValue: "6", value: 6, id: 2 , img:D6},
    { suit: "D", faceValue: "7", value: 7, id: 2 , img:D7},
    { suit: "D", faceValue: "8", value: 8, id: 2 , img:D8},
    { suit: "D", faceValue: "9", value: 9, id: 2 , img:D9},
    { suit: "D", faceValue: "10",value: 10, id: 27,img:D10},
    { suit: "D", faceValue: "J", value: 10, id: 2 ,img:DJ},
    { suit: "D", faceValue: "Q", value: 10, id: 2 ,img:DQ},
    { suit: "D", faceValue: "K", value: 10, id: 2 ,img:DK},
]
export default DECKOFCARDS;
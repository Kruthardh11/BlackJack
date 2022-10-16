import React from "react";
import { useState, useEffect } from 'react';
import DECKOFCARDS from "./constants";
import Card from "./card";
import "./style.css";
import back from "./assets/Back_Blue.png";
import HiddenCard from "./HiddenCard";


export default function Main(props) {
    const [playerHand, setPlayerHand] = useState([])
    const [dealerHand, setDealerHand] = useState([])
    const [playerSum, setPlayerSum] = useState(0)
    
    const [dealerSum, setDealerSum] = useState(0)

    const [gameStart, setGameStart] = useState(false)
    const [hidestartbtn, setHidestartbtn] = useState(true)
    const [playerLost, setPlayerLost] = useState(false)
    const [gameOn, setGameOn] = useState(false)
    const [playerWon, setPlayerWon] = useState(false)
    const [gameDraw, setGamedraw] = useState(false)
    const [showResult, setShowResult] = useState(false)
    
    const [cardShow, setCardShow] = useState([])

    const [playerTurn, setPlayerTurn] = useState("hit")
    const [newgame, setNewGame]= useState(false)


    useEffect(() => {
        setDealerSum(sumOfDealerCards(dealerHand))
        setPlayerSum(sumOfPlayercards(playerHand))
    }, [dealerHand, playerHand])

    useEffect(() => {
        checkBust(playerSum)
        checkBust(dealerSum)
        checkWin(dealerSum, playerSum)
    }, [playerSum, dealerSum])

    useEffect(() => {
        // stand after 17
        if (playerTurn=="stay"){
            if (dealerSum<17){ 
                setTimeout(function () {
                    dealDelaerHand();
                }, 2000)
                console.log("deal dealer");
            } 
            else if (dealerSum===21){
                setPlayerWon(false)
                setPlayerLost(true)
                setGameOn(false)    
                setGamedraw(false)
            }
            else if(dealerSum<21 && playerSum<21) 
            {
                console.log("dealer stop");
                if (playerHand > dealerHand){
                    console.log("player lost");
                    setPlayerWon(true)
                    setPlayerLost(false)
                    setGameOn(false)    
                    setGamedraw(false)
                }
                else if(playerHand < dealerHand){
                    setPlayerWon(false)
                    setPlayerLost(true)
                    setGameOn(false)    
                    setGamedraw(false)
                }
                else if(dealerHand===playerHand){
                    setPlayerWon(false)
                    setPlayerLost(false)
                    setGameOn(false)    
                    setGamedraw(true)
                }
            }
            else if (dealerSum>21){
                setPlayerWon(true)
                setPlayerLost(false)
                setGameOn(false)    
                setGamedraw(false)
            }
        }
    }, [dealerSum])

    

    function checkWin(dealerSum, playerSum) {
        if(dealerSum>21){
            setPlayerWon(true)
            setPlayerLost(false)
            setGameOn(false)    
            setGamedraw(false)
        }
        if (dealerSum===21){
            console.log("dealer wins")
            setPlayerWon(false)
            setPlayerLost(true)
            setGameOn(false)
            setGamedraw(false)   
        }
        if (playerSum===21){
            console.log("player wins")
            setPlayerWon(true)
            setPlayerLost(false)
            setGameOn(false)
            setGamedraw(false)
        }
        if(playerSum>21){
            console.log("you lost")
            setPlayerWon(false)
            setPlayerLost(true)
            setGameOn(false)
            setGamedraw(false)      
         }
        if(playerSum<21){
            setPlayerWon(false)
            setPlayerLost(false)
            setGameOn(true)
            setGamedraw(false) 
        }
    }

    function sumOfDealerCards(cardsArray) {
        let x = Math.floor(Math.random() * 10)   
        for (var i = 0; i < cardsArray.length; i++) {
            x += cardsArray[i].value
        }
        return x
    }
    function sumOfPlayercards(cardsArray){
        let y=0
        for(var j=0; j<cardsArray.length; j++){
            y+=cardsArray[j].value
        }
        return y
    }

    function dealDelaerHand() {
        const random1 = Math.floor(Math.random() * DECKOFCARDS.length)
        checkWin(dealerSum, playerSum)    
        setDealerHand((prev) => {
            return [...prev, DECKOFCARDS[random1]]
        })
    }

    function dealPlayerHand() {
        const random = Math.floor(Math.random() * DECKOFCARDS.length)
        setPlayerHand((prev) => {
            return [...prev, DECKOFCARDS[random]]
        })
        checkWin(dealerHand, playerHand)
    }

    function checkBust (sumOfPlayer, dealerSum){
    if(dealerSum===21){
        setPlayerWon(false)
        setPlayerLost(true)
        setGameOn(false)
        setGamedraw(false)
        
    }
    if(dealerSum>21){
        setPlayerWon(true)
        setPlayerLost(false)
        setGameOn(false)
        setGamedraw(false)
        
    }
    if (sumOfPlayer===21) {
        console.log("you won!")
        setPlayerWon(true)
        setPlayerLost(false)
        setGameOn(false)
        setGamedraw(false)
        
        
    } else if (sumOfPlayer>21){
            console.log("bust")
            setPlayerWon(false)
            setPlayerLost(true)
            setGameOn(false)
            setGamedraw(false)

        } else {
            return false
        }
    };

    function startgame() {
        setGameStart(true)
        setHidestartbtn(false)
        setShowResult(true)
        setNewGame(true)
        setCardShow(() => {
            // deal a card to player, dealer, player, dealer, show 1 hide 1 for dealer. show both for 
            // setTimeout(function () {
            //     dealDelaerHand();
            // }, 2000)
            setTimeout(function () {
                dealPlayerHand();
            }, 500)
            setTimeout(function () {
                dealDelaerHand();
            }, 2000)
            setTimeout(function () {
                dealPlayerHand();
            }, 2500)
    
        })
    }
    function newGame(){
        window.location.reload(false);
    }

    return (
        <main className={props.darkMode ? "light":"dark"}>
            {hidestartbtn && <button onClick={startgame} className="start-game-btn">Start Game</button>}
            {gameStart && 
            <div>
                <div>
                    <div  className="playing-div">
                        <div className="dealers-hand">Dealer's Hand </div>
                         <HiddenCard className="hidden-card" img={back}/>
                        <div className="dealers-cards">{dealerHand.map(elem=>{
                            return (
                            <div>
                            <Card img={elem.img}/>
                            </div>
                            )
                        })}</div>
                        <div className="dealers-sum">dealer Card sum - {dealerSum}</div>
                    </div>

                    <div className="playing-div">
                        <div className="players-hand">Player's Hand</div>
                        <div className="players-cards">{playerHand.map(elem=>{
                            return(
                                <Card  img={elem.img}/>
                            )
                        })}</div>
                        <div className="players-sum"> player card sum -  {playerSum}</div>
                    </div>
                </div>
                <div className="buttons">
                        <button className="hit-btn" onClick={()=>{
                                dealPlayerHand()
                            }}>Hit</button>
                        
                        <button className="stay-btn" onClick={()=>{
                            setPlayerTurn("stay")       
                            dealDelaerHand()
                        }}>Stay</button>
                </div>
                { showResult && <div className={props.darkMode ? "result-dark":"result-light"}>
                    {gameDraw && <div>Draw. Let's call a TRUCE</div>}
                    {playerLost && <div>Dealer wins</div>}
                    {gameOn && <div> Hit or Stay </div>}
                    {playerWon && <div>BlackJack!! You Won 🥳 </div>}
                </div>}
                </div>
            }
            <div className="new-btn-div">
            { newgame && <button onClick={newGame} className="new-game-btn" >New Game</button>}
            </div>
            
                
        </main>
    )
}
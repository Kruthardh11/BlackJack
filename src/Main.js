import React from "react";
import { useState, useEffect } from 'react';
import DECKOFCARDS from "./constants";
import Card from "./card";
import "./style.css"

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
    const [showResult, setShowResult] = useState(true)
    

    const [playerTurn, setPlayerTurn] = useState("hit")


    //const playerHandArray = valueCard
    //const dealerHandArray = dealerValue

    useEffect(() => {
        setDealerSum(sumOfCards(dealerHand))
        setPlayerSum(sumOfCards(playerHand))
    }, [dealerHand, playerHand])

    useEffect(() => {
        checkBust(playerSum)
        checkBust(dealerSum)
        checkWin(dealerSum, playerSum)
    }, [playerSum])

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
                setTimeout(function () {
                    window.location.reload(false);
                }, 4000)
                
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
                    setTimeout(function () {
                        window.location.reload(false);
                    }, 4000)
                }
                else if(playerHand < dealerHand){
                    setPlayerWon(false)
                    setPlayerLost(true)
                    setGameOn(false)    
                    setGamedraw(false)
                    setTimeout(function () {
                        window.location.reload(false);
                    }, 4000)
                }
                else if(dealerHand===playerHand){
                    setPlayerWon(false)
                    setPlayerLost(false)
                    setGameOn(false)    
                    setGamedraw(true)
                    setTimeout(function () {
                        window.location.reload(false);
                    }, 4000)
                }
            }
            else if (dealerSum>21){
                setPlayerWon(true)
                setPlayerLost(false)
                setGameOn(false)    
                setGamedraw(false)
                setTimeout(function () {
                    window.location.reload(false);
                }, 4000)
            }
        }
    }, [dealerSum])

    useEffect(() => {
        // deal a card to player, dealer, player, dealer, show 1 hide 1 for dealer. show both for 
        setTimeout(function () {
            dealDelaerHand();
        }, 2000)
        setTimeout(function () {
            dealPlayerHand();
        }, 2500)
        setTimeout(function () {
            dealDelaerHand();
        }, 3000)
        setTimeout(function () {
            dealPlayerHand();
        }, 3500)

    }, [])

    function checkWin(dealerSum, playerSum) {
        if(dealerSum>21){
            setPlayerWon(true)
            setPlayerLost(false)
            setGameOn(false)    
            setGamedraw(false)
            setTimeout(function () {
                window.location.reload(false);
            }, 4000)
        }
        if (dealerSum===21){
            console.log("dealer wins")
            setPlayerWon(false)
            setPlayerLost(true)
            setGameOn(false)
            setGamedraw(false)

            setTimeout(function () {
                window.location.reload(false);
            }, 4000)       
        }
        if (playerSum===21){
            console.log("player wins")
            setPlayerWon(true)
            setPlayerLost(false)
            setGameOn(false)
            setGamedraw(false)
            
            setTimeout(function () {
            
                window.location.reload(false);
            }, 4000)        
        }
        if(playerSum>21){
            console.log("you lost")
            setPlayerWon(false)
            setPlayerLost(true)
            setGameOn(false)
            setGamedraw(false)  

            setTimeout(function () {
                
                window.location.reload(false);
            }, 4000)       
         }
        if(playerSum<21){
            setPlayerWon(false)
            setPlayerLost(false)
            setGameOn(true)
            setGamedraw(false) 
        }
    }

    function sumOfCards(cardsArray) {
        let s = 0
        for (var i = 0; i < cardsArray.length; i++) {
            s += cardsArray[i].value
        }
        return s
    }

    function dealDelaerHand() {
        const random1 = Math.floor(Math.random() * DECKOFCARDS.length)
        checkWin(dealerHand, playerHand)    
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
        setTimeout(function () {
            window.location.reload(false);
        }, 4000)
    }
    if(dealerSum>21){
        setPlayerWon(true)
        setPlayerLost(false)
        setGameOn(false)
        setGamedraw(false)
        setTimeout(function () {
            window.location.reload(false);
        }, 4000)
    }
    if (sumOfPlayer===21) {
        console.log("you won!")
        setPlayerWon(true)
        setPlayerLost(false)
        setGameOn(false)
        setGamedraw(false)
        setTimeout(function () {
            window.location.reload(false);
        }, 4000)
        
    } else if (sumOfPlayer>21){
            console.log("bust")
            setPlayerWon(false)
            setPlayerLost(true)
            setGameOn(false)
            setGamedraw(false)
            setTimeout(function () {
                window.location.reload(false);
            }, 4000)
        } else {
            return false
        }
    };

    function startgame() {
        setGameStart(true)
        setHidestartbtn(false)
    }

    return (
        <main className={props.darkMode ? "dark":""}>
            {hidestartbtn && <button onClick={startgame} className="new-game-btn">New Game</button>}
            {gameStart && 
            <div>
                <div>
                    <div  className="playing-div">
                        <div className="dealers-hand">Dealer's Hand </div>
                        <div className="dealers-cards">{dealerHand.map(elem=>{
                            return (
                            <Card  img={elem.img}/>
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
                </div>
            }
                { showResult && <div className="result-div">
                    {gameDraw && <div>Draw. Let's call a TRUCE</div>}
                    {playerLost && <div>Dealer wins</div>}
                    {gameOn && <div> Hit or Stay </div>}
                    {playerWon && <div>BlackJack!! You Won 🥳 </div>}
                </div>}
        </main>
    )
}
import { useState } from "react"
import "./lottary.css"
import { genTicket,sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottary({n=3,WinningSum=15}){
    let [ticket, setTicket]=useState(genTicket(n));
    let isWin=sum(ticket)===WinningSum

    let buyTicket=()=>{
        setTicket(genTicket(n))
    };

    return(
        <div>
            <h1>This is a lottary game</h1>
                <h2>Your Ticket</h2>
            <div className="ticket">
                <Ticket ticket={ticket}/>
            </div>
            <h3>
                {isWin && "You Won the Lottary" }
            </h3>
            <br />
            <button onClick={buyTicket}>Buy Ticket</button>
        </div>

    )
}
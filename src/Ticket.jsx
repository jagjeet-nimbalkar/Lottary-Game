import TicketNum from "./TicketNum";
import "./Ticket.css"

export default function  Ticket({ticket}){
    return(
        <>
        <hr />
            <br /><br />
            {ticket.map((num,idx)=>(
                <TicketNum num={num} key={idx}/>
            ))}
        </>
    )
    
}
import { useState } from "react";
import DayMess from "./DayMess";
import "./DayCard.css";

function DayCard ({image, mess, date, onToggleFavorite}: { image: string; mess: { thought: string }; date: string; onToggleFavorite: (thought: string) => void;}) {
    
    const [flipped, setFlipped] = useState(false);

    return (
        <article className="day-card" onClick={()=>setFlipped(!flipped)}>
            <div className={`day-inner ${flipped ? "flipped" : ""}`}>
                <div>
                    <img className="day-front" src={image} alt={date}/>
                </div>
                <div className="day-back">
                    <DayMess thought={mess.thought} onToggleFavorite={onToggleFavorite} />
                </div>
            </div>
        </article>
    );
}

export default DayCard;
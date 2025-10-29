import { useState } from "react";
import "./DayMess.css"

interface DayMessProps {
    thought: string;
    onToggleFavorite: (thought: string) => void;
}

function DayMess ({thought, onToggleFavorite}: DayMessProps) {
    const [favourite, setFavourite] = useState(false);

    return (
        <article className="mess">
            <p>{thought}</p>
            <button 
                type="button" 
                onClick={(event: React.MouseEvent) => {
                    event.stopPropagation(); 
                    setFavourite(!favourite); 
                    onToggleFavorite(thought);
                }}
                className="favourite" 
            >{favourite ? "\u2605" : "\u2606"}</button>
        </article>
    )
}

export default DayMess;
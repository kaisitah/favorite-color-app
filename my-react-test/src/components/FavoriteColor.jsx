import ColorButton from "./ColorButton";
import { useState } from "react";
import "./FavoriteColor.css";
import Timer from "./Timer";


const colorsText = "red, orange, yellow, green, blue, purple";
const colors = colorsText.split(", ");

function FavoriteColor() {
    const [favoriteColor, setFavoriteColor] = useState("black");
    const [isStopped, setIsStopped] = useState(false);
    
    function handleChooseColor(color) {
        setFavoriteColor(color);
        setIsStopped(true);
    }

    return (
        <>
            <div className="FavoriteColor-buttons">
                {colors.map((color) => 
                    <ColorButton 
                        key={color}
                        onChooseColor={handleChooseColor} 
                        color={color} 
                    />
                )}
            </div>
            <p style={{
                background: "lightgrey", 
                color: favoriteColor,
            }}>
                <strong>My favorite color is {favoriteColor}!</strong>
            </p>
            <Timer stopped={isStopped} />
        </>
    )
}

export default FavoriteColor;
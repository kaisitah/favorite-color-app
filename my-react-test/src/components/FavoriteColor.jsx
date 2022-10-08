import ColorButton from "./ColorButton";
import { useState } from "react";
import "./FavoriteColor.css";

const colorsText = "red, orange, yellow, green, blue, purple";
const colors = colorsText.split(", ");

function FavoriteColor () {
    const [favoriteColor, setFavoriteColor] = useState("black");
    
    return (
        <>
            <div className="FavoriteColor-buttons">
                {colors.map((color) => 
                    <ColorButton 
                        key={color}
                        onChooseColor={setFavoriteColor} 
                        color={color} 
                    />
                )}
            </div>
            <p style={{
                background: "lightgrey", 
                color: favoriteColor,
            }}>
                My favorite color is {favoriteColor}!
            </p>
        </>
    )
}

export default FavoriteColor;
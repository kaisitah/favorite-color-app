import ColorButton from "./ColorButton";
import { useState } from "react";

const colorsText = "red, orange, yellow, green, blue, purple";
const colors = colorsText.split(", ");

function FavoriteColor () {
    const [favoriteColor, setFavoriteColor] = useState("black");
    
    return (
        <>
            {colors.map((color) => 
                <ColorButton 
                    key={color}
                    onChooseColor={setFavoriteColor} 
                    color={color} 
                />
            )}
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
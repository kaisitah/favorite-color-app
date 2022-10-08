function ColorButton(props) {
    function handleClick(event) {
        props.onChooseColor(props.color);
    }
    return (
        <button 
            type="button"
            style={{
                color: "lightgrey", 
                background: props.color,
            }} 
            onClick={handleClick}
        >
            Choose {props.color}
        </button>
    );
}

export default ColorButton;
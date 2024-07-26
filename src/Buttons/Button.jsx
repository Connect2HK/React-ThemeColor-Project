import useButton from "./Buttons";
function Button({colorType, text,onClick}){
    return (
        <button
        onClick={onClick}
        type={colorType}
        className={`dy-2 ${useButton(colorType)} x-1 rounded-xl`}
        >
        {text}
        </button>
    ) 
}
export default Button;
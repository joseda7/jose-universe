import React from "react"
import "./button.scss"

const Button = (props: ButtonInterface) =>
    props.type === "button" ? (
    <button
        id={props.id}
        className={props.classname}
        disabled={props.isDisabled}
        onClick={props.onClickAction}
    >
    {props.text}
    </button>
    ) : (
    <input
        className={props.classname}
        type="submit"
        value={props.text}
        disabled={props.isDisabled}
    />
)

interface ButtonInterface {
    id: string;
    type: 'button' | 'input';
    classname: string;
    text: string;
    onClickAction?: () => any;
    isDisabled: boolean | undefined;
}

export default Button

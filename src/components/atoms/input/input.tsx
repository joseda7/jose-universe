import React, { MutableRefObject } from 'react';
import './input.scss';

const Input = (props: any) => {

    const node: MutableRefObject<any> = React.useRef();
    const [isActive, setActiveSelect] = React.useState(false);
    const [selectedLabel, setSelectedLabel] = React.useState(props.placeholder);

    
    const setActiveOption = (option) => {
        setSelectedLabel(option);
        props.setValue(option);
    }

    const handleClickOutside = e => {
        if (node.current.contains(e.target)) {
            return;
        } else{
            setActiveSelect(false);
        }
    };

    const handleSpan = (e, option) => {
        e.stopPropagation(); 
        setActiveSelect(false); 
        setActiveOption(option) 
    }
    
    React.useEffect(() => {
        if (isActive) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }    
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isActive]);


    return (
        <div className="input-field">
            <label className="input-title">{props.title}</label>
            {props.type === "select" ?
                <div className={`input input-select ${isActive && 'active'}`} ref={node}  onClick={() => setActiveSelect(!isActive)} >
                    <label>{selectedLabel}</label>
                    {isActive &&
                        <ul>
                            {props.options && props.options.map((option, index) => {
                                return (
                                    <li className="item-option" key={index} onClick={e => handleSpan(e, option)} >
                                        {option}
                                    </li>
                                )
                            })}
                        </ul>
                    }
                </div>
                : <input className="input" type={props.type} placeholder={props.placeholder} value={props.value} onChange={event => props.setValue(event.target.value)} />}
        </div>
    )
}

export default Input

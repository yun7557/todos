import { useRef, useState } from 'react';
import './TodoInput.scss';
const TodoInput = ({ onAdd }) => {
    const [text, setText] = useState('');
    const textRef = useRef(null);

    const changeInput = (e) => {
        setText(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        onAdd(text);
        setText('');
        textRef.current.focus();
    };
    return (
        <form className="TodoInput" onSubmit={onSubmit}>
            <input type="text" value={text} ref={textRef} onChange={changeInput} />
            <button type="submit">확인</button>
        </form>
    );
};

export default TodoInput;

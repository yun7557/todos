import { useState } from 'react';

const TodoItem = ({ todo, onDel, onEdit, onSave, onMode }) => {
    const { id, text, isDone, isMod } = todo;
    const [txt, setTxt] = useState(text);

    return (
        <li className={isDone ? 'on' : ''}>
            <div>
                <input type="checkbox" checked={isDone} onChange={(e) => onEdit(e, id)} />
                {isMod ? (
                    <p>
                        <em>{text}</em>
                        <button onClick={() => onMode(id)}>수정</button>
                    </p>
                ) : (
                    <p>
                        <input type="text" value={text} onChange={(e) => setTxt(e.target.value)} />
                        <button onClick={() => onSave(id)}>저장</button>
                    </p>
                )}
            </div>
            <button onClick={() => onDel(id)}>삭제</button>
        </li>
    );
};

export default TodoItem;

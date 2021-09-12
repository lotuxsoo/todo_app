import React, { useCallback ,useState, useEffect} from 'react'
import {MdAddCircle} from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert=({onInsertToggle, onInsertTodo, selectedTodo, onChangeSelectedTodo})=>{
    const [value,setValue]=useState('');

    const onChange=useCallback(e=>{
        setValue(e.target.value);
    },[]);

    const onSubmit = (e) => {
        e.preventDefault();
        onInsertTodo(value);
        setValue("");
        onInsertToggle();
    }
    useEffect(() => {
        if (selectedTodo) {
            setValue(selectedTodo.text);
        }
    }, [selectedTodo]);
    /*const onSubmit=useCallback(
        e=>{
            onInsert(value);
            setValue('');
            e.preventDefault();
        },
        [onInsert,value],
    )*/

    return (
    <div>
        <div className="background" onClick={onInsertToggle}></div>
        <form onSubmit={onSubmit}>
        <input placeholder="add" value={value} onChange={onChange}></input>
        <button type="submit"><MdAddCircle /></button>
        </form>           
    </div>
    
    );
};

export default TodoInsert;
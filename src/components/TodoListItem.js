import React from 'react';
import{
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames';

const TodoListItem=({todo,onRemove,onToggle, onInsertToggle,onChangeSelectedTodo})=>{
    const {id,text,checked}=todo;
    return(
     <div className="TodoListItem">
        <div className= {cn('checkbox',{checked})} onClick={() => onToggle(id)}>
            {checked ? (
                <MdCheckBox onClick= {() => {
                    onToggle(id);
                }}
                />
             ) : (
                <MdCheckBoxOutlineBlank onClick = {() => {
                    onToggle(id);
                }}/>
             )}
            
                <div className="text" onClick= {() => {
                    onChangeSelectedTodo(todo)
                    onInsertToggle()
                }}>{text}</div>
            
            <div className="remove" onClick={()=>onRemove(id)}>
                <MdRemoveCircleOutline/>
            </div>
        </div>
    </div>
    );
};
export default TodoListItem;
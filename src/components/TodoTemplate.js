import React from 'react';
import './TodoTemplate.scss';

const TodoTemplate=({children})=>{
    return(
        <div className="TodoTemplate">
           <div className="app-title">
                오늘의 플래너
            </div>
            <div className="content">{children}</div>
        </div>
    );
};

export default TodoTemplate;

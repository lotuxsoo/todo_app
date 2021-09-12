import './App.css';
import React,{useCallback, useState, useRef} from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import {MdAddCircle} from 'react-icons/md';

let nextId = 4;
const App = () =>{
  const [insertToggle, setInsertToggle] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [todos,setTodos]=useState([
    {
      id:1,
      text: '할 일1',
      checked: false,
    },
    {
      id:2,
      text: '할 일2',
      checked: false,
    },
    {
      id:3,
      text: '할 일3',
      checked: false,
    },
  ]);

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  }
  const onInsertTodo = (text) => {
    if(text=== "") {
    return alert("할 일을 입력해주세요");
    }
    else{
      const todo = {
        id: nextId,
        text,
        checked: false
      }
      setTodos(todos => todos.concat(todo));
      nextId++;
    }
  }

  //삭제 
  const onRemove=useCallback(
    id=>{
      setTodos(todos.filter(todo=>todo.id!==id));
    },
    [todos],
  )

  //수정 
  const onToggle=useCallback(
    id=>{setTodos(
      todos.map(todo=>
        todo.id === id?{...todo, checked: !todo.checked}: todo,),
      );}
      ,[todos],
  );

  const onInsertToggle = () => {
    setInsertToggle(prev => !prev);
  };

  return(
    <div>
  <TodoTemplate>
    <div className="TodoInsert">       
      <input placeholder="할 일 추가하기" disabled />
        <button type="submit" onClick={onInsertToggle}>
           <MdAddCircle/>
        </button>
    </div>
      <TodoList todos={todos} onRemove={onRemove} onInsertToggle={onInsertToggle} onToggle={onToggle} onChangeSelectedTodo={onChangeSelectedTodo} />
      {insertToggle && <TodoInsert onInsertToggle={onInsertToggle} onInsertTodo={onInsertTodo} selectedTodo={selectedTodo}/>}
      
    </TodoTemplate>
      </div>
      
  );
};

export default App;
import React, { useEffect, useRef, useState } from 'react'
import { FaClipboardList } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import TodoItem from './Todoİtem';

const Todo = () => {
    const [todos, setTodos] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [])
    const data = useRef();

    const addTodos = () => {
      const inputText = data.current.value.trim();

      if(inputText === "") {
        return null;
      }

      const newTodo = {
        id: todos.length +1,
        text: inputText,
        isComplate: false,
      }

      setTodos((prev) => [...prev, newTodo]);

      data.current.value = "";
    };

    const toggle = (id) => {
      setTodos((prevTodos) => {
        return prevTodos.map((todo) => {
          if(todo.id === id) {
            return {
              ...todo,
              isComplate: !todo.isComplate
            }
          }  
          return todo; 
        });
      });
    };

    const deleteTodo = (id) => {
      setTodos((prevTodos) => {
        return prevTodos.filter((todo) => todo.id !== id);
      });
    }; 

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])
    
        
      
  return (
    <div className='place-self-center bg-white w-[450px] h-[600px] p-12 flex flex-col gap-8 rounded-lg'>
        <h1 className='-3xl font-semibold tracking-wider flex gap-2 items-center'>
        <FaClipboardList />
        Todo App </h1>

        <div className='flex items-center bg-[#EEEEEE] rounded-full'>
            <input 
                ref={data}
                type="" 
                className='border-none outline-none p-3.5 flex-1 bg-transparent placeholder:-slate-400'
                placeholder='Yeni bir görev gir.'
            />
            <div 
              className="bg-[#00ADB5] h-full w-14 flex items-center justify-center rounded-r-full cursor-pointer" 
              onClick={() => addTodos()} 
            >
                <FaPlus className='size-6 placeholder: text-[#EEEEEE]'/>
            </div>
        </div>

        <div className='mt-5'>

            {
            todos.map(todo => (
              <TodoItem 
              key={todo.id} 
              todo={todo} 
              toggle={toggle} 
              deleteTodo={deleteTodo} 
              />
            ))
            }
            
        </div>
    </div>
  )
}

export default Todo
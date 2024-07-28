import React from 'react'
import { FaRegCircle, FaRegCheckCircle, FaRegTrashAlt  } from "react-icons/fa";

const TodoItem = ({ todo, toggle, deleteTodo }) => {
  return (
    <div 
    className='flex w-full items-center px-2 py-4 gap-2 border-b cursor-pointer select-none' 
    onClick={() => toggle(todo.id)} 
    >
        { todo.isComplate ? ( 
          <FaRegCheckCircle className='text-[#00ADB5] size-5 ' />
          ) : (
          <FaRegCircle className='text-[#00ADB5] size-5 ' />
        )}

        <p className={`flex-1 ${todo.isComplate ? 'line-through' : ''}`}>
          {todo.text} 
        </p>
        <FaRegTrashAlt className='text-[#f30453] size-5 hover:scale-110 transition-all' onClick={() => deleteTodo(todo.id)}/>
    </div>
  )
}

export default TodoItem
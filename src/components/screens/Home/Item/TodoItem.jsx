import cn from 'classnames'
import React from 'react'
import { BsTrash } from 'react-icons/bs'
import Check from './Check'

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
	return (
		<div
			className='flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full'
		>
			<button className='flex items-center' onClick={() => changeTodo(todo.id)}>
				<Check isCompleted={todo.isCompleted} />
				<span
					className={cn({
						'line-through': todo.isCompleted,
					})}
				>
					{todo.title}
				</span>
			</button>
			<button onClick={() => removeTodo(todo.id)}>
				<BsTrash
					size={24}
					className='ml-auto text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-300'
				/>
			</button>
		</div>
	)
}

export default TodoItem

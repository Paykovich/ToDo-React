import React from 'react'

const CreateTodoField = ({ setTodos }) => {
	const [title, setTitle] = React.useState('')

	const addTodo = title => {
		setTodos(prev => [
			{ id: prev.length + 1, title, isCompleted: false },
			...prev,
		])
		setTitle('')
	}

	console.log(title)
	return (
		<div className='flex items-center justify-between mb-4 rounded-2xl border-zinc-800 border-2 px-5 py-3 w-full mt-20'>
			<input
				type='text'
				onChange={e => setTitle(e.target.value)}
				value={title}
				onKeyDown={e => e.key === 'Enter' && addTodo(title)}
				className='bg-transparent w-full text-white outline-none'
				placeholder='Create a new todo...'
			/>
		</div>
	)
}

export default CreateTodoField

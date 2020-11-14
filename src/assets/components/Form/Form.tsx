import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createNote } from '../../redux/reducers/notesReducer/actions'
import './Form.scss'

export const Form: React.FC = () => {
	const [value, setValue] = useState('')
	const dispatch = useDispatch()

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (value.trim().length) {
			dispatch(createNote(value))
		}

		setValue('')
	}

	return (
		<div className="form">
			<form className="form__body" action="#" noValidate onSubmit={submitHandler}>
				<input
					className="form__input"
					autoComplete="off"
					value={value}
					onChange={e => setValue(e.target.value)}
				/>
				<button className="form__button" type="submit">add</button>
			</form>
		</div>
	)
}
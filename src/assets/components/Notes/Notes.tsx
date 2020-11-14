import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { completeNote, removeNote } from '../../redux/reducers/notesReducer/actions'
import { TApp } from '../../redux/reducers/rootReducer'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './Notes.scss'

export const Notes: React.FC = () => {
	const notes = useSelector((state: TApp) => state.notes)
	const dispatch = useDispatch()

	const changeHandler = (id: number) => {
		dispatch(completeNote(id))
	}

	const clickHandler = (id: number) => {
		dispatch(removeNote(id))
	}

	return (
		<TransitionGroup component="ul" className="notes">
			{notes.map(note => (
				<CSSTransition timeout={500} key={note.id} classNames="note">
					<li className={note.isCompleted ? '_active' : ''}>
						<div>
							<label>
								<input
									type="checkbox"
									onChange={() => changeHandler(note.id)}
									defaultChecked={note.isCompleted}
								/>
								<span></span>
							</label>
							<p>{note.title}</p>
						</div>
						<button onClick={() => clickHandler(note.id)}>remove</button>
					</li>
				</CSSTransition>
			))}
		</TransitionGroup>
	)
}
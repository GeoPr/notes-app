import { CREATE_NOTE, COMPLETE_NOTE, REMOVE_NOTE } from './actionsTypes';
import { TActions } from './../rootReducer';
import * as actions from './actions'

interface INote {
	id: number
	title: string
	isCompleted: boolean
}

type TInitalState = Array<INote>

const initalState: TInitalState = JSON.parse(localStorage.getItem('notes') ?? '[]')

type ActionsTypes = TActions<typeof actions>

export const notesReducer = (
	state: TInitalState = initalState,
	action: ActionsTypes
): TInitalState => {
	switch (action.type) {
		case CREATE_NOTE: {
			const { title } = action.payload

			return [...state, { title, id: Date.now(), isCompleted: false }]
		}

		case REMOVE_NOTE: {
			const { id } = action.payload

			return state.filter(note => note.id !== id)
		}

		case COMPLETE_NOTE: {
			const { id } = action.payload

			return state.map(note => {
				note.id === id && ( note.isCompleted = !note.isCompleted )

				return note
			})
		}

		default: return state
	}
}
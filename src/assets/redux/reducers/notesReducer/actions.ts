import { CREATE_NOTE, REMOVE_NOTE, COMPLETE_NOTE } from './actionsTypes';

export const createNote = (title: string) => ({
	type: CREATE_NOTE,
	payload: { title }
} as const)

export const removeNote = (id: number) => ({
	type: REMOVE_NOTE,
	payload: { id }
} as const)

export const completeNote = (id: number) => ({
	type: COMPLETE_NOTE,
	payload: { id }
} as const)
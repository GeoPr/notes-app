import { combineReducers } from 'redux'
import { notesReducer } from './notesReducer/notesReducer';

export const rootReducer = combineReducers({
	notes: notesReducer
})

export type TApp = ReturnType<typeof rootReducer>

type TProperties<T> = T extends {
	[key: string]: infer U
} ? U : never

export type TActions<T extends {
	[key: string]: (...args: any[]) => any
}> = ReturnType<TProperties<T>>

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import {rootState, AppDispatch} from './Store'

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<rootState> = useSelector;
import { TypedUseSelectorHook } from "react-redux"
import { useSelector } from "react-redux/es/exports"
import {RootStateType} from '../store'

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector
import { createContext } from 'react'
import { ContextType } from '../types/Types'

const Context = createContext<ContextType | undefined>(undefined)

export default Context

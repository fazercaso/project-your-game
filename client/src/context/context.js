// импортируем метод createContext из React
import { createContext } from 'react'

// наша переменная для формирования 'обёртки' контекста
const stateContext = createContext({})

// экспортируем контекст
export default stateContext
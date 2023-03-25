import { useReducer } from 'react'

const Counter = () => {

    const initialState = {
        count: 0,
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'Increment':
                return { count: state.count + 1 }
            case 'Decrement':
                return { count: state.count - 1 }
            case 'Reset':
                return { count: 0 }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleCountIncrement = () => {
        dispatch({ type: 'Increment' })
    }
    const handleCountDecrement = () => {
        dispatch({ type: 'Decrement' })
    }
    const handleCountReset = () => {
        dispatch({ type: 'Reset' })
    }

    return (
        <div>
            <h1>Counter: {state.count}</h1>
            <button onClick={handleCountIncrement}>Increment</button>
            <button onClick={handleCountDecrement}>Decrement</button>
            <button onClick={handleCountReset}>Reset</button>
        </div>
    )
}

export default Counter
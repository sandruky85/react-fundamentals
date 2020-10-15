// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, { useRef, useState } from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0]
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input by specifying an `id` on
  // the input and a matching value as an `htmlFor` prop on the label.
  // const [error, setError] = useState(null)
  const [inputValue, setValue] = useState('')
  const inputRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmitUsername(inputValue)
  }

  const handleChange = (event) => {
    const {value} = event.target
    setValue(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input 
          ref={inputRef} 
          id="usernameInput" 
          type="text" 
          onChange={handleChange} 
          value={inputValue}
        />
        <button type="submit">Submit</button>
        {/* { !!error && (
          <p style={{color: 'red'}}>{error}</p>
        ) } */}
      </div>
      {/* <button type="submit" disabled={Boolean(error)}>Submit</button> */}
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App

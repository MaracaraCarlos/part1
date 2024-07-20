import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const ceroQty = 8
  const points = Array(ceroQty).fill(0)

  const [selected, setSelected] = useState(0)
  const [score, setScore] = useState(points)
  const [top, setTop] = useState(0)
  const [topIndex, setTopIndex] = useState(0)

  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const handleNextAnecdotes = () => {
    const randomNumber = getRandomNumber(0, 7)
    setSelected(randomNumber)
  }

  const handleVote = () => {
    const copy = [...score]
    copy[selected] += 1
    /* Numero mayor */
    const mayor = Math.max(...copy)
    /* Indice del número mayor */
    const indiceMayor = copy.findIndex(ind => ind === mayor)
    setScore(copy)
    setTop(mayor)
    setTopIndex(indiceMayor)
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>
        {anecdotes[selected]}
      </div>
      <p>has {score[selected]} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleNextAnecdotes}>Next anecdote</button>
      <h1>Anecdote with most votes</h1>
      {top === 0
        ? (
          <p>Vote for your favorite anecdote</p>
          )
        : (
          <div>
            {anecdotes[topIndex]}
            <p>has {top} votes</p>
          </div>
          )}
    </>
  )
}

export default App

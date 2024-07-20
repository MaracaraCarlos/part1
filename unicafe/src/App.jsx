import { useState } from 'react'

const Header = () => {
  return (
    <h1>Give feedback</h1>
  )
}

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  return (
    <>
      <h1>Statistics</h1>
      {(good === 0 && neutral === 0 && bad === 0)
        ? (
          <p>No feedback given</p>
          )
        : (
          <table>
            <tbody>
              <StatisticLine text='good' value={good} />
              <StatisticLine text='neutral' value={neutral} />
              <StatisticLine text='bad' value={bad} />
              <StatisticLine text='all' value={good + neutral + bad} />
              <StatisticLine text='average' value={(good - bad) / (good + neutral + bad)} />
              <StatisticLine text='positive' value={(good * 100) / ((good + neutral + bad)) + '%'} />
            </tbody>
          </table>
          )}
    </>
  )
}

function App () {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    const newGood = good + 1
    setGood(newGood)
  }

  const handleNeutral = () => {
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
  }

  const handleBad = () => {
    const newBad = bad + 1
    setBad(newBad)
  }

  return (
    <>
      <Header />
      <div>
        <Button text='good' handleClick={handleGood} />
        <Button text='neutral' handleClick={handleNeutral} />
        <Button text='bad' handleClick={handleBad} />
      </div>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </>
  )
}

export default App

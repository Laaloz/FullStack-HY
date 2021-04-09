import React, { useState } from 'react'

//tallennetaat statistiikka omaan tilaan
const Statistic = ({ text, votes, extra }) => <tr><td>{text}</td><td>{votes}{extra}</td></tr>

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (good === 0 && neutral === 0 && bad === 0) return <div>no feedback given</div>
  return (
      <div>
          <table>
              <tbody>
                  <Statistic text="good" votes={good} />
                  <Statistic text="neutral" votes={neutral} />
                  <Statistic text="bad" votes={bad} />
                  <Statistic text="all" votes={all} />
                  <Statistic text="average" votes={average} />
                  <Statistic text="positive" votes={positive} extra="%" />
              </tbody>
          </table>
      </div>
  )
}
//tallennetaan header omaan tilaan
const Header = ({ title }) => <h1>{title}</h1>

//tallennetaan napit omaan tilaan
const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Buttons = ({ setGood, good, setNeutral, neutral, setBad, bad }) => {
  return (
      <div>
          <Button text="good" handleClick={() => setGood(good + 1)} />
          <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
          <Button text="bad" handleClick={() => setBad(bad + 1)} />
      </div>
  )
}

const App = (props) => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = good / all

  return (
    <div>
        <Header title = {"give feedback"} />
        <Buttons good = {good} setGood = {setGood} neutral = {neutral} setNeutral = {setNeutral} bad = {bad} setBad = {setBad} />
        <Header title = {"statistics"} />
        <Statistics good = {good} neutral = {neutral} bad = {bad} all = {all} average = {average} positive = {positive} />
    </div>
  )
}

export default App
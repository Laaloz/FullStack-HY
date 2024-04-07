import { useState } from 'react'

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good - bad) / total
  const positive = total === 0 ? 0 : (good / total) * 100

  // Hide if no feedback given
  if (good == 0 && neutral == 0 && bad == 0) return <p>No feedback given</p>

  return (
    <div>
      <table style={styles.table}>
        <tbody>
          <StatisticsLine text="Good" value={good} />
          <StatisticsLine text="Neutral" value={neutral} />
          <StatisticsLine text="Bad" value={bad} />
          <StatisticsLine text="All" value={total} />
          <StatisticsLine text="Average" value={average} />
          <StatisticsLine text="Positive" value={positive} />
        </tbody>
      </table>  
    </div>
  )
}

const H2 = ({ text }) => <h2>{text}</h2>

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const StatisticsLine = ({ text, value }) => (
  <tr>
    <td style={styles.cell}>{text}</td>
    <td style={styles.cell}>{text === "Positive" ? `${value}%` : value}</td>
  </tr>
)

const styles = {
  table: {
    width: '100%',
    maxWidth: '30rem',
    borderCollapse: 'collapse',
  },
  cell: {
    width: '50%',
    padding: '8px',
    border: '1px solid #ddd',
  },
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <H2 text="Give feedback" />
      <Button text="good" handleClick={() => setGood(good + 1)} />
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => setBad(bad + 1)} />

      <H2 text="Statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App

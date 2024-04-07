import { useState } from 'react'

const H2 = ({ text }) => <h2>{text}</h2>

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const getRandom = (setSelected, anecdotes, currentSelected) => {
  // get random index
  let newIndex = currentSelected;

  // check if index is the same as current selected anecdote  
  while (newIndex === currentSelected) {
    newIndex = Math.floor(Math.random() * anecdotes.length);
  }
  setSelected(newIndex);
}

const handleVote = (setVotes, selected, votes) => {
  // copy votes
  const newVotes = [...votes]

  // increase vote for selected anecdote
  newVotes[selected]++

  // update votes
  setVotes(newVotes)
}

const Vote = ({ votes, selected }) => <p>has {votes[selected]} votes</p>

const MostVotes = ({ votes, anecdotes }) => { 
  const max = Math.max(...votes)
  const maxIndex = votes.indexOf(max)

  // hide if no votes
  if (max == 0) return

  return (
    <div>
      <H2 text="Anecdote with most votes" />
      <p>{anecdotes[maxIndex]}</p>
      <p>has {max} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
  'The only way to go fast, is to go well.'
]
  
  
const App = () => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  return (
    <div>
      <H2 text="Anecdote of the day" />
      {anecdotes[selected]}
      <Vote votes={votes} selected={selected} />
      <br />
      <Button handleClick={() => handleVote(setVotes, selected, votes)} text="vote" />
      <Button handleClick={() => getRandom(setSelected, anecdotes, selected)} text="next anecdote" />
      <br />
      <MostVotes votes={votes} anecdotes={anecdotes} />
    </div>
  )
}

export default App
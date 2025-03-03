import { useState } from 'react'

const Title = ({text}) => {
  return(
    <div>
      <h1>{text}</h1>
    </div>
  )
}

const Body = ({text}) => {
  return(
    <div>
      {text}
    </div>
  )
}

const Votes = ({value}) => {
  if (isNaN(value)){
    return(
      <div></div>
    )
  }
  return(
    <div>
      has {value} votes
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


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
  const first_title = 'Anecdote of the day'
  const second_title = 'Anecdote with most votes'

  const [selected, setSelected] = useState(Math.random() * 8)

  const [votes, setVotes] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 });

  const handleRandomClick = () => {
    const randomNum = Math.floor(Math.random() * 8);
    setSelected(randomNum)
  }

  const handleVoteClick = () => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [selected]: prevVotes[selected] + 1
    }));
  }

  const highestVotedIndex = Object.keys(votes).reduce((max, key) =>
    votes[key] > votes[max] ? key : max, 0
  );

  return (
    <div>
      <Title text={first_title}></Title>
      <Body text = {anecdotes[selected]}></Body>
      <Votes value = {votes[selected]}></Votes>
      <Button handleClick = {handleVoteClick} text='vote' />
      <Button handleClick = {handleRandomClick} text='next anecdote' />
      <Title text={second_title}></Title>
      <Body text = {anecdotes[highestVotedIndex]}></Body>
      <Votes value = {votes[highestVotedIndex]}></Votes>
    </div>
  )
}

export default App
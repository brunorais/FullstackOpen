import { useState } from 'react'

const Header = ({text}) => {
  return(
    <div>
      <h1>{text}</h1>
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const SubTitle  = ({text}) => {
  return(
    <div>
      <h1>{text}</h1>
    </div>
  )
}

const Results = ({text, number}) => {
  if (text === 'positive'){
    return(
      <div>
        {text} {number} %
      </div>
    )
  }
  return(
    <div>
      {text} {number}
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const header_text = 'give feedback'
  const subTitle_text = 'statistics'

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
  }

  const handleBadClick = () => {
    const updateBad = bad + 1
    setBad(updateBad)
  }

  const all = good + neutral + bad
  const average = (good-bad)/all
  const positive = good*100/all

  return (
    <div>
      <Header text = {header_text}></Header>
      <Button handleClick = {handleGoodClick} text='good' />
      <Button handleClick = {handleNeutralClick} text='neutral' />
      <Button handleClick = {handleBadClick} text='bad' />
      <SubTitle text = {subTitle_text}></SubTitle>
      <Results text = 'good' number = {good}></Results>
      <Results text = 'neutral' number = {neutral}></Results>
      <Results text = 'bad' number = {bad}></Results>
      <Results text = 'all' number = {all}></Results>
      <Results text = 'average' number = {average}></Results>
      <Results text = 'positive' number = {positive}></Results>
    </div>
  )
}

export default App
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

const Statistics = (props) => {
  if (props.list_options[0] === 0 && props.list_options[1] === 0 && props.list_options[2] === 0){
    return(
      <div>
        No feedback given
      </div>
    )
  }

  return(
    <div>
       <div>good {props.list_options[0]}</div>
       <div>neutral {props.list_options[1]}</div>
       <div>bad {props.list_options[2]}</div>
       <div>all {props.list_options[0] + props.list_options[1] + props.list_options[2]}</div>
       <div>
        average {(props.list_options[0] - props.list_options[2])/(props.list_options[0] + props.list_options[1] + props.list_options[2])}
      </div>
      <div>
        positive {(props.list_options[0]*100)/(props.list_options[0] + props.list_options[1] + props.list_options[2])} %
      </div>
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

  const list_options = [good, neutral, bad]

  return (
    <div>
      <Header text = {header_text}></Header>
      <Button handleClick = {handleGoodClick} text='good' />
      <Button handleClick = {handleNeutralClick} text='neutral' />
      <Button handleClick = {handleBadClick} text='bad' />
      <SubTitle text = {subTitle_text}></SubTitle>
      <Statistics list_options = {list_options}></Statistics>
    </div>
  )
}

export default App
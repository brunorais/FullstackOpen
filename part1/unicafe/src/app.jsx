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

const StatisticLine = (props) => {
  if (props.text === 'positive'){
    return (
      <tbody>
        <tr>
          <td>{props.text}</td>
          <td>{props.value} %</td>
        </tr> 
      </tbody>
    )
  }
  return (
    <tbody>
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr> 
    </tbody>
  )
}


const Statistics = (props) => {
  if (props.list_values[0] === 0 && props.list_values[1] === 0 && props.list_values[2] === 0){
    return(
      <div>
        No feedback given
      </div>
    )
  }

  const all = props.list_values[0] + props.list_values[1] + props.list_values[2]
  const average = (props.list_values[0] - props.list_values[2])/all
  const positive = (props.list_values[0]*100)/all

  return(
    <table>
       <StatisticLine text = 'good' value = {props.list_values[0]}> </StatisticLine>
       <StatisticLine text = 'neutral' value = {props.list_values[1]}> </StatisticLine>
       <StatisticLine text = 'bad' value = {props.list_values[2]}> </StatisticLine>
       <StatisticLine text = 'all' value = {all}> </StatisticLine>
       <StatisticLine text = 'average' value = {average}> </StatisticLine>
       <StatisticLine text = 'positive' value = {positive}> </StatisticLine>
    </table>
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

  return (
    <div>
      <Header text = {header_text}></Header>
      <Button handleClick = {handleGoodClick} text='good' />
      <Button handleClick = {handleNeutralClick} text='neutral' />
      <Button handleClick = {handleBadClick} text='bad' />
      <SubTitle text = {subTitle_text}></SubTitle>
      <Statistics list_values = {[good, neutral, bad]}></Statistics>
    </div>
  )
}

export default App
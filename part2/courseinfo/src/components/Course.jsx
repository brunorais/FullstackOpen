const Header = ({name}) => {
    return (
      <div>
        <h1>{name}</h1>
      </div>
    )
  }
  
  const Part = ({part}) => {
    console.log(part)
    return (
      <div>
        <p>
          {part.name} {part.exercises}
        </p>
      </div>
    )
  }
  
  
  const Content = ({parts}) => {
    console.log(parts)
    return (
      <div>
        {parts.map(part => <Part key={part.id} part={part} />)}
      </div>
    )
  }
  
  const Total = ({parts}) => {
    const total = parts.map(part => part.exercises).reduce((s, p) => s + p)
    return (
      <div>
        <b>total of {total} exercises</b>
      </div>
    )
  }
  
  const Course = ({course}) => {
    return (
      <div>
        <Header name = {course.name}/>
        <Content parts = {course.parts}/>
        <Total parts = {course.parts}/>
      </div>
    )
  }

  export default Course
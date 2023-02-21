const Years = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.year
  }

  return (
    <div>
      <p>
        Hello {props.name}, you are {props.year} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

export default Years
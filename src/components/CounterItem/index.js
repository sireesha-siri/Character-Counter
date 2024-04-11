import './index.css'

const CounterItem = props => {
  const {details} = props
  const {title, count} = details

  return (
    <li>
      <p>{title} :</p>
      <p className="count">{count}</p>
    </li>
  )
}

export default CounterItem

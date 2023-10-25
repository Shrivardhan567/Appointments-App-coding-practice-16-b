// Write your code here
import {format} from 'date-fns'

const AppointmentItem = props => {
  const star =
    'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  const fillstar =
    'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'

  const {appointmentDetails, changeStar} = props
  const {id, date, title, isStar} = appointmentDetails

  const formattedDate = format(new Date(date), 'dd MMMM yyyy, EEEE')

  const starfilled = isStar ? fillstar : star
  const altstar = isStar ? 'filledstar' : 'star'

  const onClickChangeStar = () => {
    changeStar(id)
  }

  console.log(date)

  return (
    <li>
      <p>{title}</p>
      <p>{formattedDate}</p>
      <button type="button" onClick={onClickChangeStar} data-testid="star">
        <img src={starfilled} alt={altstar} />
      </button>
    </li>
  )
}
export default AppointmentItem

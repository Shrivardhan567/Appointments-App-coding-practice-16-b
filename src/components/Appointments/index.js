// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {appointmentsList: [], title: '', date: new Date(), isStarred: false}

  changeStar = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachAppointment => {
        if (eachAppointment.id === id) {
          return {...eachAppointment, isStar: !eachAppointment.isStar}
        }
        return eachAppointment
      }),
    }))
  }

  add = () => {
    const {date, title} = this.state
    const newAppointment = {
      id: uuidv4(),
      date,
      title,
      isStar: false,
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      date: '',
      title: '',
    }))
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({
      date: new Date(event.target.value),
    })
  }

  changeStarred = () => {
    this.setState(prevState => ({
      isStarred: !prevState.isStarred,
    }))
  }

  favoriteList = () => {
    const {appointmentsList} = this.state
    const favList = appointmentsList.filter(
      eachAppointment => eachAppointment.isStar === true,
    )
    return favList
  }

  render() {
    const {appointmentsList, isStarred, date, title} = this.state
    const starredList = this.favoriteList()
    const requiredList = isStarred ? starredList : appointmentsList
    return (
      <div>
        <div>
          <div>
            <div>
              <h1>Add Appointment</h1>

              <label htmlFor="title">TITLE</label>
              <input
                type="title"
                placeholder="Title"
                id="title"
                onChange={this.onChangeTitle}
                value={title}
              />

              <label htmlFor="date">DATE</label>
              <input
                placeholder="MM/DD/YYYY"
                id="date"
                type="date"
                onChange={this.onChangeDate}
                value={date}
              />
              <form>
                <button type="button" onClick={this.add}>
                  Add
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>
          <hr />
          <h1>Appointments</h1>
          <button type="button" onClick={this.changeStarred}>
            starred
          </button>
          <ul>
            {requiredList.map(eachAppointment => (
              <AppointmentItem
                appointmentDetails={eachAppointment}
                key={eachAppointment.id}
                changeStar={this.changeStar}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments

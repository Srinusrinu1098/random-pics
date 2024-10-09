import {Component} from 'react'
import './index.css'

class NavItems extends Component {
  render() {
    return (
      <div className="nav-container">
        <div className="nav-flex">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="logo"
          />
          <div className="score-flex">
            <p className="score">score: 0</p>
            <div className="sec-flex">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
                className="timer"
              />
              <p className="sec">0 sec</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NavItems

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import ReminderBox from './components/ReminderBox';
require('./less/main.less');

class App extends Component {
  render() {
    return(
      <div id="appContainer">
        <Header/>
        <ReminderBox/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
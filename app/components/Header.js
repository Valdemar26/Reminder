import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    return (
      <div id="header" className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container-fluid">
            <div className="navbar-header"><a className="navbar-brand" href="#"> Sms-reminder </a>

            </div>
            <div className="collapse navbar-collapse navbar-menubuilder">
                <ul className="nav navbar-nav navbar-left">
                    <li><a href="/">Change keywords</a></li>
                    <li><a href="/">Refresh</a></li>
                </ul>
            </div>
        </div>
      </div>
    )
  }
}

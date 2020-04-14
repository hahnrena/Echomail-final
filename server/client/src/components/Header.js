import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

////will place a helper or fxn; Please use class-based component///
class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:     
                return (
                    <li><a href="/auth/google">Login With Google</a></li>
                );
            default:
                return [
                    <li key="1"><Payments /></li>,
                    <li key="3" style={{ margin: '0 20px' }}>
                        Credits: {this.props.auth.credits}
                    </li>,
                    <li key="2"><a href="/api/dashboard">My Dashboard</a></li>,
                    <li key="2"><a href="/api/logout">Logout</a></li>
                ];
        }
        
    }

    render() {
        //console.log(this.props);
        return (
            <nav>
                <div className="nav-wrapper deep-purple lighten-1">
                    <Link 
                        to={this.props.user ? '/surveys' : '/'} 
                        className="left brand-logo"
                    >
                        Echomail
                    </Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);

import { h, Component } from 'preact';

import './topbar.scss';
import Info from '../info';

const settings = require('../../../assets/Images/settings.png');
const avatar = require('../../../assets/Images/avatar.png');

export default class Topbar extends Component<{}, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            raised: false
        }
    }

    render() {
        return (
            <span>
                <Info raised={this.state.raised} />
                <p className={`info-modal-close${this.state.raised ? ' raised' : ''}`} onClick={ () => this.setState({ raised: false })}>×</p>
                <div className="topbar">
                    <div className="topbar-left" />
                    <div style={{ paddingTop: '4px' }}><h3>Dashboard</h3></div>
                    <div className="topbar-info">
                        <div className="topbar-user">
                            <img style={{
                                marginRight: '10px',
                                width: '20px',
                                height: '20px',
                            }} src={avatar} />
                            <div className="user-information">
                                <div id="phone">01496699XX</div>
                            </div>
                        </div>
                        <div className="topbar-settings">
                            <img style={{
                                marginRight: '10px',
                                width: '20px',
                                height: '20px',
                            }} src={settings} />
                            <div
                                style={{
                                    color: '#ef5b6e',
                                    paddingTop: '4px',
                                    fontSize: '14px',
                                    fontWeight: 700,
                                    cursor: 'pointer'
                                }}
                                onClick={() => { this.setState({ raised: true }) }}
                            >INFO</div>
                        </div>
                    </div>
                </div>
                <div className="bottombar">
                    <div style={{ display: 'inline-flex' }}>
                        <img style={{
                            marginRight: '10px',
                            width: '20px',
                            height: '20px',
                        }} src={avatar} />
                        <div className="user-information">
                            <div id="phone">01496699XX</div>
                        </div>
                    </div>
                </div>
            </span>
        )
    }
}
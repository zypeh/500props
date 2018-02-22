import { h, Component } from 'preact';

import './info.scss';

interface InfoOption {
    raised: boolean
}

export default class Info extends Component<InfoOption, any>{
    constructor(props: any) {
        super(props);
    }

    render() {
        return(
            <div className={`info-modal${this.props.raised ? ' raised' : '' }`} style={{ textAlign: 'center' }}>
                <h2 style={{ margin: '2rem 35px 4rem 35px' }}>500Props</h2>
                <p>500 props does help landlords</p>
            </div>
        )
    }
}
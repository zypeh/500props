import { h, Component } from 'preact';

import Portal from '../portal';

interface CardProp {
    imgSrc: string,
    unitName: string,
    address: string,
}

import './listing.scss';

export class ListingCard extends Component<CardProp, any> {
    constructor(props: any) {
        super(props);
        this.state = { opened: false };
    }

    render () {
        const Sanitize = (str: string) => {
            if (str.length > 68)
                return `${str.substring(0, 60)}...`
            else
                return str
        }

        return (
            <div
                className="listing-card"
                onClick={()=> {
                    this.setState({ opened: true })
                    document.body.classList.toggle('noscroll', true)
                }}
            >
                <img src={this.props.imgSrc} />
                <div className="listing-card-description">
                    <h3>{Sanitize(this.props.unitName)}</h3>
                    <p><small>Langkawi, Kedah, Malaysia</small></p>
                </div>
                {
                    this.state.opened
                        ? (
                            <Portal into="body">
                                <div
                                    className="listing-modal-background"
                                >
                                    <div
                                        className="close"
                                        onClick={()=> {
                                            this.setState({ opened: false })
                                            document.body.classList.toggle('noscroll', false)
                                        }}
                                    />
                                    <ListingPopup />
                                </div>
                            </Portal>
                        )
                        : null
                }
            </div>
        )
    }
}

class ListingPopup extends Component<{}, any> {
    render() {
        return (
            <div className="listing-modal" style={{ margin: '18px', padding: '8px' }}>
                <h3>Welcome to WeSTAY! </h3>
                <p>asdasdas</p>
                <p>asdasdas</p>
                <p>asdasdas</p>
                <p>asdasdas</p>
                <p>asdasdas</p>
                <p>asdasdas</p>
                <p>asdasdas</p>
                <p>asdasdas</p>
                <p>asdasdas</p>
                <p>asdasdas</p>
                <p>asdasdas</p>
                <p>asdasdas</p>
                <p>asdasdas</p>
                <p>asdasdas</p>
                <p>asdasdas</p>
                <p>asdasdas</p>
                <p>asdasdas</p>
                <p>asdasdas</p>
                <p>asdasdas</p>
                <p>asdasdas</p>
                <p>asdasdas</p>
            </div>
        )
    }
}

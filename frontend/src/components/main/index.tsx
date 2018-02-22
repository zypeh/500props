import { h, Component } from 'preact';

import './main.scss';

import { ListingCard } from '../listing-card';

export default class Main extends Component<{}, any> {
    render() {
        return (
            <span>
                <main className="wrapper">
                    <section style={{ marginTop: '2em' }}>
                        <h2>Listings</h2>
                        <div style={{ marginTop: '14px', display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', flexFlow: 'column' }}>
                                <p>MyTown</p>
                                <small style={{ opacity: .6 }}>5 Brookvale Drive, District 21, Singapore</small>
                            </div>
                            <div style={{ display: 'flex', flexFlow: 'column' }}>
                                <h3>PENDING</h3>
                            </div>
                        </div>
                    </section>

                    <section style={{ marginTop: '3rem' }}>
                        <h3>Recent activity</h3>
                    </section>
                </main>
            </span>
        )
    }
}

/*
                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                            <ListingCard imgSrc="https://a0.muscache.com/im/pictures/a9860b74-816f-49d4-99ca-b6706640c09f.jpg?aki_policy=large" unitName="Alamanda - Stunning sunset view Hilltop Villa" />
                            <ListingCard imgSrc="https://a0.muscache.com/im/pictures/a9860b74-816f-49d4-99ca-b6706640c09f.jpg?aki_policy=large" unitName="Cancel up to 7 days before check in and get a 50% refund (minus service fees). Cancel within 7 days of your trip and the reservation is non-refundable. Service fees are refunded when cancellation happens before check in and within 48 hours of booking." />
                            <ListingCard imgSrc="https://a0.muscache.com/im/pictures/a9860b74-816f-49d4-99ca-b6706640c09f.jpg?aki_policy=large" unitName="Hawaii Swaghouse" />
                        </div>
*/
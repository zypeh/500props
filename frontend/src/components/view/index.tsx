import {h, Component} from 'preact';

import './view.scss';

interface ViewOption {
    options: Object;
    squeezed: Boolean;
}

export default class View extends Component<ViewOption, any>{
    constructor(props: any) {
        super(props);
    }

    render() {
        const {squeezed, options} = this.props;
        const viewclass = [
            'view',
            squeezed && 'view--squeezed',
        ].filter(Boolean).join(' ');

        return (
            <div className={viewclass}>
                {this.props.children}
            </div>
        )
    }
}
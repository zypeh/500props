import {h, Component} from 'preact';

import './menu-icon.scss';

interface MenuIconOption {
    open: Boolean;
    onClick: any;
}

export default class MenuIcon extends Component<MenuIconOption, any>{
    constructor(props: any) {
        super(props);
        this.state = { closing: false };
    }

    handleClick() {
        const {open} = this.props;
        this.props.onClick();

        if (open) {
            this.setState({ closing: true });
            setTimeout(() => this.setState({ closing: false}), 1000);
        }
    }

    render() {
        const {open} = this.props;
        const {closing} = this.state;
        const MenuIconClasses = [
            'menu-icon',
            open && 'menu-icon--open',
            closing && 'menu-icon--closing'
        ].filter(Boolean).join(' ');

        return (
            <div
                onClick={() => this.handleClick()}
                className={MenuIconClasses}
            >
                <span />
                <span />
                <span />
            </div>
        );
    }
}

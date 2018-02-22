import { h, Component } from 'preact';

import MenuIcon from '../menu-icon';
import Toggle from '../toggle';

import './menu.scss';

interface Options {
    [key: string]: any;
}

interface MenuOption {
    options: Options;
    onToggle: any;
    onChange: any;
}

export default class Menu extends Component<MenuOption, any>{
    constructor(props: any) {
        super(props);
        this.state = { menu: false };
    }

    setOption(option: any) {
        const { options, onChange } = this.props;
        const newOptions = Object.assign(options, option);
        onChange(newOptions);
    }

    render() {
        const { menu } = this.state;
        const { onToggle, options } = this.props;
        const {
            filterAddress,
            showRecentActivity,
        } = options;

        const menuClass = `menu${menu ? ' menu--open' : ''}`;
        return (
            <div className={menuClass}>
                <MenuIcon
                    open={menu}
                    onClick={() => {
                        this.setState({ menu: !menu });
                        onToggle(!menu);
                    }}
                />
                <div className="menu__content">
                    <Toggle
                        label="Filter address"
                        checked={filterAddress}
                        onChange={() => this.setOption({ filterAddress: !filterAddress })}
                    />
                    <Toggle
                        label="Show recent activity"
                        checked={showRecentActivity}
                        onChange={() => this.setOption({ showRecentActivity: !showRecentActivity })}
                    />
                </div>
            </div>
        )
    }
}

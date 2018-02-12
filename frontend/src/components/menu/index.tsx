import {h, Component} from 'preact';

import MenuIcon from '../menu-icon';

import './menu.scss';

interface MenuOption {
    options: Object;
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
        const {menu} = this.state;
        const {onToggle, options} = this.props;

        const menuClass = `menu ${menu ? 'menu--open' : ''}`;
        return (
            <div className={menuClass}>
                <MenuIcon
                    open={menu}
                    onClick={()=>{
                        this.setState({menu: !menu});
                        onToggle(!menu);
                    }}
                />
                <div className="menu__container">
                </div>
            </div>
        )
    }
}

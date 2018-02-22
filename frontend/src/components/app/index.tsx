import {h, Component} from 'preact';
import Menu from '../menu';
import View from '../view';
import Main from '../main';
import Topbar from '../topbar';

import './app.scss';

export default class App extends Component<{}, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            isMenuOpened: false,
            options: {}
        };
    }

    render() {
        return (
            <div className="app">
                <Menu
                    options={this.state.options}
                    onToggle={(open: Boolean) => this.setState({ isMenuOpened: open })}
                    onChange={(options: any)  => this.setState({ options })}
                />
                <View
                    squeezed={this.state.isMenuOpened}
                    options={this.state.options}
                >
                    <Topbar />
                    <Main />
                </View>
            </div>
        );
    }
}

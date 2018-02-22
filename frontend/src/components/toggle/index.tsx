import { h, Component } from 'preact';

import './toggle.scss';

interface ToggleOption {
    label: String,
    checked: boolean,
    onChange: any,
}

export default class Toggle extends Component<ToggleOption, any>{
    constructor(props: any) {
        super(props);
    }

    render() {
        //     className={`mdl-switch mdl-js-switch ${cssClasses} is-upgraded ${checked ? 'is-checked' : ''}`}
        const classes = `${this.props.checked ? ' checked' : ''}`
        return (
            <div className="t">
                <label className={classes}>
                    <input
                        type="checkbox"
                        className="simple-switch-input"
                        checked={this.props.checked}
                        onChange={() => this.props.onChange()}
                    />
                    <span className="simple-switch"></span>
                    <span style={{ marginLeft: '24px' }}>{this.props.label}</span>
                </label>
            </div>
        )
    }
}

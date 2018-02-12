import { h, Component, render } from 'preact';

interface portalProps {
    into: string,
    remote: string,
    children: JSX.Element,
}

export default class Portal extends Component<portalProps, {}> {
    remote: any;
    intoPointer: any;
    props: any;
    into: any;

    constructor(props: any) {
        super(props);
    }

	componentDidUpdate(props: any) {
		for (let i in props) {
			if (props[i]!==this.props[i]) {
				return this.renderLayer();
			}
		}
	}

	componentDidMount() {
		this.renderLayer();
	}

	componentWillUnmount() {
		this.renderLayer(false);
		if (this.remote) this.remote.parentNode.removeChild(this.remote);
	}

	findNode(node: any) {
		return typeof node==='string' ? document.querySelector(node) : node;
	}

	renderLayer(show=true) {
        // clean up old node if moving bases:
		if (this.props.into!==this.intoPointer) {
			this.intoPointer = this.props.into;
			if (this.into && this.remote) {
				this.remote = render(<PortalProxy />, this.into, this.remote);
			}
			this.into = this.findNode(this.props.into);
		}

		this.remote = render((
			<PortalProxy context={this.context}>
				{ show && this.props.children || null }
			</PortalProxy>
		), this.into, this.remote);
	}

	render(): null {
		return null;
	}
}


// high-order component that renders its first child if it exists.
// used as a conditional rendering proxy.
interface portalProxyProps {
    children?: JSX.Element,
    context?: any,
}

class PortalProxy extends Component<portalProxyProps, {}> {
	getChildContext() {
		return this.props.context;
	}
	render() {
		return this.props.children && this.props.children[0] || null;
	}
}
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import DatabasePanel from '.././Components/DatabasePanel.js';

/**
   * @author  Conan Lai
   * @description Used for all our ticker texts, adapted from
   * npm module 'react-marquee'
   * https://github.com/jasonslyvia/react-marquee/blob/master/src/index.js
*/

const FPS = 30;
const STEP = 2;
const TIMEOUT = 1 / FPS * 1000;

class Marquee extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            animatedHeight: 0,
            animatedHeight2: 0,
            animatedHeight3: 0,
            animatedHeight4: 0,
            overflowHeight: 0,
            containerHeight: 0,
            textHeight: 0,
        };
        this._startAnimation = this._startAnimation.bind(this);
        this._measureText = this._measureText.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    componentDidMount() {
        this._measureText();
        if (this.state.overflowHeight > 0) {
            this._startAnimation();
        }
    }

    componentDidUpdate() {
        this._measureText();
        this._startAnimation();
    }

    componentWillUnmount() {
        clearTimeout(this._marqueeTimer);
    }

    handleMouseEnter() {
        clearTimeout(this._marqueeTimer);
    }

    handleMouseLeave() {
        this._startAnimation();
    }

    _startAnimation() {
        clearTimeout(this._marqueeTimer);
        const isLeading = this.state.animatedHeight === 0;
        const timeout = isLeading ? this.props.leading : TIMEOUT;

        const animate = () => {
            const { containerHeight, textHeight, } = this.state;
            let animatedHeight = this.state.animatedHeight - STEP;
            let animatedHeight2 = this.state.animatedHeight2 - STEP;
            let animatedHeight3 = this.state.animatedHeight3 - STEP;

            if ((0 - animatedHeight) > textHeight) {
                animatedHeight = 0;
            }
            if ((0 - animatedHeight2) > textHeight) {
                animatedHeight2 = 0;
            }
            if ((0 - animatedHeight3) > textHeight) {
                animatedHeight3 = 0;
            }
            this.setState({
                animatedHeight,
                animatedHeight2,
                animatedHeight3,
            });
        };

        this._marqueeTimer = setTimeout(animate, timeout);
    }

    _measureText() {
        const container = ReactDOM.findDOMNode(this);
        const node = ReactDOM.findDOMNode(this.refs.text);

        if (container && node) {
            const containerHeight = container.offsetHeight;
            const textHeight = node.offsetHeight;
            const overflowHeight = textHeight - containerHeight;

            if (overflowHeight !== this.state.overflowHeight) {
                this.setState({
                    overflowHeight,
                    containerHeight,
                    textHeight,
                });
            }
        }
    }

    render() {
        const content = (
        <div style={{'display': 'inline-block','whiteSpace': 'nowrap'}}>
            <div style={{'display': 'inline-block','whiteSpace': 'nowrap'}}>{this.props.children}</div>
            <div style={{'display': 'inline-block','whiteSpace': 'nowrap'}}>{this.props.children}</div>
            <div style={{'display': 'inline-block','whiteSpace': 'nowrap'}}>{this.props.children}</div>
        </div>);
        const style = this.props.nowplaying ? { display: 'table', position: 'absolute', top: 0, left: 0, } : { display: 'table', };
        return (
            <div
                // style={style}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            >
                <div ref="text" style={{
                    'transform': `translate3d(0px, ${this.state.animatedHeight}px, 0px)`,
                    'webkitTransform': `translate3d(0px, ${this.state.animatedHeight}px, 0px)`,
                    'MozTransform': `translate3d(0px, ${this.state.animatedHeight}px, 0px)`,
                    'display': 'table-cell',
                    'width': '33.33%',
                    'height': '100vh',
                    'position': 'fixed',
                    'right': '0'
                }}>{content}</div>
                <div ref="text2" style={{
                    'transform': `translate3d(0px, ${this.state.animatedHeight}px, 0px)`,
                    'webkitTransform': `translate3d(0px, ${this.state.animatedHeight}px, 0px)`,
                    'MozTransform': `translate3d(0px, ${this.state.animatedHeight}px, 0px)`,
                    display: 'table-cell',
                    'width': '33.33%',
                    'height': '100vh',
                    'position': 'fixed',
                    'right': '0'
                }}>{content}</div>
                <div ref="text3" style={{
                    'transform': `translate3d(0px, ${this.state.animatedHeight}px, 0px)`,
                    'webkitTransform': `translate3d(0px, ${this.state.animatedHeight}px, 0px)`,
                    'MozTransform': `translate3d(0px, ${this.state.animatedHeight}px, 0px)`,
                    display: 'table-cell',
                    'width': '33.33%',
                    'height': '100vh',
                    'position': 'fixed',
                    'right': '0'
                }}>{content}</div>
            </div>
        );
    }
}

Marquee.propTypes = {
    text: PropTypes.string,
    hoverToStop: PropTypes.bool,
    nowplaying: PropTypes.bool,
    loop: PropTypes.bool,
    leading: PropTypes.number,
    trailing: PropTypes.number,
    className: PropTypes.string,
};

Marquee.defaultProps = {
    text: '',
    hoverToStop: false,
    loop: false,
    leading: 0,
    trailing: 0,
};

export default Marquee;

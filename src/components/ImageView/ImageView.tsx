import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classNames from 'classnames';
import {getOtherProperties} from '../common/Utils';
import {Fade} from '../Transitions';
import Portal from '../Portal';
import Swiper from '../Swiper';
import {ImageViewProps, ImageViewState} from './PropsType';

export default class ImageView extends React.PureComponent<ImageViewProps, ImageViewState> {
    static defaultProps: ImageViewProps = {
        target: document.body,
        prefixCls: 'bm-ImageView',
        visible: false
    };
    state: ImageViewState = {
        activeIndex: 0,
        visible: false
    };

    data: Array<string> = [];

    componentWillReceiveProps(nextProps: ImageViewProps) {
        if ('visible' in nextProps && this.props.visible !== nextProps.visible) {
            if (nextProps.target) {
                this.data = [];
                const imgs = ReactDOM.findDOMNode(nextProps.target).querySelectorAll('img');
                for (let i = 0; i < imgs.length; i++) {
                    this.data.push(imgs[i].src);
                }
            }
            this.setState({
                visible: nextProps.visible!
            });
        }
    }

    handleClose = () => {
        if (this.props.onClose) {
            (this.props.onClose as Function)();
        }
    };

    transitionEnd = (activeIndex: number) => {
        if (activeIndex >= 0) {
            this.setState({
                activeIndex
            });
        }
    };

    render() {
        const {className, prefixCls, ...other} = this.props;
        const styleClass = classNames(
            prefixCls, className
        );
        const otherProps = getOtherProperties(other, ['target', 'visible', 'onClose', 'onOpen']);
        const {activeIndex, visible}: any = this.state;
        return (
            <Portal mountNode={document.body} visible={visible}>
                <div className={styleClass} {...otherProps}>
                    <Fade in={visible}>
                        <div className={`${prefixCls}-backdrop`} onClick={this.handleClose}/>
                        <div className={`${prefixCls}-label`}>
                            {`${activeIndex + 1}/${this.data && this.data.length}`}
                        </div>
                        <div className={`${prefixCls}-container`} key="ImageView">
                            <Swiper navigation={true} on={
                                {transitionEnd: this.transitionEnd}
                            }>
                                {
                                    (this.data as Array<string>).map((src: any, index: number) => {
                                        return (<div className={`${prefixCls}-item`} key={index}>
                                            <img src={src}/>
                                        </div>)
                                    })
                                }
                            </Swiper>
                        </div>
                    </Fade>
                </div>
            </Portal>
        );
    }
}
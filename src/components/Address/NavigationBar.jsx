import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';

const NavigationBarButton = props => {
    return <button onClick={props.onClick.bind(this, props.name)}>{props.name}</button>;
};

export default class NavigationBar extends Component {
    handleClick = view => {
        this.props.onClick(view);
    };
    render() {
        const { views } = this.props;
        return (
            <Fragment>
                <nav>
                    {views.map(v => (
                        <NavigationBarButton onClick={this.handleClick} name={v} key={v} />
                    ))}
                </nav>
            </Fragment>
        );
    }
}

NavigationBar.propTypes = {
    current: PropTypes.string.isRequired,
    views: PropTypes.arrayOf(PropTypes.string.isRequired),
    onClick: PropTypes.func.isRequired,
};

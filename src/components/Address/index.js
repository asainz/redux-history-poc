import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Form from './Form';
import Details from './Details';
import NavigationBar from './NavigationBar';

import { setFieldTextValue } from '../../store/reducers/address';
import { takeSnapshotAction, applySnapshotAction } from '../../store/reducers/snapshot';
// import { ActionCreators } from 'redux-undo';

const VIEW_FORM = 'go to form';
const VIEW_DETAILS = 'go to details';

class Address extends Component {
    constructor(props) {
        super(props);

        this.state = { view: VIEW_FORM };
    }

    render() {
        const { view } = this.state;
        const {
            address,
            setFieldTextValue,
            applyAddressSnapshot,
            takeSnapshotAction,
            applySnapshotAction,
        } = this.props;

        return (
            <Fragment>
                {view === VIEW_FORM ? (
                    <Form
                        address={address}
                        onChange={setFieldTextValue}
                        takeAddressSnapshot={takeSnapshotAction}
                        onReset={applySnapshotAction}
                    />
                ) : (
                    <Details address={address} />
                )}
                <NavigationBar
                    views={[VIEW_FORM, VIEW_DETAILS]}
                    current={view}
                    onClick={view => {
                        this.setState({ view });
                    }}
                />
            </Fragment>
        );
    }
}

const mapStateToProps = ({ address }) => {
    return { address };
};
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ setFieldTextValue, takeSnapshotAction, applySnapshotAction }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Address);

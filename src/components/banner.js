import React from 'react';
import { connect } from 'react-redux';

import '../styles/banner.css';

export const Banner = (props) => {
    return (
        <div className={props.nominations.length === 5 ? "banner-s" : "banner-h"}>
            You've nominated your top 5 movies!
        </div>
    )
}

const mapStateToProps = (state) => ({
    nominations: state.nominations
});

export default connect(mapStateToProps)(Banner)



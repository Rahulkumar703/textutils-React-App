import React from 'react';
import PropTypes from 'prop-types'


function ActionBtn(props) {
    return (        
        <button type={props.type} className="action-btn" onClick={props.function}> {props.text} </button>
    )
}

ActionBtn.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string
}

ActionBtn.defaultProps = {
    type: 'reset',
    text: 'Undefined'
}

export default ActionBtn

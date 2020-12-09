import React from 'react';
import PropTypes from 'prop-types'

function ProfileComp ({array,children}) {
    return (
        <div >
            {array.map((el,i)=> <p style= {{color: "red", fontSize:'50px'}}  key={i} >{el }</p>)}
            {children}
        </div>

    )
}

ProfileComp.defaultProps = {
    array : [
        'name',
        'bio ',
        'job'
      ]
}

ProfileComp.propTypes = {
    array : PropTypes.arrayOf (PropTypes.string)
}

export default ProfileComp;
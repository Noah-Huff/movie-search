import React from 'react'

const ButtonChevronRight = ( { nextPage } ) => {
    return (
        <button className="button1" onClick={nextPage}>
            <div className="chevronRight-top"></div>
            <div className="chevronRight-bottom"></div>
        </button>
    )
}

export default ButtonChevronRight

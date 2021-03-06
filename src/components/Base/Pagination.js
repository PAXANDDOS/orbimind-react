import React from 'react'

const style = {
    div: {
        width: "100%",
        height: "fit-content",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alingItems: "center",
        marginTop: "30px"
    },
    button: {
        display: "block",
        width: "30px",
        height: "30px",
        backgroundColor: "rgba(124, 106, 239, 0.8)",
        color: "white"
    },
    buttonLeft: {
        borderTopRightRadius: "0",
        borderBottomRightRadius: "0",
        borderTopLeftRadius: "50%",
        borderBottomLeftRadius: "50%"
    },
    buttonRight: {
        borderTopLeftRadius: "0",
        borderBottomLeftRadius: "0",
        borderTopRightRadius: "50%",
        borderBottomRightRadius: "50%"
    },
    buttonInactive: {
        backgroundColor: "rgba(124, 106, 239, 0.7)",
    },
    current: {
        display: "block",
        width: "30px",
        height: "30px",
        borderRadius: "0",
        backgroundColor: "rgba(124, 106, 239, 0.8)",
        color: "white",
        padding: "0",
        margin: "0",
        fontSize: "1rem"
    }
}

export default function Pagination({ gotoNextPage, gotoPrevPage, currentPage, isNext }) {
    return (
        <div style={style.div} className='unselectable'>
            {
                currentPage == 1
                ? <button style={{...style.button, ...style.buttonLeft, ...style.buttonInactive}} disabled={true} onClick={gotoPrevPage}>&larr;</button> 
                : <button style={{...style.button, ...style.buttonLeft}} onClick={gotoPrevPage}>&larr;</button> 
            }
            
            <button style={style.current}>{currentPage}</button>

            {
                isNext
                ? <button style={{...style.button, ...style.buttonRight}} onClick={gotoNextPage}>&rarr;</button>
                : <button style={{...style.button, ...style.buttonRight, ...style.buttonInactive}} disabled={true} onClick={gotoNextPage}>&rarr;</button>
            }
        </div>
    )
}

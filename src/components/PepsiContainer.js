import React from 'react'
import { connect } from 'react-redux'
import { buyPepsi } from '../redux'

function PepsiContainer(props) {
    return (
        <div>
            <h2>Number of Pepsis: {props.numberOfPepsis}</h2>
            <button onClick={props.buyPepsi}>Buy Pepsi</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numberOfPepsis: state.pepsi.numberOfPepsis
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyPepsi: () => dispatch(buyPepsi())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PepsiContainer)

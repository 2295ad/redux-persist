import React from 'react';
import {Button} from 'reactstrap';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {increment,decrement,reset} from '../stateManager/actions'

class Counter extends React.Component{

   constructor(){
     super()
   }

    render(){
        return(
            <center>
            <div className="styleIt">
              <h3>COUNTER</h3>
              <Button onClick={this.props.increment}  size="sm" outline color="primary"  style={{margin:10}}> + </Button>
      
              <span>{this.props.count}</span>
      
              <Button onClick={this.props.decrement}  size="sm" outline color="primary" style={{margin:10}}> - </Button>
             <hr></hr>
             <Button onClick={this.props.reset} size="sm" outline color="secondary">Reset</Button>
            </div>
            <style jsx>
            {`.styleIt {
                border: 1px solid black ;
                box-shadow: 5px 6px #808080 ;
                text-align: center;
                width:50%;
            }`}
            </style>
            </center>

        )
    }
}

const mapDispatchToProps = dispatch =>{
    return bindActionCreators({ increment, decrement, reset }, dispatch)
}

const mapStateToProps = state =>{
  return{
    count:state.count
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
import React from 'react';
import {Button} from 'reactstrap';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'


class Counter extends React.Component{
   constructor(){
     super()
     this.onIncrement = this.onIncrement.bind(this);
     this.onDecrement = this.onDecrement.bind(this);
     this.Reset = this.Reset.bind(this);
   }
    onIncrement(){
     return {type:'INCREMENT',payload:this.props.count}
    }

    onDecrement(){
      return {type:'DECREMENT',payload:this.props.count}
    }
    
    Reset(){
      return {type:'RESET',payload:this.props.count}
    }
    render(){
        return(
            <center>
            <div className="styleIt">
              <h3>COUNTER</h3>
              <Button onClick={this.onIncrement}  size="sm" outline color="primary"  style={{margin:10}}> + </Button>
      
              <span>{this.props.count}</span>
      
              <Button onClick={this.onDecrement}  size="sm" outline color="primary" style={{margin:10}}> - </Button>
             <hr></hr>
             <Button onClick={this.Reset} size="sm" outline color="secondary">Reset</Button>
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
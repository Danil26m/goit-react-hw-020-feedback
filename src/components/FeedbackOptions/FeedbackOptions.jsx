import { Component } from "react";
import PropTypes from "prop-types";

class FeedbackOptions extends Component{
    render(){
        const mas = ['Good','Neutral','Bad'];
        return(
            <div>
                {mas.map((mas,i)=><button key={i} type="button" onClick={this.props.onLeaveFeedback[i]}>{mas}</button>)}
            </div>
        );
    }
}
FeedbackOptions.propTypes ={
   onLeaveFeedback:  PropTypes.arrayOf(
     PropTypes.any.isRequired      
)
}
export default FeedbackOptions;
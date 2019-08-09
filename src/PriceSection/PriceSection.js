import React, { Component } from 'react';
import './PriceSection.css';
import PartsPrice from './PartsPrice/PartsPrice';


class PriceSection extends Component {
    render () {

        const total = Object.keys(this.props.selected)
          .reduce((acc, curr) => acc + this.props.selected[curr].cost, 0); 


        return (
            <div>
                <h3>NEW GREENLEAF 2018</h3>
                <PartsPrice
                selected={this.props.selected} 
                />

                <div className="summary__total">
                    <div className="summary__total__label">Your Price: </div>
                    <div className="summary__total__value">
                    { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                        .format(total) }
                    </div>
                </div>
            </div>
        )
    }
}


export default PriceSection;
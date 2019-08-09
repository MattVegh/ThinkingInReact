import React, { Component } from 'react';
import './TechSpecsContainer.css';
import Parts from './Parts/Parts';


class TechSpecsContainer extends Component {
    render () {
        
        return (
            <div>
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                <Parts 
                selected={this.props.selected}
                features={this.props.features}
                updatedSelected={feature=>this.updateFeature(feature)}
                />
            </div>
        )
    }
}


export default TechSpecsContainer;
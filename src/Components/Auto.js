import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';
import Search from "../images/search-img.png"

class Auto extends Component {

  state = { val: '' };

  handleSubmit = (e) => {
    let countrySelected = this.props.countries.filter((countryObj) => {
      return countryObj.name === this.state.val
    })
    this.props.history.push(`/country/${countrySelected[0].id}`)
  }

  render() {
 
    return (
      <>
      <div className="autocomplete-wrapper">
        <Autocomplete
          placeholder="Search a Country"
          value={this.state.val}
          items={this.props.countries}
          getItemValue={item => item.name}
          shouldItemRender={this.props.renderCountryName}
          renderMenu={item => (
            <div className="dropdown">
              {item}
            </div>
          )}
          renderItem={(item, isHighlighted) =>
            <div className={`item ${isHighlighted ? 'selected-item' : ''}`}>
              {item.name}
            </div>
          }
          onChange={(event, val) => this.setState({ val })}
          onSelect={val => this.setState({ val })}
          inputProps={
            { placeholder: 'Search a Country' }
          }
        />
        </div>
        <div className="search-button-div">
          <button type="submit" onClick={this.handleSubmit}>
            <img src={Search} />
          </button>
        </div>
       </>
    );
  }
}

export default Auto;
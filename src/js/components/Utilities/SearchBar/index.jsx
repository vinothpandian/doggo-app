import React, {Component} from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            term: ""
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        event.preventDefault();

        this.setState({
            term: event.target.value
        });
    }


    onFormSubmit(event){
        event.preventDefault();

        this.props.fetchDogImages(this.state.term);
        this.setState({
            term: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        value={this.state.term}
                        placeholder="Search by dog breed"
                        onChange={this.onInputChange}
                    />
                    <span className="input-group-btn">
                        <button className="btn btn-dark btn-md-lg" type="submit">Search</button>
                    </span>
                </div>
            </form>
        );
    }
}

export default SearchBar;

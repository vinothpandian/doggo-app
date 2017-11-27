import React, {Component} from 'react';
import Title from "../Utilities/Title";
import SearchBar from "../Utilities/SearchBar";

class Header extends Component {
    render() {
        return (
            <div id="main-header" className="row justify-content-center align-items-center text-center">
                <div className="col-12 py-3">
                    <Title/>
                </div>
                <div className="col-10 col-md-8 col-lg-6 p-3">
                    <SearchBar fetchDogImages={this.props.fetchDogImages}/>
                </div>
            </div>
        );
    }
}

export default Header;

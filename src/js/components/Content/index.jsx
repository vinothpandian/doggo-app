import React, {Component} from 'react';
import ImageCard from "../Utilities/ImageCard/index";


class Content extends Component {

    render() {

        return (
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-md-10 col-lg-8 p-5">
                        <ImageCard breed={this.props.dogInfo.breed} image={this.props.dogInfo.image}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;

import React, {Component} from 'react';
import defaultDog from "../../../../assets/default.jpg";
import dogError from "../../../../assets/dog_error.jpg";

class ImageCard extends Component {
    render() {

        const image = ((image) =>{
            switch (image) {
                case "default":
                    return defaultDog;
                case "missing":
                    return dogError;
                default:
                    return image
            }
        })(this.props.image);

        return (
            <div className="card p-2">
                <img className="card-img-top img-fluid" src={image}  alt="Dog you love"/>
                <div className="card-body">
                    <p className="card-text text-center">{this.props.breed}</p>
                </div>
            </div>
        );
    }
}

export default ImageCard;

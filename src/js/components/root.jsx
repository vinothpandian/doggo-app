import React, {Component} from 'react';
import Header from "../containers/Header";
import Content from "../containers/Content";


class Root extends Component {

    render() {
        return (
            <div className="h-100">
                <Header/>
                <Content/>
            </div>
        );
    }
}

export default Root;

import Header from "../components/Header";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {fetchDogImages} from "../actions";

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({
        fetchDogImages
    }, dispatch)
};

export default connect(null, mapDispatchToProps)(Header);
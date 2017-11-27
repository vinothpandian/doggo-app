import Content from "../components/Content/index";
import {connect} from "react-redux";

const mapStateToProps = (dogInfo)=>{
    return dogInfo
};

export default connect(mapStateToProps)(Content);
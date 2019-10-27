import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import StoreProfile from "./StoreProfile";
import { getProfile } from "states/store-profiles/actions";

const mapStateToProps = state => ({
  storeProfile: state.storeProfile
});
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getProfile
    },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreProfile);

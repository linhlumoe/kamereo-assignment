import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import StoreProfile from './StoreProfile';
import {
  getProfile,
  updateProfile,
  uploadImage,
} from 'states/store-profiles/actions';

const mapStateToProps = state => ({
  storeProfile: state.storeProfile,
  cities: state.general.cities,
  generalLoading: state.general.loading,
});
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getProfile,
      updateProfile,
      uploadImage,
    },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreProfile);

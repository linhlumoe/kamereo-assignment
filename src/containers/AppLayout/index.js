import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCities } from 'states/generals/actions';
import AppLayout from './AppLayout';

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getCities,
    },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppLayout);

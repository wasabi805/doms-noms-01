import { connect } from 'react-redux';

import Presenter      from './textarea-presenter';
import * as Actions   from '../../logic/actions';
import * as Selectors from '../../logic/selectors';
import * as Utils     from '../../logic/utils';
const field = 'message';

const mapStateToProps = state => ({
  value:    Selectors.getFieldInput(state, field),
  hasError: Selectors.getFieldHasError(state, field),
});

const mapDispatchToProps = dispatch => ({
  func: {
    handleInputChange: e => {
      const input = e.target.value;
      const error = Utils.validateField(field, input);

      dispatch(Actions.setFormField(input, field));
      dispatch(Actions.setFormError(error));
      dispatch(Actions.setFieldHasError(error !== '', field));
    },

    handleInputBlur: e => {
      const input = e.target.value.trim();
      const error = Utils.validateField(field, input);

      dispatch(Actions.setFormField(input, field));
      dispatch(Actions.setFormError(error));
      dispatch(Actions.setFieldHasError(error !== '', field));
    }
  }
});


const Container = connect(mapStateToProps, mapDispatchToProps)(Presenter);


export default Container;

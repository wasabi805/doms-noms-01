import { connect } from 'react-redux';

import Presenter      from './text-field-presenter';
import * as Actions   from '../../logic/actions';
import * as Selectors from '../../logic/selectors';
import * as Utils     from '../../logic/utils';

const mapStateToProps = (state, {field}) => ({
  value: Selectors.getFieldInput(state, field),
  hasError: Selectors.getFieldHasError(state, field),
  label: Utils.capitalize(field),
});

const mapDispatchToProps = (dispatch, {field}) => ({
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

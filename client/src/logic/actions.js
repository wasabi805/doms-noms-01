import { default as Validations } from './validation';
import { clipAndStrip }           from './utils';

const set = ({value, path}) => ({type: 'SET_FORM_FIELD', path, value});

export const setMenuIsOpen = (bool = false) => set({path: ['nav', 'isOpen'], value: bool});

export const setFormField = (string = '', field) => set({
    path: ['contact', 'form', field, 'input'],
    value: clipAndStrip(string, Validations[field].invalid, Validations[field].max),
});

export const setFieldHasError = (bool = false, field) => set({
    path: ['contact', 'form', field, 'hasError'],
    value: bool,
});

export const setFormError = (string = '') => set({path: ['contact', 'error'], value: String(string)});
export const setModalType = (string = '') => set({path: ['modal', 'type'], value: String(string)});
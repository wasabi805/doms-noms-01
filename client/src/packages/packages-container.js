import { connect } from 'react-redux';
import * as Selectors from '../logic/selectors';

import Presenter      from './packages-presenter';

const mapStateToProps = (state) => ({
    page_01_header: Selectors.getPackageHeader01(state),
    page_02_header: Selectors.getPackageHeader02(state),
    page_03_header: Selectors.getPackageHeader03(state),
    page_04_header: Selectors.getPackageHeader04(state),
    page_05_header: Selectors.getPackageHeader05(state),
    page_06_header: Selectors.getPackageHeader06(state),

    page_01 : Selectors.getPackagePage01(state),
    page_02 : Selectors.getPackagePage02(state),
    page_03a : Selectors.getPackagePage03a(state),
    page_03b: Selectors.getPackagePage03b(state),
    page_04 : Selectors.getPackagePage04(state),
    page_05 : Selectors.getPackagePage05(state),
    page_06 : Selectors.getPackagePage06(state),
});


const Container = connect(mapStateToProps)(Presenter);


export default Container;
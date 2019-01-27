import React from 'react';
// import PropTypes from 'prop-types';
import logo from '../00-assets/img/logo.png'
import PackageHeader from './pages/package-header';
import PackageDescrip from './pages/package-descrip';
import PackageCourse from './pages/pacakge-course'

const Presenter = ({page_01_header,
                       page_01,
                       page_02_header,
                       page_02,
                       page_03_header,
                       page_03a,
                       page_03b,
                       page_04_header,
                       page_04,
                       page_05_header,
                       page_05,
                       page_06_header,
                       page_06,
}) => {
    console.log(page_01, 'page_01');
    console.log(page_02_header, 'page_02_header');
    return (
        <section className="packages">
            <h1 className='title'>Options</h1>

            <div className="book">
                <input type="radio" name="page" id="page-1" defaultChecked />
                <label className="page cover" htmlFor="page-3"><h1> Selections</h1></label>

                {/*Page 1*/}
                <label className="page cover" htmlFor="page-1">
                    <img src={logo}/>
                    <PackageHeader header={page_01_header}/>

                    <PackageDescrip list={page_01}/>
                    <PackageCourse list={page_01}/>
                </label>

                {/*Page 2*/}
                <input type="radio" name="page" id="page-3" />
                <label className="page" htmlFor="page-5">
                    <img src={logo}/>

                    <PackageHeader header={page_02_header}/>
                    <PackageCourse list={page_02}/>

                {/*Page 3*/}
                </label>
                <label className="page" htmlFor="page-3">
                    <img src={logo}/>

                    <PackageHeader header={page_03_header}/>
                    <small>Select an Appetizer Option:</small>

                    <h3>Option 1 of 2</h3>
                    <PackageCourse list={page_03a}/>
                    <h3>Option 2 of 2</h3>
                    <PackageCourse list={ page_03b}/>

                </label>

                {/*Page 4*/}
                <input type="radio" name="page" id="page-5" />
                <label className="page" htmlFor="page-7">
                    <img src={logo}/>

                    <PackageHeader header={page_04_header}/>
                    <PackageCourse list={page_04}/>
                </label>


                {/*Page 5*/}
                <label className="page" htmlFor="page-5">
                    <img src={logo}/>
                    <PackageHeader header={page_05_header}/>
                    <PackageCourse list={page_05}/>
                </label>

                {/*Page 6*/}
                <input type="radio" name="page" id="page-7" />
                <label className="page" htmlFor="page-9">
                    <img src={logo}/>
                    <PackageHeader header={page_06_header}/>
                    <PackageCourse list={page_06}/>
                </label>
                <label className="page" htmlFor="page-7">
                    <img src={logo}/>
                </label>
                <input type="radio" name="page" id="page-9" />
                <label className="page cover" htmlFor="page-11"/>
                <label className="page cover" htmlFor="page-9"/>
                <input type="radio" name="page" id="page-11" />
            </div>
        </section>
    );
};

export default Presenter;
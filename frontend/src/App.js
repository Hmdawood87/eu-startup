import React, { useState } from 'react';
import {Router} from 'react-router-dom'
import history from './services/history';
import AppRoute from "./routes";
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab, faFacebookF, faTwitter, faGooglePlusG} from '@fortawesome/free-brands-svg-icons';
import {far, faBell} from '@fortawesome/free-regular-svg-icons';
import {
    fas,
    faChevronRight,
    faSortDown,
    faStar,
    faWrench,
    faPlus,
    faMinus,
    faPaperPlane,
    faChevronLeft,
    faSearch,
    faTrash,
    faEdit,
    faEye,
    faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';
import {PageWrapper,AlertWrap, Alert} from './globalStyle';
import {toast} from 'react-toastify'
import  'react-toastify/dist/ReactToastify.css'
import 'antd/dist/antd.css';
toast.configure()
library.add(fas, fab, far, faChevronRight, faSortDown, faBell, faStar, faWrench, faPlus, faMinus, faPaperPlane, faChevronLeft, faFacebookF, faTwitter, faGooglePlusG, faSearch, faTrash, faEdit, faEye,faEllipsisV);

function App() {

    return (
        <Router history={history}>
            <PageWrapper>
                <AlertWrap>
                    <Alert role="alert" className="alert alert-warning">For best experience please download the apps
                        from
                        Apple & Android store</Alert>
                </AlertWrap>
                <AppRoute/>
            </PageWrapper>
        </Router>
    );
}

export default App;

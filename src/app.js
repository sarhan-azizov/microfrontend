import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';


import { Shell } from './components/shell';
import { PageA } from './components/lazy/page-a/page-a';

import styles from './app.scss';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Shell>
                        <Suspense fallback={<h1>Loading page...</h1>}>
                            <PageA />
                        </Suspense>
                    </Shell>
                </Route>
            </Switch>
        </Router>
    );
};

ReactDOM.render(<App />,  document.getElementById("root"));
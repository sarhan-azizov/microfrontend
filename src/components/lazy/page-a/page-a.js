import React, { useState } from 'react';

export const PageA = () => {
    const [ Component, setComponent ] = useState(null);

    if (!Component) {
        import(/* webpackChunkName: "microfrontend-application-a" */ "microfrontend-application-a").then(component => {
            setComponent(component.PageA);
        });
    }

    return Component;
};
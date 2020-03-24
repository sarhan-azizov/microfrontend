import React, { useState } from 'react';

export const PageB = () => {
    const [ Component, setComponent ] = useState(null);

    if (!Component) {
        import(/* webpackChunkName: "microfrontend-application-b" */"microfrontend-application-b").then(component => {
            setComponent(component.PageA);
        });
    }

    return Component;
};
import React from 'react';

export const createLazyElement = (fileName: string) => {
    const LazyComponent = React.lazy(() => import('' + fileName));
    return <React.Suspense fallback={<h1>...loading...</h1>}>
        <LazyComponent />
    </React.Suspense>;
};

import React from 'react';
import Loader from '../components/Loader/Loader';

export const createLazyElement = (filePath: string) => {
    const LazyComponent = React.lazy(() => import(`${filePath}`));
    return <React.Suspense fallback={<Loader/>}>
        <LazyComponent />
    </React.Suspense>;
};

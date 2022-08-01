import React from 'react';
import Loader from '../components/Loader/Loader';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export const createLazyElement = (filePath: string) => {
    const LazyComponent = React.lazy(() => import(`${filePath}`));
    return <React.Suspense fallback={<Loader/>}>
        <LazyComponent />
    </React.Suspense>;
};

export const CustomLink = ({ to, children, color }: { to: string, children: React.ReactNode, color: string }) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return isActive ? <></> : <Link className={'link'} to={to} data-color={color}>{children}</Link>;
};

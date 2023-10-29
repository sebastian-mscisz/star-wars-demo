import { Characters, Locations, Vehicles, notFoundPagePath } from 'src/common';
import { PaginationButtons } from 'src/components';
import { Navigate, Route, Routes } from 'react-router-dom';

type ItemsWithPaginationProps = {
    items: Locations | Characters | Vehicles;
    itemsPerPage: number;
    currentPageId: number;
    navPagePath: string;
    className: string;
    CardComponent: React.ElementType;
};

export const ItemsWithPagination: React.FC<ItemsWithPaginationProps> = ({
    items,
    itemsPerPage,
    currentPageId,
    navPagePath,
    className,
    CardComponent,
}) => {
    const itemsLine = items.map((item, i) => <CardComponent item={item} key={i} />);

    const numberOfPages = Math.floor(itemsLine.length / itemsPerPage);
    const itemsOnLastPage = itemsLine.length % itemsPerPage;

    const pageRoutes = Array(numberOfPages)
        .fill(null)
        .map((_, i) => i + 1)
        .map((el) => (
            <Route
                key={`${className}-page-${el + 1}`}
                path={`/${(el + 1).toString()}`}
                element={
                    <div className={`sw-${className}`}>{[...itemsLine].splice(el * itemsPerPage, itemsPerPage)}</div>
                }
            />
        ));

    return (
        <div className="sw-container__rows-wrapper">
            <PaginationButtons
                hideLeft={currentPageId === 1}
                hideRight={currentPageId === numberOfPages + (itemsOnLastPage ? 1 : 0)}
                leftPath={`${navPagePath}/${currentPageId - 1}`}
                rightPath={`${navPagePath}/${currentPageId + 1}`}
            />
            <Routes>
                {pageRoutes}
                <Route
                    index
                    element={<div className={`sw-${className}`}>{[...itemsLine].splice(0, itemsPerPage)}</div>}
                />
                <Route path="/1" element={<Navigate replace to={navPagePath} />} />
                <Route path="*" element={<Navigate replace to={notFoundPagePath()} />} />
            </Routes>
        </div>
    );
};

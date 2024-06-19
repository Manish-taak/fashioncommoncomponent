// components/Pagination.js
import React from 'react';
import ReactPaginate from 'react-paginate';

interface PaginationProps {
    pageCount: number;
    onPageChange: (selectedItem: { selected: number }) => void;
}

const Pagination = ({ pageCount, onPageChange }: PaginationProps) => {
    return (
        <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pageCount}
            marginPagesDisplayed={50}
            pageRangeDisplayed={8}
            onPageChange={onPageChange}
            containerClassName={'flex justify-center my-4'}
            pageClassName={'mx-1'}
            pageLinkClassName={'py-2 px-4 border rounded-[50%] hover:bg-gray-200'}
            previousLinkClassName={'py-2 px-4 border rounded hover:bg-gray-200'}
            nextLinkClassName={'py-2 px-4 border rounded hover:bg-gray-200'}
            breakLinkClassName={'py-2 px-4 border rounded'}
            activeClassName={'bg-blue-500 text-white  '}
        />
    );
};

export default Pagination;

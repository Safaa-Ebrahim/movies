import React from 'react'

export default function Pagination({ currentPage, totalPages, onPageChange }) {
    const pageNumbers = [];
      // calculate start and end page numbers
  let startPage, endPage;
  if (totalPages <= 4) {
    startPage = 1;
    endPage = totalPages;
  } else if (currentPage <= 2) {
    startPage = 1;
    endPage = 4;
  } else if (currentPage >= totalPages - 1) {
    startPage = totalPages - 3;
    endPage = totalPages;
  } else {
    startPage = currentPage - 1;
    endPage = currentPage + 2;
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  if (endPage < totalPages) {
      pageNumbers.push("...");
  }
  return (
    <div>
       <nav className='d-flex justify-content-center algin-items-center mt-2 border-0'>
      <ul className="pagination">
        {currentPage > 1 && (
          <li className="page-item">
            <button className="page-link" onClick={() => onPageChange(currentPage - 1)}>
               <i className="fa-solid fa-angle-left"></i>
            </button>
          </li>
        )}

        {pageNumbers.map((page) => (
            <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
            {page === "..." ? (
              <button className="page-link">
                {page}
              </button>
            ) : (
              <button className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </button>
            )}
          </li>
        ))}
        {currentPage < totalPages && (
          <li className="page-item">
            <button className="page-link" onClick={() => onPageChange(currentPage + 1)}>
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </li>
        )}
      </ul>
    </nav>
    </div>
  )
}

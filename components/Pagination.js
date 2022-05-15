import React from 'react';

const Pagination = ({onChange, currentPage, pages}) => {

    if (pages < 2) return
    return (
        <div className="paging-outer">
            <div className="paging">
                <a
                    onClick={() => {
                        if(currentPage > 1) {
                            onChange(currentPage - 1)
                        }
                    }}
                    className={`prev page-numbers ${currentPage === 1 && 'disabled'}`}>Prev</a>
                {
                    Array(pages).fill(0).map((_, idx) =>
                        idx + 1 === currentPage ? <span key={idx} className="page-numbers current">{idx + 1}</span> :
                            <a key={idx} onClick={() => onChange(idx + 1)} className="page-numbers">{idx + 1}</a>

                    )
                }
                <a
                    onClick={() => {
                        if(currentPage < pages) {
                            onChange(currentPage + 1)
                        }
                    }}
                    className={`prev page-numbers ${currentPage === pages && 'disabled'}`}>Next</a>
            </div>
        </div>
    );
};

export default Pagination;
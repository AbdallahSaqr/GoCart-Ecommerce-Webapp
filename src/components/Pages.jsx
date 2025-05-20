export default function Pages({ currentPage, onPageChange, total, limit }) {
  if (!total || !limit) return null;

  const totalPages = Math.ceil(total / limit);

  const renderPageNumbers = () => {
    return (
      <li key={currentPage} className="page-item active">
        <button className="page-link" disabled>
          {currentPage}
        </button>
      </li>
    );
  };

  return (
    <nav aria-label="Page navigation" className="mt-4">
      <ul className="pagination justify-content-center">
        {/* Start button */}
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
          >
            &lt;&lt;
          </button>
        </li>

        {/* Previous button */}
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
        </li>

        {/* Only show current page */}
        {renderPageNumbers()}

        {/* Next button */}
        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </li>

        {/* End button */}
        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
          >
            &gt;&gt;
          </button>
        </li>
      </ul>
    </nav>
  );
}

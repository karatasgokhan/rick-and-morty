import { React } from "react";
import ReactPaginate from "react-paginate";
import s from "./Pagination.module.css";

function Pagination(props) {
  const changePage = ({ selected }) => {
    props.setPageNumber(selected + 1);
  };

  return (
    <>
      <div className={s.pagination}>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={props.totalPage}
          onPageChange={changePage}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
        />
      </div>
    </>
  );
}

export default Pagination;

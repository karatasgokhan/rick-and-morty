import { React } from "react";
import { Container, Row, Col } from "react-grid-system";
import ReactPaginate from "react-paginate";

function Pagination(props) {
  const changePage = ({ selected }) => {
    props.setPageNumber(selected + 1);
  };

  return (
    <>
      <Container>
        <Row>
          <Col sm={12}>
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
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Pagination;

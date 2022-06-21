import { React } from "react";
import { Container, Row, Col } from "react-grid-system";
import ReactPaginate from "react-paginate";

function Pagination(props) {
  // const usersPerPage = 10;
  // const pagesVisited = pageNumber * usersPerPage;
  // const pageCount = Math.ceil(data.length / usersPerPage);

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
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Pagination;

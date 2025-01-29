import Pagination from 'rc-pagination';
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdNavigateBefore,
  MdNavigateNext,
} from 'react-icons/md';
import PropTypes from 'prop-types';

export const PaginationBlock = ({
  items,
  size,
  current,
  setSize,
  setCurrent,
}) => {
  // table pagination and filter
  const PerPageChange = value => {
    setSize(value);
    const newPerPage = Math.ceil(items.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  };

  const PaginationChange = (page, pageSize) => {
    setCurrent(page);
    setSize(pageSize);
  };

  const PrevNextArrow = (current, type, originalElement) => {
    if (type === 'prev') {
      return (
        <button>
          <MdNavigateBefore />
        </button>
      );
    }
    if (type === 'next') {
      return (
        <button>
          <MdNavigateNext />
        </button>
      );
    }
    return originalElement;
  };

  const FirstLastArrow = type => {
    if (type === 'first') {
      PaginationChange(1, size);
    }
    if (type === 'last') {
      PaginationChange(Math.ceil(items.length / size), size);
    }
  };

  return (
    <div className="table-filter-info">
      <button
        type="button"
        aria-label="to first page"
        id="first"
        onClick={e => FirstLastArrow(e.currentTarget.id)}
      >
        <MdKeyboardDoubleArrowLeft />
      </button>
      <Pagination
        className="pagination-data"
        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total}`}
        onChange={PaginationChange}
        total={items.length}
        current={current}
        pageSize={size}
        showSizeChanger={false}
        itemRender={PrevNextArrow}
        onShowSizeChange={PerPageChange}
        style={{}}
      />
      <button
        type="button"
        aria-label="to last page"
        id="last"
        onClick={e => FirstLastArrow(e.currentTarget.id)}
      >
        <MdKeyboardDoubleArrowRight />
      </button>
    </div>
  );
};

PaginationBlock.propTypes = {
  items: PropTypes.any,
  size: PropTypes.number,
  current: PropTypes.number,
  setSize: PropTypes.func,
  setCurrent: PropTypes.func,
};

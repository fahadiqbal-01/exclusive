import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const Pagination = ({ itemsPerPage }) => {
  let productdata = useSelector((state) => state.allproduct.product);
  const items = productdata;

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
            <div className=" flex w-full sm:w-[45%] md:w-[45%] lg:w-[30%] xl:w-auto ">
              <ProductCard
                ProductDetails={item}
                id={item.id}
                productImg={item.thumbnail}
                discount={`-${Math.floor(item.discountPercentage)}%`}
                newPrice={`$${Math.floor(
                  item.price - (item.discountPercentage / 100) * item.price
                )}`}
                oldPrice={`$${item.price}`}
                productName={item.title}
                rating={item.rating}
                reviewcount={item.reviews.length}
              />
            </div>
          ))}
      </>
    );
  }

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        className="flex gap-[10px] w-full mt-[20px] "
        pageClassName="px-[25px] py-[2px] bg-black text-white "
      />
    </>
  );
};

export default Pagination;

import React from "react";
import Container from "./Container";
import Images from "./Images";
import CategoryItem from "../images/Frame 600.png";
import CategoryThirdSalesCountDown from "./CategoryThirdSalesCountDown";

const CategoryThird = () => {
  return (
    <section className=" mb-[71px] ">
      <Container>
        <div className="relative">
          <Images src={CategoryItem} className="mb-10 px-[10px] xl:px-0" />
          <div className=" absolute bottom-[165px] lg:bottom-[140px] left-[56px] hidden lg:block xl:block px-[10px]">
                <CategoryThirdSalesCountDown />
          </div>
      
        </div>
      </Container>
    </section>
  );
};

export default CategoryThird;

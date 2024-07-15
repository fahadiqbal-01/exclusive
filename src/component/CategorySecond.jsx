import React from "react";
import Container from "./Container";
import Title from "./Title";
import CategorySecondItems from "./CategorySecondItems";

const CategorySecond = () => {
  return (
    <section className="mb-[80px] xl:mb-[140px]">
      <Container>
        <div className=" flex xl:static ml-[15px] xl:ml-0">
          <Title subtitle="Categories" title="Browse By Category" />
        </div>
        <div className="mt-[25px] xl:mt-[60px] after:content-[''] after:h-[1px] after:w-full after:bg-gray-300 after:absolute after:left-0 after:bottom-[-60px] relative">
          <CategorySecondItems />
        </div>
      </Container>
    </section>
  );
};

export default CategorySecond;

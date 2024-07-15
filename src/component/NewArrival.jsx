import React from "react";
import Title from "./Title";
import Container from "./Container";
import Flex from "./Flex";
import Images from "./Images";
import NewArrival1 from "../images/NewArrival1.png";
import NewArrival2 from "../images/NewArrival2.png";
import NewArrival3 from "../images/NewArrival3.png";
import NewArrival4 from "../images/NewArrival4.png";
import { Link } from "react-router-dom";

const NewArrival = () => {
  return (
    <section className="mb-[80px] lg:mb-[100px] xl:mb-[140px]">
      <Container>
        <div className=" mb-[25px] lg:mb-[50px] xl:mb-[60px] ml-[15px] xl:ml-0 ">
            <Title subtitle="Featured" title="New Arrival" />
        </div>
        <div className="w-full px-[10px] md:px-0 lg:px-0 xl:px-0 ">
          <Flex className=" flex-col xl:flex-row justify-between items-center xl:items-start gap-5 xl:gap-0 ">
            <Link>
              <Images src={NewArrival1} alt="newArrival_image" />
            </Link>

            <Flex className=" flex-col gap-[32px] ">
              <Link>
                <Images src={NewArrival2} alt="newArrival2_image" />
              </Link>
              <Flex className="justify-between flex-row md:flex-row lg:flex-row xl:flex-row  ">
                <Link className=" w-[48%] lg:w-auto xl:w-auto ">
                  <Images src={NewArrival3} alt="newArrival3_image" />
                </Link>
                <Link className=" w-[48%] lg:w-auto xl:w-auto ">
                  <Images src={NewArrival4} alt="newArrival4_image" />
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default NewArrival;

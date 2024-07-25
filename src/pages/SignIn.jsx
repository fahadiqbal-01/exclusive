import React from "react";
import Signup_image from "../images/SignUP_Image.png";
import Flex from "../component/Flex";
import Images from "../component/Images";
import Container from "../component/Container";
import SignInInputs from "../component/SignInInputs";

const SignIn = () => {
  return (
    <section>
      <Container>
        <Flex className=" flex-col lg:flex-row xl:flex-row pt-[60px] pb-[140px] ">
          <div className=" w-full lg:w-[50%] xl:w-[63%] ">
            <Images
              src={Signup_image}
              alt="signupPage_image"
              className="mx-auto xl:mx-0"
            />
          </div>
          <div className="w-full md:w-full lg:w-[50%] xl:w-[37%] flex justify-end items-center mt-[40px] lg:mt-0 xl:mt-0 ">
            <SignInInputs className="xl:my-[125.5px] my-0 mx-auto xl:mx-0 px-[10px] sm:px-0 md:px-0 lg:px-0 xl:px-0 " />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default SignIn;

import React from "react";
import Container from "../component/Container";
import BreadCrumb from "../component/BreadCrumb";
import Flex from "../component/Flex";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <section className="pb-[140px]">
      <Container>
        <BreadCrumb />
        <Flex className="flex-col lg:flex-row gap-[30px] mt-[42px] px-2 lg:px-0">
          {/* Contact Info Sidebar */}
          <div className="w-full lg:w-[340px] p-[35px] shadow-md rounded-[4px] border-[1px] border-[#0000000d]">
            <div className="border-b-[1px] border-[#00000080] pb-[32px] mb-[32px]">
              <Flex className="items-center gap-[16px] mb-[24px]">
                <div className="w-[40px] h-[40px] bg-orange rounded-full flex items-center justify-center text-white text-[20px]">
                  <FiPhone />
                </div>
                <h3 className="text-[16px] font-medium font-poppins leading-[24px] text-black">
                  Call To Us
                </h3>
              </Flex>
              <p className="text-[14px] font-poppins font-normal leading-[21px] text-black mb-[16px]">
                We are available 24/7, 7 days a week.
              </p>
              <p className="text-[14px] font-poppins font-normal leading-[21px] text-black">
                Phone: +8801611112222
              </p>
            </div>

            <div>
              <Flex className="items-center gap-[16px] mb-[24px]">
                <div className="w-[40px] h-[40px] bg-orange rounded-full flex items-center justify-center text-white text-[20px]">
                  <AiOutlineMail />
                </div>
                <h3 className="text-[16px] font-medium font-poppins leading-[24px] text-black">
                  Write To Us
                </h3>
              </Flex>
              <p className="text-[14px] font-poppins font-normal leading-[21px] text-black mb-[16px]">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-[14px] font-poppins font-normal leading-[21px] text-black mb-[16px]">
                Emails: customer@exclusive.com
              </p>
              <p className="text-[14px] font-poppins font-normal leading-[21px] text-black">
                Emails: support@exclusive.com
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:flex-1 p-[35px] shadow-md rounded-[4px] border-[1px] border-[#0000000d]">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] mb-[32px]">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="bg-[#F5F5F5] rounded-[4px] px-[16px] py-[13px] outline-none font-poppins text-[16px]"
                />
                <input
                  type="email"
                  placeholder="Your Email *"
                  className="bg-[#F5F5F5] rounded-[4px] px-[16px] py-[13px] outline-none font-poppins text-[16px]"
                />
                <input
                  type="text"
                  placeholder="Your Phone *"
                  className="bg-[#F5F5F5] rounded-[4px] px-[16px] py-[13px] outline-none font-poppins text-[16px]"
                />
              </div>
              <textarea
                placeholder="Your Message"
                className="w-full h-[207px] bg-[#F5F5F5] rounded-[4px] px-[16px] py-[13px] outline-none font-poppins text-[16px] mb-[32px] resize-none"
              ></textarea>
              <div className="flex justify-end">
                <button className="bg-orange text-white px-[48px] py-[16px] rounded-[4px] font-poppins font-medium leading-[24px]">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Contact;

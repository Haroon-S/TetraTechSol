import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import Container from "./container";

export default function ServiceCards() {
  return (
    <Container className="flex flex-wrap mb-20 lg:gap-20 lg:flex-nowrap justify-center items-center">
      <div className=" group transition-all duration-200 ease-in hover:-translate-y-2 hover:ring-[3px] ring-[#FF4BCE] bg-white shadow-xl rounded-3xl w-[300px] p-10 text-black text-center flex flex-col justify-center items-center">
      {/* <div className=" group transition-all duration-300 ease-in-out hover:-translate-y-2 hover:bg-gradient-to-br from-[#FF4BCE] to-[#860EFF] bg-white shadow-xl rounded-3xl w-[300px] p-10 text-black text-center flex flex-col justify-center items-center"> */}
        <div className=" relative flex justify-center items-center h-32 w-32">
          <img
            src="/img/services-shape.svg"
            className=" group-hover:rotate-45 h-full w-full transition-all duration-500 ease-in-out"
            alt=""
          />
          <img
            src="/img/services-shape-1.svg"
            className=" absolute top-[15%]"
            alt=""
          />
          <div className=" absolute text-white font-bold">
            <LiaShippingFastSolid size={30}/>
          </div>
        </div>
        <h2 className=" text-xl font-bold my-6">Lorem Ipsum</h2>
        <p>LoremAliquip eiusmod aute et aliquip minim eiusmod occaecat in.</p>
      </div>
      <div className=" group transition-all duration-200 ease-in hover:-translate-y-2 hover:ring-[3px] ring-[#FF4BCE] bg-white shadow-xl rounded-3xl w-[300px] p-10 text-black text-center flex flex-col justify-center items-center">
      {/* <div className=" group transition-all duration-300 ease-in-out hover:-translate-y-2 hover:bg-gradient-to-br from-[#FF4BCE] to-[#860EFF] bg-white shadow-xl rounded-3xl w-[300px] p-10 text-black text-center flex flex-col justify-center items-center"> */}
        <div className=" relative flex justify-center items-center h-32 w-32">
          <img
            src="/img/services-shape.svg"
            className=" group-hover:rotate-45 h-full w-full transition-all duration-500 ease-in-out"
            alt=""
          />
          <img
            src="/img/services-shape-1.svg"
            className=" absolute top-[15%]"
            alt=""
          />
          <div className=" absolute text-white font-bold">
            <LiaShippingFastSolid size={30}/>
          </div>
        </div>
        <h2 className=" text-xl font-bold my-6">Lorem Ipsum</h2>
        <p>LoremAliquip eiusmod aute et aliquip minim eiusmod occaecat in.</p>
      </div>
      <div className=" group transition-all duration-200 ease-in hover:-translate-y-2 hover:ring-[3px] ring-[#FF4BCE] bg-white shadow-xl rounded-3xl w-[300px] p-10 text-black text-center flex flex-col justify-center items-center">
      {/* <div className=" group transition-all duration-300 ease-in-out hover:-translate-y-2 hover:bg-gradient-to-br from-[#FF4BCE] to-[#860EFF] bg-white shadow-xl rounded-3xl w-[300px] p-10 text-black text-center flex flex-col justify-center items-center"> */}
        <div className=" relative flex justify-center items-center h-32 w-32">
          <img
            src="/img/services-shape.svg"
            className=" group-hover:rotate-45 h-full w-full transition-all duration-500 ease-in-out"
            alt=""
          />
          <img
            src="/img/services-shape-1.svg"
            className=" absolute top-[15%]"
            alt=""
          />
          <div className=" absolute text-white font-bold">
            <LiaShippingFastSolid size={30}/>
          </div>
        </div>
        <h2 className=" text-xl font-bold my-6">Lorem Ipsum</h2>
        <p>LoremAliquip eiusmod aute et aliquip minim eiusmod occaecat in.</p>
      </div>
    </Container>
  );
}

"use client";

import React from "react";
import styled from "styled-components";
import { TbBrandDatabricks } from "react-icons/tb";
import Image from "next/image";
import SignContract from "@/app/assets/images/contract.jpg";

export const Nav = styled.nav`
    background-color: #f0f8ff
    height: 80px
    width: 100%
`;

export const Header = styled.h1`
  color: '#888'
  font-size: '20px'
  font-weight: '900'
`;

export default function Landing() {
  return (
    <div className="">
      <nav className="bg-[#f0f8ff] flex items-center justify-between h-20 px-[120px]">
        <div className="flex flex-col items-center">
          <TbBrandDatabricks className="cursor-pointer text-5xl text-slate-400" />
          <p className="font-semibold my-[-8px] text-[#454b53] text-xl">
            scoopi
          </p>
        </div>
        <div className="flex gap-20 items-center">
          <a
            className="cursor-pointer font-semibold text-[#454b53] text-xl"
            href="http://"
          >
            Home
          </a>
          <a
            className="cursor-pointer font-semibold text-[#454b53] text-xl"
            href="http://"
          >
            Blog
          </a>
          <a
            className="cursor-pointer font-semibold text-[#454b53] text-xl"
            href="http://"
          >
            Pricing
          </a>
          <a
            className="cursor-pointer font-semibold text-[#454b53] text-xl"
            href="http://"
          >
            Contact
          </a>
        </div>
        <button className="bg-blue-400 font-semibold h-[40px] rounded-3xl text-[#fff] text-[18px] w-[140px]">
          Get started
        </button>
      </nav>
      <div className="flex gap-20 items-center justify-center">
        <div className="flex flex-col gap-10 w-[30%]">
          <h1 className="font-bold text-[#11142d] text-[40px] w-full">
            We resolve your difficulties in drafting administrative documents
          </h1>
          <h3 className="font-semibold text-[#454b53] text-[18px] w-full">
            Write your request for explanation, cover, warning, firing letters,
            breach of contract, resume, CV, and any other document in the
            professional milieu using templates from the app
          </h3>
          <button className="bg-blue-400 font-semibold h-[40px] items-center rounded-3xl text-[#fff] text-[18px] w-[140px]">
            Contact us
          </button>
        </div>
        <Image
          src={SignContract}
          className="h-[580px] w-[600px]"
          alt="contract"
        />
      </div>
      <div className="flex flex-col items-center py-5 text-center w-full">
        <h1 className="font-bold text-[#11142d] text-[40px]">Our Features</h1>
        <h3 className="font-semibold text-[#454b53] text-[18px] w-1/3">
          These are the most simplest features concerning this app with clear
          explanations of how it works.
        </h3>
      </div>
    </div>
  );
}

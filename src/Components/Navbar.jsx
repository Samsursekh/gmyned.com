"use client";

import React, { useState } from "react";
import "./Navbar.css";
import logo from "@/Images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";
import { BiMenuAltRight } from "react-icons/bi";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href={"/"} className="flex items-center">
          <Image
            src={logo}
            className="max-w-full"
            alt="gMynd Logo"
            width={100}
            height={100}
            style={{ height: "auto", width: "auto" }}
            priority
          />
        </Link>

        <div className="flex items-center lg:order-2">
          <Link
            href="/contact"
            className=" in-small-screen-tobe-hide lg:inline-block  bg-[#CCF381] 
            font-[800] rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0
            focus:outline-none text-[#4831d4] w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
          >
            BOOK A FREE CONSULTATION
          </Link>
        </div>

        <div className="menus-in-large-screen">
          <ul className="nav-links">
            <li>
              <Link
                href={"/"}
                onClick={closeMobileMenu}
                className={`block py-2 pl-3 pr-4 text-center text-gray-300 rounded lg:bg-transparent  lg:p-0 ${
                  pathname === "/"
                    ? "border-b-2 rounded-none bg-[#4831D4] text-white font-semibold transition-all ease-in-out delay-500"
                    : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <h3 className="block py-2 pl-3 pr-4 text-gray-300 rounded lg:bg-transparent  lg:p-0 text-center m-auto">
                <FlyoutLink
                  href="#"
                  FlyoutContent={() => (
                    <ServicePageContent closeMobileMenu={closeMobileMenu} />
                  )}
                >
                  <div className="flex items-center justify-between m-auto">
                    Services
                    <IoIosArrowDown />
                  </div>
                </FlyoutLink>
              </h3>
            </li>
            <li>
              <Link
                href={"/portfolio"}
                onClick={closeMobileMenu}
                className={`block py-2 pl-3 pr-4 text-center text-gray-300 rounded lg:bg-transparent  lg:p-0 ${
                  pathname === "/portfolio"
                    ? "border-b-2 rounded-none bg-[#4831D4] text-white font-semibold transition-all ease-in-out delay-500"
                    : ""
                }`}
              >
                Portfolio
              </Link>
            </li>

            <li>
              <Link
                href={"/about"}
                onClick={closeMobileMenu}
                className={`block py-2 pl-3 pr-4 text-center text-gray-300 rounded lg:bg-transparent  lg:p-0 ${
                  pathname === "/about"
                    ? "border-b-2 rounded-none bg-[#4831D4] text-white font-semibold transition-all ease-in-out delay-500"
                    : ""
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={"/contact"}
                onClick={closeMobileMenu}
                className={`block py-2 pl-3 pr-4 text-center text-gray-300 rounded lg:bg-transparent  lg:p-0 ${
                  pathname === "/contact"
                    ? "border-b-2 rounded-none bg-[#4831D4] text-white font-semibold transition-all ease-in-out delay-500"
                    : ""
                }`}
              >
                Contact
              </Link>
            </li>
            <li className="mt-3 mb-1 text-center">
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="text-gray-900 py-2 pl-3 pr-4 items-center lg:hidden bg-[#CCF381] font-[800]
                 rounded-lg text-sm px-4 lg:px-5 lg:py-2.5 sm:mr-2 lg:mr-0
                   focus:outline-none
                  "
              >
                BOOK A FREE CONSULTANCY
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-toggle">
          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <BiMenuAltRight size={30} />
            ) : (
              <RiMenu3Line size={30} />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="mobile-links items-center justify-between w-full top-14 lg:top-0 right-0 lg:flex lg:w-auto 
        lg:order-1 shadow-md  bg-black/75 md:bg-black/75 border-b-2 border-b-gray-700  lg:border-b-0 lg:bg-[#4831D4] lg:shadow-none absolute
         lg:relative p-4">
          <ul className="nav-links">
            <li>
              <Link
                href={"/"}
                onClick={closeMobileMenu}
                className={`block py-2 pl-3 pr-4 text-center text-gray-300 rounded lg:bg-transparent  lg:p-0 ${
                  pathname === "/"
                    ? "border-b-2 rounded-none bg-[#4831D4] text-white font-semibold transition-all ease-in-out delay-500"
                    : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <h3 className="block py-2 pl-3 pr-4 text-gray-300 rounded lg:bg-transparent  lg:p-0 text-center m-auto">
                <FlyoutLink
                  href="#"
                  FlyoutContent={() => (
                    <ServicePageContent closeMobileMenu={closeMobileMenu} />
                  )}
                >
                  <div className="flex items-center justify-between m-auto">
                    Services
                    <IoIosArrowDown />
                  </div>
                </FlyoutLink>
              </h3>
            </li>
            <li>
              <Link
                href={"/portfolio"}
                onClick={closeMobileMenu}
                className={`block py-2 pl-3 pr-4 text-center text-gray-300 rounded lg:bg-transparent  lg:p-0 ${
                  pathname === "/portfolio"
                    ? "border-b-2 rounded-none bg-[#4831D4] text-white font-semibold transition-all ease-in-out delay-500"
                    : ""
                }`}
              >
                Portfolio
              </Link>
            </li>

            <li>
              <Link
                href={"/about"}
                onClick={closeMobileMenu}
                className={`block py-2 pl-3 pr-4 text-center text-gray-300 rounded lg:bg-transparent  lg:p-0 ${
                  pathname === "/about"
                    ? "border-b-2 rounded-none bg-[#4831D4] text-white font-semibold transition-all ease-in-out delay-500"
                    : ""
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={"/contact"}
                onClick={closeMobileMenu}
                className={`block py-2 pl-3 pr-4 text-center text-gray-300 rounded lg:bg-transparent  lg:p-0 ${
                  pathname === "/contact"
                    ? "border-b-2 rounded-none bg-[#4831D4] text-white font-semibold transition-all ease-in-out delay-500"
                    : ""
                }`}
              >
                Contact
              </Link>
            </li>
            <li className="mt-3 mb-1 text-center">
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className=" bg-[#CCF381] font-[800] rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0
                focus:outline-none text-[#4831d4] w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
              >
                BOOK A FREE CONSULTANCY
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  // const [open, setOpen] = useState(false);

  // const showFlyout = FlyoutContent !== undefined && open;
  // const handleClick = () => {
  //   setOpen(false);
  // };

  /*
    const [showFlyout, setShowFlyout] = useState(false);

  const handleClick = () => {
    console.log("Clicked")
    setShowFlyout((prevState) => !prevState);
  };

  return (
    <div
      onMouseEnter={() => setShowFlyout(true)}
      onMouseLeave={() => setShowFlyout(false)}
      className="relative w-fit h-fit m-auto"
    >

    NEED TO CHECK WHAT IS THE ISSUSE HERE IN THESE CODE

  */

  const [showFlyout, setShowFlyout] = useState(false);

  const handleClick = () => {
    setShowFlyout(!showFlyout);
  };

  return (
    <div
      onMouseEnter={() => setShowFlyout(true)}
      onMouseLeave={() => setShowFlyout(false)}
      className="relative w-fit h-fit m-auto z-[99]"
    >
      {/* return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit m-auto border-2"
    > */}
      <Link href={href} className="relative">
        {/* <Link href={href} className="relative" onClick={handleClick}> */}
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-10 right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </Link>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ServicePageContent = ({ closeMobileMenu }) => {
  return (
    <div className="w-[300px] bg-white p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold">For Software Development</h3>
        <Link
          href="/web-development"
          onClick={closeMobileMenu}
          className="block text-sm hover:underline"
        >
          Web development
        </Link>
        <Link
          href="/graphics-designing"
          onClick={closeMobileMenu}
          className="block text-sm hover:underline"
        >
          Graphics Designing
        </Link>
        <Link
          href="/ecommerce-development"
          onClick={closeMobileMenu}
          className="block text-sm hover:underline"
        >
          Ecommerce App
        </Link>
      </div>
      <div className="mb-6 space-y-3">
        <h3 className="font-semibold">Marketing</h3>
        <Link
          href="/digital-marketing"
          onClick={closeMobileMenu}
          className="block text-sm hover:underline"
        >
          Digital Marketing
        </Link>
        <Link
          href="/branding"
          onClick={closeMobileMenu}
          className="block text-sm hover:underline"
        >
          Branding
        </Link>
        <Link
          href="/seo"
          onClick={closeMobileMenu}
          className="block text-sm hover:underline"
        >
          SEO
        </Link>
      </div>
      <button className="w-full rounded-lg text-[#4831d4] border-2 border-[#4831d4] px-4 py-2 font-semibold transition-colors hover:bg-[#4831d4] hover:text-white">
        <Link href="/contact" onClick={closeMobileMenu}>
          Let's Talk
        </Link>
      </button>
    </div>
  );
};

export default Navbar;

import {
  faBars,
  faImage,
  faLink,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "./com/Button";

function Item({ icon, text, link, isMenuOpen }) {
  return (
    <Link
      className="w-full flex items-center py-2 cursor-pointer duration-300 hover:bg-gray-200 px-2"
      to={link}
    >
      <FontAwesomeIcon icon={icon} />
      <p className={`ml-2 ${isMenuOpen ? "" : "min-[501px]:hidden"}`}>{text}</p>
    </Link>
  );
}
function Aside() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <aside
      className={`max-[700px]:hidden duration-500 overflow-hidden  ${
        isMenuOpen ? "w-1/5 px-3 " : "w-10 px-1"
      }`}
    >
      <Button
        icon={<FontAwesomeIcon icon={faBars} />}
        variant="icon"
        onClick={() => {
          setIsMenuOpen((curr) => !curr);
        }}
        className={"w-max cursor-pointer hover:bg-gray-500 ml-auto mb-3"}
      />
      <Item
        icon={faUser}
        text={"user information"}
        isMenuOpen={isMenuOpen}
        link={""}
      />

      <Item
        icon={faLock}
        text={"password"}
        isMenuOpen={isMenuOpen}
        link={"password"}
      />

      <Item
        icon={faLink}
        text={"account accordation"}
        isMenuOpen={isMenuOpen}
        link={"accordation"}
      />

      <Item
        icon={faImage}
        text={"picture"}
        isMenuOpen={isMenuOpen}
        link={"picture"}
      />
    </aside>
  );
}
function MobileAside() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Button
        icon={<FontAwesomeIcon icon={faBars} />}
        variant="icon"
        onClick={() => {
          setIsMenuOpen((curr) => !curr);
        }}
        className={`w-max cursor-pointer hover:bg-gray-500 ml-auto mb-3 hidden max-[700px]:block absolute right-3 top-1`}
      />
      <aside
        className={`duration-500 px-3 overflow-hidden hidden max-[700px]:block ${
          isMenuOpen ? "h-[210px]" : "h-0 relative"
        }`}
      >
        <Item
          icon={faUser}
          text={"user information"}
          isMenuOpen={isMenuOpen}
          link={""}
        />

        <Item
          icon={faLock}
          text={"password"}
          isMenuOpen={isMenuOpen}
          link={"password"}
        />

        <Item
          icon={faLink}
          text={"account accordation"}
          isMenuOpen={isMenuOpen}
          link={"accordation"}
        />

        <Item
          icon={faImage}
          text={"picture"}
          isMenuOpen={isMenuOpen}
          link={"picture"}
        />
      </aside>
    </>
  );
}
export default function Edit() {
  return (
    <div className="flex max-[700px]:flex-col w-full min-h-max h-full py-4 relative">
      <MobileAside />
      <Aside />
      <section className="grow bg-amber-300">
        <Outlet />
      </section>
    </div>
  );
}

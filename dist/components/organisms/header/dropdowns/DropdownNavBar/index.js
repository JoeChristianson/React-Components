"use client";
import DropdownNavBar1 from "../../../../molecules/nav/dropdowns/DropdownNavBar1";
import styles from "./index.module.scss";
import React, { useEffect, useRef } from "react";
import DropdownHamburger1 from "../../../../../components/atoms/buttons/hamburgers/DropdownHamburger1";
var d = {
    src: "http://northernlightsfilms.com/wp-content/uploads/2016/12/logo4.png",
    dropdownNav: { items: [
            { name: "Home", href: "/" },
            { name: "About Us", href: "/about-us" },
            { name: "Our Films", subItemGroups: [
                    { subItems: [
                            { name: "To The Stars (2019)", href: "/films/to-the-stars" },
                            { name: "The Hero (2017)", href: "/films/the-hero" },
                            { name: "Kicks (2016)", href: "/films/kicks" },
                            { name: "I'll See You in My Dreams (2015)", href: "/films/ill-see-you-in-my-dreams" },
                            { name: "It Follows (2014)", href: "/films/it-follows" },
                            { name: "The Brass Teapot (2012)", href: "/films/the-brass-teapot" },
                            { name: "The High Road", href: "/films/the-high-road" }
                        ] }
                ]
            },
            { name: "Awards & Accolades", href: "/awards-and-accolades" },
            { name: "Contact", href: "/#contact" }
        ]
    }
};
var DropdownHeader1 = function (_a) {
    var className = _a.className, src = _a.src, dropdownNav = _a.dropdownNav;
    var ref = useRef(null);
    var fullClassName = styles.header + " " + className || "";
    useEffect(function () {
        if (ref.current) {
            window.addEventListener('scroll', function () {
                var header = ref.current;
                if (header) {
                    header.classList.toggle(styles.scrolled, window.scrollY > 50);
                }
            });
        }
    }, [ref.current]);
    return React.createElement("header", { ref: ref, className: fullClassName },
        React.createElement("div", { className: styles.centerer },
            React.createElement("div", { className: styles.left },
                React.createElement("a", { href: "/" },
                    React.createElement("img", { src: src || d.src }))),
            React.createElement(DropdownHamburger1, { navItems: dropdownNav || d.dropdownNav }),
            React.createElement(DropdownNavBar1, { dropdownNav: dropdownNav || d.dropdownNav })));
};
export default DropdownHeader1;

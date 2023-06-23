(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6179:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar": "Navbar_navbar__wU2Rq",
	"navbarBrand": "Navbar_navbarBrand__kzePN",
	"navbarItem": "Navbar_navbarItem__Z7pSq",
	"navbarBurger": "Navbar_navbarBurger__tOwNM",
	"navbarMenu": "Navbar_navbarMenu__Wqzhv",
	"isActive": "Navbar_isActive__V1odY",
	"navbarEnd": "Navbar_navbarEnd__TvJmi"
};


/***/ }),

/***/ 9544:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "layout_container__fbLkO",
	"header": "layout_header__kY0Lt",
	"backToHome": "layout_backToHome__9sjx_"
};


/***/ }),

/***/ 7530:
/***/ ((module) => {

// Exports
module.exports = {
	"heading2Xl": "utils_heading2Xl___9fFP",
	"headingXl": "utils_headingXl__u25Y2",
	"headingLg": "utils_headingLg__5535D",
	"headingMd": "utils_headingMd__gD1Ok",
	"borderCircle": "utils_borderCircle__s2nTm",
	"colorInherit": "utils_colorInherit__mSH_x",
	"padding1px": "utils_padding1px__PWQKR",
	"list": "utils_list__4Mu4l",
	"listItem": "utils_listItem__s2m6i",
	"lightText": "utils_lightText__eUzGY",
	"hushtag": "utils_hushtag__n6D3E"
};


/***/ }),

/***/ 4320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2F_absolutePagePath_private_next_pages_2Findex_js_preferredRegion_middlewareConfig_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderpage_2F_absolutePagePath_private_next_pages_2Findex_js_preferredRegion_middlewareConfig_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/index.js
var pages_namespaceObject = {};
__webpack_require__.r(pages_namespaceObject);
__webpack_require__.d(pages_namespaceObject, {
  "default": () => (Home),
  getStaticProps: () => (getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/layout.module.css
var layout_module = __webpack_require__(9544);
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);
// EXTERNAL MODULE: ./styles/utils.module.css
var utils_module = __webpack_require__(7530);
var utils_module_default = /*#__PURE__*/__webpack_require__.n(utils_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Navbar.module.css
var Navbar_module = __webpack_require__(6179);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);
;// CONCATENATED MODULE: ./components/navbar.js



function Navbar() {
    const [isActive, setActive] = (0,external_react_.useState)(false);
    const handleToggle = ()=>{
        setActive(!isActive);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
        className: (Navbar_module_default()).navbar,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (Navbar_module_default()).navbarBrand,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                        href: "/",
                        className: (Navbar_module_default()).navbarItem,
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: "/logo.png",
                            alt: "Logo"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                        role: "button",
                        className: `${(Navbar_module_default()).navbarBurger} ${isActive ? (Navbar_module_default()).isActive : ""}`,
                        "aria-label": "menu",
                        "aria-expanded": "false",
                        onClick: handleToggle,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                "aria-hidden": "true"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                "aria-hidden": "true"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                "aria-hidden": "true"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: `${(Navbar_module_default()).navbarMenu} ${isActive ? (Navbar_module_default()).isActive : ""}`,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (Navbar_module_default()).navbarEnd,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                            href: "#projects",
                            className: (Navbar_module_default()).navbarItem,
                            children: "Projects"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                            href: "#profile",
                            className: (Navbar_module_default()).navbarItem,
                            children: "Profile"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                            href: "#contact",
                            className: (Navbar_module_default()).navbarItem,
                            children: "Contact"
                        })
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/layout.js







const layout_name = "Kazu";
const siteTitle = "Kazu portfolio";
function Layout({ children, home }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (layout_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: "Kazu's portfolio"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "og:title",
                        content: siteTitle
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Navbar, {}),
            /*#__PURE__*/ jsx_runtime.jsx("header", {
                className: (layout_module_default()).header,
                children: home ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            priority: true,
                            src: "/images/profile.jpg",
                            className: (utils_module_default()).borderCircle,
                            height: 144,
                            width: 144,
                            alt: ""
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {})
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                priority: true,
                                src: "/images/profile.jpg",
                                className: (utils_module_default()).borderCircle,
                                height: 108,
                                width: 108,
                                alt: ""
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                            className: (utils_module_default()).headingLg,
                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/",
                                className: (utils_module_default()).colorInherit,
                                children: layout_name
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("main", {
                children: children
            }),
            !home && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (layout_module_default()).backToHome,
                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                    href: "/",
                    children: "← Back to home"
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/form.js

function Form() {
    const registerUser = async (event)=>{
        event.preventDefault();
        const res = await fetch("/api/send", {
            body: JSON.stringify({
                email: event.target.email.value,
                message: event.target.message.value
            }),
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
        });
        const result = await res.json();
    };
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "container mt-5",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
            onSubmit: registerUser,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "mb-3",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                            htmlFor: "email",
                            children: "email address"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                            id: "email",
                            name: "email",
                            type: "email",
                            className: "form-control",
                            placeholder: "name@example.com"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "mb-3",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                            htmlFor: "message",
                            className: "form-label"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                            id: "message",
                            name: "message",
                            className: "form-control",
                            rows: "3",
                            children: "Text"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "mb-3",
                    children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                        type: "submit",
                        className: "btn btn-primary",
                        children: "Submit"
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: external "gray-matter"
const external_gray_matter_namespaceObject = require("gray-matter");
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_namespaceObject);
;// CONCATENATED MODULE: ./lib/projects.js



const projectsDirectory = external_path_default().join(process.cwd(), "projects");
function getSortedProjectsData() {
    // Get file names under /projects
    const fileNames = external_fs_default().readdirSync(projectsDirectory);
    const allProjectsData = fileNames.map((fileName)=>{
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "");
        // Read markdown file as string
        const fullPath = external_path_default().join(projectsDirectory, fileName);
        const fileContents = external_fs_default().readFileSync(fullPath, "utf8");
        // Use gray-matter to parse the post metadata section
        const matterResult = external_gray_matter_default()(fileContents);
        const contentHtml = matterResult.content.toString();
        // Combine the data with the id
        return {
            id,
            contentHtml,
            ...matterResult.data
        };
    });
    // Sort posts by date
    return allProjectsData.sort((a, b)=>{
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

;// CONCATENATED MODULE: ./pages/index.js






async function getStaticProps() {
    const allProjectsData = getSortedProjectsData();
    return {
        props: {
            allProjectsData
        }
    };
}
function Home({ allProjectsData }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Layout, {
        home: true,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime.jsx("title", {
                    children: siteTitle
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: (utils_module_default()).headingMd,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                    children: [
                        "Welcome to Kazu's portfolio website! I am junior software developer and happy to engage with you! - Please check more about me from here. (",
                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                            href: "https://github.com/ZawaPaP",
                            children: "Github "
                        }),
                        "/",
                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                            href: "https://www.linkedin.com/in/kazuhide-izawa-issac/",
                            children: " Linkedin"
                        }),
                        ")"
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                id: "projects",
                className: `${(utils_module_default()).headingMd} ${(utils_module_default()).padding1px}`,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        className: (utils_module_default()).headingLg,
                        children: "Projects"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("ul", {
                        className: (utils_module_default()).list,
                        children: allProjectsData.map(({ id, date, title, link, skills, contentHtml })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                className: (utils_module_default()).listItem,
                                children: [
                                    title,
                                    " \xa0 (",
                                    date,
                                    ")",
                                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                        className: (utils_module_default()).lightText,
                                        children: [
                                            contentHtml,
                                            "(",
                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: link,
                                                children: "Link"
                                            }),
                                            ")",
                                            /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: (utils_module_default()).hushtag,
                                                children: skills
                                            })
                                        ]
                                    })
                                ]
                            }, id))
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                id: "profile",
                className: `${(utils_module_default()).headingMd} ${(utils_module_default()).padding1px}`,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        className: (utils_module_default()).headingLg,
                        children: "Profile"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: (utils_module_default()).lightText,
                        children: "With over 8 years of experience in the tech industry as account manager, I've decided to change my career to engineer. I have self-taught ComputerScience, DataStructure, Algorithm and python with Cousera, created few simple applications and holding a Bachelor's degree in environmental engineer in Hokkaido University. I'm passionate about creating efficient, scalable web applications. Also, I'm always eager to take on new challenges and learn new technologies."
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: (utils_module_default()).lightText,
                        children: "Please feel free to browse my projects and contact me. I'm always open to collaboration and new ideas."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                id: "contact",
                className: `${(utils_module_default()).headingMd} ${(utils_module_default()).padding1px}`,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        className: (utils_module_default()).headingLg,
                        children: "Contacts"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(Form, {})
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2F&absolutePagePath=private-next-pages%2Findex.js&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2F_absolutePagePath_private_next_pages_2Findex_js_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(pages_namespaceObject, "default"));

        // Re-export methods.
        const next_route_loaderpage_2F_absolutePagePath_private_next_pages_2Findex_js_preferredRegion_middlewareConfig_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(pages_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(pages_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/index","pathname":"/","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: pages_namespaceObject })
        
        
    

/***/ }),

/***/ 3076:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,812,61], () => (__webpack_exec__(4320)));
module.exports = __webpack_exports__;

})();
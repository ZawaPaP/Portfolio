"use strict";
(() => {
var exports = {};
exports.id = 7;
exports.ids = [7];
exports.modules = {

/***/ 2139:
/***/ ((module) => {

module.exports = require("@sendgrid/mail");

/***/ }),

/***/ 5148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
function handler(req, res) {
    if (req.method === "POST") {
        const sgMail = __webpack_require__(2139);
        sgMail.setApiKey(process.env.SENDGRID_API_KEY); //SendGridのAPIキー
        const msg = {
            to: req.body.email,
            from: "kazuhideizawa@gmail.com",
            subject: "Thank you for your message",
            text: "I received the email. Back you soon!" + req.body.message,
            html: "I received the email. Back you soon!" + req.body.message
        };
        (async ()=>{
            try {
                await sgMail.send(msg);
            } catch (error) {
                console.error(error);
                if (error.response) {
                    console.error(error.response.body);
                }
            }
        })();
    }
    res.status(200);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5148));
module.exports = __webpack_exports__;

})();
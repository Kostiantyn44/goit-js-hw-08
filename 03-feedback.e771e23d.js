function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,m=Math.min,v=function(){return l.Date.now()};function p(e,t,n){var r,o,i,f,a,u,c=0,l=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,f=e.apply(i,n)}function j(e){return c=e,a=setTimeout(h,t),l?y(e):f}function S(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-c>=i}function h(){var e=v();if(S(e))return w(e);a=setTimeout(h,function(e){var n=t-(e-u);return d?m(n,i-(e-c)):n}(e))}function w(e){return a=void 0,p&&r?y(e):(r=o=void 0,f)}function O(){var e=v(),n=S(e);if(r=arguments,o=this,u=e,n){if(void 0===a)return j(u);if(d)return a=setTimeout(h,t),y(u)}return void 0===a&&(a=setTimeout(h,t)),f}return t=b(t)||0,g(n)&&(l=!!n.leading,i=(d="maxWait"in n)?s(b(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=u=o=a=void 0},O.flush=function(){return void 0===a?f:w(v())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||f.test(e)?a(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form"),j=document.querySelector(".feedback-form input"),S=document.querySelector(".feedback-form textarea");let h={};function w(){return h=JSON.parse(localStorage.getItem("feedback-form-state")),h||{}}y.addEventListener("input",e(t)((function(e){h=w(),h[e.target.name]=e.target.value,t="feedback-form-state",n=h,localStorage.setItem(t,JSON.stringify(n));var t,n}),500)),y.addEventListener("submit",(function(e){e.preventDefault(),h=w(),console.log(h),localStorage.removeItem("feedback-form-state"),e.target.reset()})),h=w(),function(e){const{email:t,message:n}=e;t&&(j.value=t),n&&(S.value=n)}(h);
//# sourceMappingURL=03-feedback.e771e23d.js.map
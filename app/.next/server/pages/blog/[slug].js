"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/blog/[slug]";
exports.ids = ["pages/blog/[slug]"];
exports.modules = {

/***/ "./graphql/queries.js":
/*!****************************!*\
  !*** ./graphql/queries.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GET_ALL_BLOG_POSTS\": () => (/* binding */ GET_ALL_BLOG_POSTS),\n/* harmony export */   \"GET_ALL_BLOG_POSTS_AND_RECIPES\": () => (/* binding */ GET_ALL_BLOG_POSTS_AND_RECIPES),\n/* harmony export */   \"GET_ALL_BLOG_POST_SLUGS\": () => (/* binding */ GET_ALL_BLOG_POST_SLUGS),\n/* harmony export */   \"GET_ALL_RECIPES\": () => (/* binding */ GET_ALL_RECIPES),\n/* harmony export */   \"GET_ALL_RECIPE_SLUGS\": () => (/* binding */ GET_ALL_RECIPE_SLUGS),\n/* harmony export */   \"GET_INDIVIDUAL_POST\": () => (/* binding */ GET_INDIVIDUAL_POST),\n/* harmony export */   \"GET_INDIVIDUAL_RECIPE\": () => (/* binding */ GET_INDIVIDUAL_RECIPE)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GET_ALL_BLOG_POST_SLUGS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\nquery {\n    blogPosts {\n      data {\n        attributes {\n          urlSlug\n        }\n      }\n    }\n  }\n`;\nconst GET_ALL_BLOG_POSTS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\nquery {\n    blogPosts {\n      data {\n        attributes {\n          title\n          description\n          urlSlug\n        }\n      }\n    }\n  }\n`;\nconst GET_INDIVIDUAL_POST = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\nquery ($slugUrl: String!) {\n    blogPosts(filters: { urlSlug: { eq: $slugUrl } }) {\n      data {\n        attributes {\n          title\n          content\n        }\n      }\n    }\n  }\n`;\nconst GET_ALL_RECIPE_SLUGS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\nquery {\n    recipes {\n      data {\n        attributes {\n          urlSlug\n        }\n      }\n    }\n  }\n`;\nconst GET_ALL_RECIPES = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\nquery {\n    recipes {\n      data {\n        attributes {\n          title\n          description\n          urlSlug\n        }\n      }\n    }\n  }\n`;\nconst GET_INDIVIDUAL_RECIPE = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\nquery ($slugUrl: String!) {\n    recipes(filters: { urlSlug: { eq: $slugUrl } }) {\n      data {\n        attributes {\n          title\n          content\n        }\n      }\n    }\n  }\n`;\nconst GET_ALL_BLOG_POSTS_AND_RECIPES = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\nquery {\n  recipes {\n    data {\n      attributes {\n        title\n        description\n        urlSlug\n        content\n      }\n    }\n  },\n  blogPosts {\n      data {\n        attributes {\n          title\n          description\n          urlSlug\n        }\n      }\n    }\n}\n`;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ncmFwaHFsL3F1ZXJpZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXFDO0FBRXJDLE1BQU1DLHVCQUF1QixHQUFHRCwrQ0FBRyxDQUFDOzs7Ozs7Ozs7O0FBVXBDLENBQUM7QUFFRCxNQUFNRSxrQkFBa0IsR0FBR0YsK0NBQUcsQ0FBQzs7Ozs7Ozs7Ozs7O0FBWS9CLENBQUM7QUFFRCxNQUFNRyxtQkFBbUIsR0FBR0gsK0NBQUcsQ0FBQzs7Ozs7Ozs7Ozs7QUFXaEMsQ0FBQztBQUVELE1BQU1JLG9CQUFvQixHQUFHSiwrQ0FBRyxDQUFDOzs7Ozs7Ozs7O0FBVWpDLENBQUM7QUFFRCxNQUFNSyxlQUFlLEdBQUdMLCtDQUFHLENBQUM7Ozs7Ozs7Ozs7OztBQVk1QixDQUFDO0FBRUQsTUFBTU0scUJBQXFCLEdBQUdOLCtDQUFHLENBQUM7Ozs7Ozs7Ozs7O0FBV2xDLENBQUM7QUFFRCxNQUFPTyw4QkFBOEIsR0FBR1AsK0NBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCNUMsQ0FBQztBQVVDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2Vic2l0ZS8uL2dyYXBocWwvcXVlcmllcy5qcz82MmFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcblxuY29uc3QgR0VUX0FMTF9CTE9HX1BPU1RfU0xVR1MgPSBncWxgXG5xdWVyeSB7XG4gICAgYmxvZ1Bvc3RzIHtcbiAgICAgIGRhdGEge1xuICAgICAgICBhdHRyaWJ1dGVzIHtcbiAgICAgICAgICB1cmxTbHVnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IEdFVF9BTExfQkxPR19QT1NUUyA9IGdxbGBcbnF1ZXJ5IHtcbiAgICBibG9nUG9zdHMge1xuICAgICAgZGF0YSB7XG4gICAgICAgIGF0dHJpYnV0ZXMge1xuICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICB1cmxTbHVnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IEdFVF9JTkRJVklEVUFMX1BPU1QgPSBncWxgXG5xdWVyeSAoJHNsdWdVcmw6IFN0cmluZyEpIHtcbiAgICBibG9nUG9zdHMoZmlsdGVyczogeyB1cmxTbHVnOiB7IGVxOiAkc2x1Z1VybCB9IH0pIHtcbiAgICAgIGRhdGEge1xuICAgICAgICBhdHRyaWJ1dGVzIHtcbiAgICAgICAgICB0aXRsZVxuICAgICAgICAgIGNvbnRlbnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgR0VUX0FMTF9SRUNJUEVfU0xVR1MgPSBncWxgXG5xdWVyeSB7XG4gICAgcmVjaXBlcyB7XG4gICAgICBkYXRhIHtcbiAgICAgICAgYXR0cmlidXRlcyB7XG4gICAgICAgICAgdXJsU2x1Z1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBHRVRfQUxMX1JFQ0lQRVMgPSBncWxgXG5xdWVyeSB7XG4gICAgcmVjaXBlcyB7XG4gICAgICBkYXRhIHtcbiAgICAgICAgYXR0cmlidXRlcyB7XG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgIHVybFNsdWdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgR0VUX0lORElWSURVQUxfUkVDSVBFID0gZ3FsYFxucXVlcnkgKCRzbHVnVXJsOiBTdHJpbmchKSB7XG4gICAgcmVjaXBlcyhmaWx0ZXJzOiB7IHVybFNsdWc6IHsgZXE6ICRzbHVnVXJsIH0gfSkge1xuICAgICAgZGF0YSB7XG4gICAgICAgIGF0dHJpYnV0ZXMge1xuICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgY29udGVudFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCAgR0VUX0FMTF9CTE9HX1BPU1RTX0FORF9SRUNJUEVTID0gZ3FsYFxucXVlcnkge1xuICByZWNpcGVzIHtcbiAgICBkYXRhIHtcbiAgICAgIGF0dHJpYnV0ZXMge1xuICAgICAgICB0aXRsZVxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICB1cmxTbHVnXG4gICAgICAgIGNvbnRlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGJsb2dQb3N0cyB7XG4gICAgICBkYXRhIHtcbiAgICAgICAgYXR0cmlidXRlcyB7XG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgIHVybFNsdWdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbn1cbmBcblxuZXhwb3J0IHsgXG4gIEdFVF9BTExfQkxPR19QT1NUUywgXG4gIEdFVF9JTkRJVklEVUFMX1BPU1QsIFxuICBHRVRfQUxMX0JMT0dfUE9TVF9TTFVHUyxcbiAgR0VUX0FMTF9SRUNJUEVTLFxuICBHRVRfSU5ESVZJRFVBTF9SRUNJUEUsXG4gIEdFVF9BTExfUkVDSVBFX1NMVUdTLFxuICBHRVRfQUxMX0JMT0dfUE9TVFNfQU5EX1JFQ0lQRVNcbn07Il0sIm5hbWVzIjpbImdxbCIsIkdFVF9BTExfQkxPR19QT1NUX1NMVUdTIiwiR0VUX0FMTF9CTE9HX1BPU1RTIiwiR0VUX0lORElWSURVQUxfUE9TVCIsIkdFVF9BTExfUkVDSVBFX1NMVUdTIiwiR0VUX0FMTF9SRUNJUEVTIiwiR0VUX0lORElWSURVQUxfUkVDSVBFIiwiR0VUX0FMTF9CTE9HX1BPU1RTX0FORF9SRUNJUEVTIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./graphql/queries.js\n");

/***/ }),

/***/ "./pages/blog/[slug].js":
/*!******************************!*\
  !*** ./pages/blog/[slug].js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BlogPost),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../graphql/queries */ \"./graphql/queries.js\");\n/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-mdx-remote/serialize */ \"next-mdx-remote/serialize\");\n/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-mdx-remote */ \"next-mdx-remote\");\n/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({\n    uri: \"http://localhost:1337/graphql\",\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache()\n});\nfunction BlogPost({ post  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: post.title\n            }, void 0, false, {\n                fileName: \"/Users/phillipou/Projects/phil-personal-blog/website/pages/blog/[slug].js\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_mdx_remote__WEBPACK_IMPORTED_MODULE_5__.MDXRemote, {\n                ...post.content\n            }, void 0, false, {\n                fileName: \"/Users/phillipou/Projects/phil-personal-blog/website/pages/blog/[slug].js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/phillipou/Projects/phil-personal-blog/website/pages/blog/[slug].js\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, this);\n};\nasync function getStaticPaths() {\n    const { data  } = await client.query({\n        query: _graphql_queries__WEBPACK_IMPORTED_MODULE_3__.GET_ALL_BLOG_POST_SLUGS\n    });\n    const paths = data.blogPosts.data.map((post)=>{\n        return {\n            params: {\n                slug: post.attributes.urlSlug\n            }\n        };\n    });\n    return {\n        paths,\n        fallback: false\n    };\n}\nasync function getStaticProps({ params  }) {\n    const { data  } = await client.query({\n        query: _graphql_queries__WEBPACK_IMPORTED_MODULE_3__.GET_INDIVIDUAL_POST,\n        variables: {\n            slugUrl: params.slug\n        }\n    });\n    const attrs = data.blogPosts.data[0].attributes;\n    const html = await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_4__.serialize)(attrs.content);\n    return {\n        props: {\n            post: {\n                title: attrs.title,\n                content: html\n            }\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTZEO0FBQ3BDO0FBQzREO0FBQy9CO0FBQ1Y7QUFFNUMsTUFBTU8sTUFBTSxHQUFHLElBQUlQLHdEQUFZLENBQUM7SUFDNUJRLEdBQUcsRUFBRSwrQkFBK0I7SUFDcENDLEtBQUssRUFBRSxJQUFJUix5REFBYSxFQUFFO0NBQzdCLENBQUM7QUFFYSxTQUFTUyxRQUFRLENBQUMsRUFBRUMsSUFBSSxHQUFFLEVBQUU7SUFDdkMscUJBQ0ksOERBQUNDLEtBQUc7OzBCQUNBLDhEQUFDQyxJQUFFOzBCQUFFRixJQUFJLENBQUNHLEtBQUs7Ozs7O29CQUFNOzBCQUNyQiw4REFBQ1Isc0RBQVM7Z0JBQUUsR0FBR0ssSUFBSSxDQUFDSSxPQUFPOzs7OztvQkFBSTs7Ozs7O1lBQzdCLENBQ1Q7Q0FDSjtBQUVNLGVBQWVDLGNBQWMsR0FBRztJQUVuQyxNQUFNLEVBQUVDLElBQUksR0FBRSxHQUFHLE1BQU1WLE1BQU0sQ0FBQ1csS0FBSyxDQUFDO1FBQUVBLEtBQUssRUFBRWYscUVBQXVCO0tBQUUsQ0FBQztJQUV2RSxNQUFNZ0IsS0FBSyxHQUFHRixJQUFJLENBQUNHLFNBQVMsQ0FBQ0gsSUFBSSxDQUFDSSxHQUFHLENBQUMsQ0FBQ1YsSUFBSSxHQUFLO1FBQzVDLE9BQU87WUFBRVcsTUFBTSxFQUFFO2dCQUFFQyxJQUFJLEVBQUVaLElBQUksQ0FBQ2EsVUFBVSxDQUFDQyxPQUFPO2FBQUU7U0FBRTtLQUN2RCxDQUFDO0lBRUYsT0FBTztRQUNITixLQUFLO1FBQ0xPLFFBQVEsRUFBRSxLQUFLO0tBQ2xCO0NBQ0o7QUFFTSxlQUFlQyxjQUFjLENBQUMsRUFBRUwsTUFBTSxHQUFFLEVBQUU7SUFFN0MsTUFBTSxFQUFFTCxJQUFJLEdBQUUsR0FBRyxNQUFNVixNQUFNLENBQUNXLEtBQUssQ0FBQztRQUNoQ0EsS0FBSyxFQUFFZCxpRUFBbUI7UUFDMUJ3QixTQUFTLEVBQUU7WUFBRUMsT0FBTyxFQUFFUCxNQUFNLENBQUNDLElBQUk7U0FBRTtLQUN0QyxDQUFDO0lBRUYsTUFBTU8sS0FBSyxHQUFHYixJQUFJLENBQUNHLFNBQVMsQ0FBQ0gsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDTyxVQUFVO0lBRS9DLE1BQU1PLElBQUksR0FBRyxNQUFNMUIsb0VBQVMsQ0FBQ3lCLEtBQUssQ0FBQ2YsT0FBTyxDQUFDO0lBRTNDLE9BQU87UUFDSGlCLEtBQUssRUFBRTtZQUNIckIsSUFBSSxFQUFFO2dCQUNGRyxLQUFLLEVBQUVnQixLQUFLLENBQUNoQixLQUFLO2dCQUNsQkMsT0FBTyxFQUFFZ0IsSUFBSTthQUNoQjtTQUNKO0tBQ0o7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnNpdGUvLi9wYWdlcy9ibG9nL1tzbHVnXS5qcz9mYTcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb0NsaWVudCwgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEdFVF9BTExfQkxPR19QT1NUX1NMVUdTLCBHRVRfSU5ESVZJRFVBTF9QT1NUIH0gZnJvbSAnLi4vLi4vZ3JhcGhxbC9xdWVyaWVzJztcbmltcG9ydCB7IHNlcmlhbGl6ZSB9IGZyb20gJ25leHQtbWR4LXJlbW90ZS9zZXJpYWxpemUnO1xuaW1wb3J0IHsgTURYUmVtb3RlIH0gZnJvbSAnbmV4dC1tZHgtcmVtb3RlJztcblxuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgdXJpOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9ncmFwaHFsXCIsXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKClcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nUG9zdCh7IHBvc3QgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+e3Bvc3QudGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxNRFhSZW1vdGUgey4uLnBvc3QuY29udGVudH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG5cbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5xdWVyeSh7IHF1ZXJ5OiBHRVRfQUxMX0JMT0dfUE9TVF9TTFVHUyB9KTtcblxuICAgIGNvbnN0IHBhdGhzID0gZGF0YS5ibG9nUG9zdHMuZGF0YS5tYXAoKHBvc3QpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgcGFyYW1zOiB7IHNsdWc6IHBvc3QuYXR0cmlidXRlcy51cmxTbHVnIH0gfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aHMsXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcblxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICAgICAgcXVlcnk6IEdFVF9JTkRJVklEVUFMX1BPU1QsXG4gICAgICAgIHZhcmlhYmxlczogeyBzbHVnVXJsOiBwYXJhbXMuc2x1ZyB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBhdHRycyA9IGRhdGEuYmxvZ1Bvc3RzLmRhdGFbMF0uYXR0cmlidXRlcztcblxuICAgIGNvbnN0IGh0bWwgPSBhd2FpdCBzZXJpYWxpemUoYXR0cnMuY29udGVudCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgcG9zdDoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBhdHRycy50aXRsZSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBodG1sXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiJdLCJuYW1lcyI6WyJBcG9sbG9DbGllbnQiLCJJbk1lbW9yeUNhY2hlIiwiUmVhY3QiLCJHRVRfQUxMX0JMT0dfUE9TVF9TTFVHUyIsIkdFVF9JTkRJVklEVUFMX1BPU1QiLCJzZXJpYWxpemUiLCJNRFhSZW1vdGUiLCJjbGllbnQiLCJ1cmkiLCJjYWNoZSIsIkJsb2dQb3N0IiwicG9zdCIsImRpdiIsImgxIiwidGl0bGUiLCJjb250ZW50IiwiZ2V0U3RhdGljUGF0aHMiLCJkYXRhIiwicXVlcnkiLCJwYXRocyIsImJsb2dQb3N0cyIsIm1hcCIsInBhcmFtcyIsInNsdWciLCJhdHRyaWJ1dGVzIiwidXJsU2x1ZyIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJ2YXJpYWJsZXMiLCJzbHVnVXJsIiwiYXR0cnMiLCJodG1sIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog/[slug].js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "next-mdx-remote":
/*!**********************************!*\
  !*** external "next-mdx-remote" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-mdx-remote");

/***/ }),

/***/ "next-mdx-remote/serialize":
/*!********************************************!*\
  !*** external "next-mdx-remote/serialize" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("next-mdx-remote/serialize");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/blog/[slug].js"));
module.exports = __webpack_exports__;

})();
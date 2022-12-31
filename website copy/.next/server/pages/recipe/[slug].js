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
exports.id = "pages/recipe/[slug]";
exports.ids = ["pages/recipe/[slug]"];
exports.modules = {

/***/ "./graphql/queries.js":
/*!****************************!*\
  !*** ./graphql/queries.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GET_ALL_BLOG_POSTS\": () => (/* binding */ GET_ALL_BLOG_POSTS),\n/* harmony export */   \"GET_ALL_BLOG_POSTS_AND_RECIPES\": () => (/* binding */ GET_ALL_BLOG_POSTS_AND_RECIPES),\n/* harmony export */   \"GET_ALL_BLOG_POST_SLUGS\": () => (/* binding */ GET_ALL_BLOG_POST_SLUGS),\n/* harmony export */   \"GET_ALL_RECIPES\": () => (/* binding */ GET_ALL_RECIPES),\n/* harmony export */   \"GET_ALL_RECIPE_SLUGS\": () => (/* binding */ GET_ALL_RECIPE_SLUGS),\n/* harmony export */   \"GET_INDIVIDUAL_POST\": () => (/* binding */ GET_INDIVIDUAL_POST),\n/* harmony export */   \"GET_INDIVIDUAL_RECIPE\": () => (/* binding */ GET_INDIVIDUAL_RECIPE)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GET_ALL_BLOG_POST_SLUGS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\nquery {\n    blogPosts {\n      data {\n        attributes {\n          urlSlug\n        }\n      }\n    }\n  }\n`;\nconst GET_ALL_BLOG_POSTS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\nquery {\n    blogPosts {\n      data {\n        attributes {\n          title\n          description\n          urlSlug\n        }\n      }\n    }\n  }\n`;\nconst GET_INDIVIDUAL_POST = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\nquery ($slugUrl: String!) {\n    blogPosts(filters: { urlSlug: { eq: $slugUrl } }) {\n      data {\n        attributes {\n          title\n          content\n        }\n      }\n    }\n  }\n`;\nconst GET_ALL_RECIPE_SLUGS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\nquery {\n    recipes {\n      data {\n        attributes {\n          urlSlug\n        }\n      }\n    }\n  }\n`;\nconst GET_ALL_RECIPES = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\nquery {\n    recipes {\n      data {\n        attributes {\n          title\n          description\n          urlSlug\n        }\n      }\n    }\n  }\n`;\nconst GET_INDIVIDUAL_RECIPE = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\nquery ($slugUrl: String!) {\n    recipes(filters: { urlSlug: { eq: $slugUrl } }) {\n      data {\n        attributes {\n          title\n          content\n        }\n      }\n    }\n  }\n`;\nconst GET_ALL_BLOG_POSTS_AND_RECIPES = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\nquery {\n  recipes {\n    data {\n      attributes {\n        title\n        description\n        urlSlug\n        content\n      }\n    }\n  },\n  blogPosts {\n      data {\n        attributes {\n          title\n          description\n          urlSlug\n        }\n      }\n    }\n}\n`;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ncmFwaHFsL3F1ZXJpZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXFDO0FBRXJDLE1BQU1DLHVCQUF1QixHQUFHRCwrQ0FBRyxDQUFDOzs7Ozs7Ozs7O0FBVXBDLENBQUM7QUFFRCxNQUFNRSxrQkFBa0IsR0FBR0YsK0NBQUcsQ0FBQzs7Ozs7Ozs7Ozs7O0FBWS9CLENBQUM7QUFFRCxNQUFNRyxtQkFBbUIsR0FBR0gsK0NBQUcsQ0FBQzs7Ozs7Ozs7Ozs7QUFXaEMsQ0FBQztBQUVELE1BQU1JLG9CQUFvQixHQUFHSiwrQ0FBRyxDQUFDOzs7Ozs7Ozs7O0FBVWpDLENBQUM7QUFFRCxNQUFNSyxlQUFlLEdBQUdMLCtDQUFHLENBQUM7Ozs7Ozs7Ozs7OztBQVk1QixDQUFDO0FBRUQsTUFBTU0scUJBQXFCLEdBQUdOLCtDQUFHLENBQUM7Ozs7Ozs7Ozs7O0FBV2xDLENBQUM7QUFFRCxNQUFPTyw4QkFBOEIsR0FBR1AsK0NBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCNUMsQ0FBQztBQVVDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2Vic2l0ZS8uL2dyYXBocWwvcXVlcmllcy5qcz82MmFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcblxuY29uc3QgR0VUX0FMTF9CTE9HX1BPU1RfU0xVR1MgPSBncWxgXG5xdWVyeSB7XG4gICAgYmxvZ1Bvc3RzIHtcbiAgICAgIGRhdGEge1xuICAgICAgICBhdHRyaWJ1dGVzIHtcbiAgICAgICAgICB1cmxTbHVnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IEdFVF9BTExfQkxPR19QT1NUUyA9IGdxbGBcbnF1ZXJ5IHtcbiAgICBibG9nUG9zdHMge1xuICAgICAgZGF0YSB7XG4gICAgICAgIGF0dHJpYnV0ZXMge1xuICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICB1cmxTbHVnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IEdFVF9JTkRJVklEVUFMX1BPU1QgPSBncWxgXG5xdWVyeSAoJHNsdWdVcmw6IFN0cmluZyEpIHtcbiAgICBibG9nUG9zdHMoZmlsdGVyczogeyB1cmxTbHVnOiB7IGVxOiAkc2x1Z1VybCB9IH0pIHtcbiAgICAgIGRhdGEge1xuICAgICAgICBhdHRyaWJ1dGVzIHtcbiAgICAgICAgICB0aXRsZVxuICAgICAgICAgIGNvbnRlbnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgR0VUX0FMTF9SRUNJUEVfU0xVR1MgPSBncWxgXG5xdWVyeSB7XG4gICAgcmVjaXBlcyB7XG4gICAgICBkYXRhIHtcbiAgICAgICAgYXR0cmlidXRlcyB7XG4gICAgICAgICAgdXJsU2x1Z1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBHRVRfQUxMX1JFQ0lQRVMgPSBncWxgXG5xdWVyeSB7XG4gICAgcmVjaXBlcyB7XG4gICAgICBkYXRhIHtcbiAgICAgICAgYXR0cmlidXRlcyB7XG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgIHVybFNsdWdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgR0VUX0lORElWSURVQUxfUkVDSVBFID0gZ3FsYFxucXVlcnkgKCRzbHVnVXJsOiBTdHJpbmchKSB7XG4gICAgcmVjaXBlcyhmaWx0ZXJzOiB7IHVybFNsdWc6IHsgZXE6ICRzbHVnVXJsIH0gfSkge1xuICAgICAgZGF0YSB7XG4gICAgICAgIGF0dHJpYnV0ZXMge1xuICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgY29udGVudFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCAgR0VUX0FMTF9CTE9HX1BPU1RTX0FORF9SRUNJUEVTID0gZ3FsYFxucXVlcnkge1xuICByZWNpcGVzIHtcbiAgICBkYXRhIHtcbiAgICAgIGF0dHJpYnV0ZXMge1xuICAgICAgICB0aXRsZVxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICB1cmxTbHVnXG4gICAgICAgIGNvbnRlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGJsb2dQb3N0cyB7XG4gICAgICBkYXRhIHtcbiAgICAgICAgYXR0cmlidXRlcyB7XG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgIHVybFNsdWdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbn1cbmBcblxuZXhwb3J0IHsgXG4gIEdFVF9BTExfQkxPR19QT1NUUywgXG4gIEdFVF9JTkRJVklEVUFMX1BPU1QsIFxuICBHRVRfQUxMX0JMT0dfUE9TVF9TTFVHUyxcbiAgR0VUX0FMTF9SRUNJUEVTLFxuICBHRVRfSU5ESVZJRFVBTF9SRUNJUEUsXG4gIEdFVF9BTExfUkVDSVBFX1NMVUdTLFxuICBHRVRfQUxMX0JMT0dfUE9TVFNfQU5EX1JFQ0lQRVNcbn07Il0sIm5hbWVzIjpbImdxbCIsIkdFVF9BTExfQkxPR19QT1NUX1NMVUdTIiwiR0VUX0FMTF9CTE9HX1BPU1RTIiwiR0VUX0lORElWSURVQUxfUE9TVCIsIkdFVF9BTExfUkVDSVBFX1NMVUdTIiwiR0VUX0FMTF9SRUNJUEVTIiwiR0VUX0lORElWSURVQUxfUkVDSVBFIiwiR0VUX0FMTF9CTE9HX1BPU1RTX0FORF9SRUNJUEVTIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./graphql/queries.js\n");

/***/ }),

/***/ "./pages/recipe/[slug].js":
/*!********************************!*\
  !*** ./pages/recipe/[slug].js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Recipe),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../graphql/queries */ \"./graphql/queries.js\");\n/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-mdx-remote/serialize */ \"next-mdx-remote/serialize\");\n/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-mdx-remote */ \"next-mdx-remote\");\n/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({\n    uri: \"http://localhost:1337/graphql\",\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache()\n});\nfunction Recipe({ recipe  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: recipe.title\n            }, void 0, false, {\n                fileName: \"/Users/phillipou/Projects/phil-personal-blog/website/pages/recipe/[slug].js\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_mdx_remote__WEBPACK_IMPORTED_MODULE_5__.MDXRemote, {\n                ...recipe.content\n            }, void 0, false, {\n                fileName: \"/Users/phillipou/Projects/phil-personal-blog/website/pages/recipe/[slug].js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/phillipou/Projects/phil-personal-blog/website/pages/recipe/[slug].js\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, this);\n};\nasync function getStaticPaths() {\n    const { data  } = await client.query({\n        query: _graphql_queries__WEBPACK_IMPORTED_MODULE_3__.GET_ALL_RECIPE_SLUGS\n    });\n    const paths = data.recipes.data.map((recipe)=>{\n        return {\n            params: {\n                slug: recipe.attributes.urlSlug\n            }\n        };\n    });\n    return {\n        paths,\n        fallback: false\n    };\n}\nasync function getStaticProps({ params  }) {\n    const { data  } = await client.query({\n        query: _graphql_queries__WEBPACK_IMPORTED_MODULE_3__.GET_INDIVIDUAL_RECIPE,\n        variables: {\n            slugUrl: params.slug\n        }\n    });\n    const attrs = data.recipes.data[0].attributes;\n    const html = await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_4__.serialize)(attrs.content);\n    return {\n        props: {\n            recipe: {\n                title: attrs.title,\n                content: html\n            }\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWNpcGUvW3NsdWddLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNkQ7QUFDcEM7QUFDMkQ7QUFDOUI7QUFDVjtBQUU1QyxNQUFNTyxNQUFNLEdBQUcsSUFBSVAsd0RBQVksQ0FBQztJQUM1QlEsR0FBRyxFQUFFLCtCQUErQjtJQUNwQ0MsS0FBSyxFQUFFLElBQUlSLHlEQUFhLEVBQUU7Q0FDN0IsQ0FBQztBQUVhLFNBQVNTLE1BQU0sQ0FBQyxFQUFFQyxNQUFNLEdBQUUsRUFBRTtJQUN2QyxxQkFDSSw4REFBQ0MsS0FBRzs7MEJBQ0EsOERBQUNDLElBQUU7MEJBQUVGLE1BQU0sQ0FBQ0csS0FBSzs7Ozs7b0JBQU07MEJBQ3ZCLDhEQUFDUixzREFBUztnQkFBRSxHQUFHSyxNQUFNLENBQUNJLE9BQU87Ozs7O29CQUFJOzs7Ozs7WUFDL0IsQ0FDVDtDQUNKO0FBRU0sZUFBZUMsY0FBYyxHQUFHO0lBRW5DLE1BQU0sRUFBRUMsSUFBSSxHQUFFLEdBQUcsTUFBTVYsTUFBTSxDQUFDVyxLQUFLLENBQUM7UUFBRUEsS0FBSyxFQUFFZixrRUFBb0I7S0FBRSxDQUFDO0lBRXBFLE1BQU1nQixLQUFLLEdBQUdGLElBQUksQ0FBQ0csT0FBTyxDQUFDSCxJQUFJLENBQUNJLEdBQUcsQ0FBQyxDQUFDVixNQUFNLEdBQUs7UUFDNUMsT0FBTztZQUFFVyxNQUFNLEVBQUU7Z0JBQUVDLElBQUksRUFBRVosTUFBTSxDQUFDYSxVQUFVLENBQUNDLE9BQU87YUFBRTtTQUFFO0tBQ3pELENBQUM7SUFFRixPQUFPO1FBQ0hOLEtBQUs7UUFDTE8sUUFBUSxFQUFFLEtBQUs7S0FDbEI7Q0FDSjtBQUVNLGVBQWVDLGNBQWMsQ0FBQyxFQUFFTCxNQUFNLEdBQUUsRUFBRTtJQUU3QyxNQUFNLEVBQUVMLElBQUksR0FBRSxHQUFHLE1BQU1WLE1BQU0sQ0FBQ1csS0FBSyxDQUFDO1FBQ2hDQSxLQUFLLEVBQUVkLG1FQUFxQjtRQUM1QndCLFNBQVMsRUFBRTtZQUFFQyxPQUFPLEVBQUVQLE1BQU0sQ0FBQ0MsSUFBSTtTQUFFO0tBQ3RDLENBQUM7SUFFRixNQUFNTyxLQUFLLEdBQUdiLElBQUksQ0FBQ0csT0FBTyxDQUFDSCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNPLFVBQVU7SUFFN0MsTUFBTU8sSUFBSSxHQUFHLE1BQU0xQixvRUFBUyxDQUFDeUIsS0FBSyxDQUFDZixPQUFPLENBQUM7SUFFM0MsT0FBTztRQUNIaUIsS0FBSyxFQUFFO1lBQ0hyQixNQUFNLEVBQUU7Z0JBQ0pHLEtBQUssRUFBRWdCLEtBQUssQ0FBQ2hCLEtBQUs7Z0JBQ2xCQyxPQUFPLEVBQUVnQixJQUFJO2FBQ2hCO1NBQ0o7S0FDSjtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2Vic2l0ZS8uL3BhZ2VzL3JlY2lwZS9bc2x1Z10uanM/MTQ4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBHRVRfQUxMX1JFQ0lQRV9TTFVHUywgR0VUX0lORElWSURVQUxfUkVDSVBFIH0gZnJvbSAnLi4vLi4vZ3JhcGhxbC9xdWVyaWVzJztcbmltcG9ydCB7IHNlcmlhbGl6ZSB9IGZyb20gJ25leHQtbWR4LXJlbW90ZS9zZXJpYWxpemUnO1xuaW1wb3J0IHsgTURYUmVtb3RlIH0gZnJvbSAnbmV4dC1tZHgtcmVtb3RlJztcblxuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgdXJpOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9ncmFwaHFsXCIsXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKClcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNpcGUoeyByZWNpcGUgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+e3JlY2lwZS50aXRsZX08L2gxPlxuICAgICAgICAgICAgPE1EWFJlbW90ZSB7Li4ucmVjaXBlLmNvbnRlbnR9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQucXVlcnkoeyBxdWVyeTogR0VUX0FMTF9SRUNJUEVfU0xVR1MgfSk7XG5cbiAgICBjb25zdCBwYXRocyA9IGRhdGEucmVjaXBlcy5kYXRhLm1hcCgocmVjaXBlKSA9PiB7XG4gICAgICAgIHJldHVybiB7IHBhcmFtczogeyBzbHVnOiByZWNpcGUuYXR0cmlidXRlcy51cmxTbHVnIH0gfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aHMsXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcblxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICAgICAgcXVlcnk6IEdFVF9JTkRJVklEVUFMX1JFQ0lQRSxcbiAgICAgICAgdmFyaWFibGVzOiB7IHNsdWdVcmw6IHBhcmFtcy5zbHVnIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGF0dHJzID0gZGF0YS5yZWNpcGVzLmRhdGFbMF0uYXR0cmlidXRlcztcblxuICAgIGNvbnN0IGh0bWwgPSBhd2FpdCBzZXJpYWxpemUoYXR0cnMuY29udGVudCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgcmVjaXBlOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IGF0dHJzLnRpdGxlLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGh0bWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuIl0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCIsIkluTWVtb3J5Q2FjaGUiLCJSZWFjdCIsIkdFVF9BTExfUkVDSVBFX1NMVUdTIiwiR0VUX0lORElWSURVQUxfUkVDSVBFIiwic2VyaWFsaXplIiwiTURYUmVtb3RlIiwiY2xpZW50IiwidXJpIiwiY2FjaGUiLCJSZWNpcGUiLCJyZWNpcGUiLCJkaXYiLCJoMSIsInRpdGxlIiwiY29udGVudCIsImdldFN0YXRpY1BhdGhzIiwiZGF0YSIsInF1ZXJ5IiwicGF0aHMiLCJyZWNpcGVzIiwibWFwIiwicGFyYW1zIiwic2x1ZyIsImF0dHJpYnV0ZXMiLCJ1cmxTbHVnIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsInZhcmlhYmxlcyIsInNsdWdVcmwiLCJhdHRycyIsImh0bWwiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/recipe/[slug].js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/recipe/[slug].js"));
module.exports = __webpack_exports__;

})();
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/app.js":
/*!**********************!*\
  !*** ./pages/app.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/note */ \"./components/note.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_noteServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/noteServices */ \"./services/noteServices.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Footer = ()=>{\n    const footerStyle = {\n        color: \"green\",\n        fontStyle: \"italic\",\n        fontSize: 16\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: footerStyle,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\Visual Studio Code Projects\\\\Exercises\\\\exercises_part02\\\\pages\\\\app.js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"em\", {\n                children: \"Note app, Department of Computer Science, University of Helsinki 2022\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Visual Studio Code Projects\\\\Exercises\\\\exercises_part02\\\\pages\\\\app.js\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Visual Studio Code Projects\\\\Exercises\\\\exercises_part02\\\\pages\\\\app.js\",\n        lineNumber: 12,\n        columnNumber: 7\n    }, undefined);\n};\n_c = Footer;\nconst App = ()=>{\n    _s();\n    const [notes, setNotes] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [newNote, setNewNote] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"a new note...\");\n    const [showAll, setShowAll] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const result = notes.find((note)=>note.id === 1);\n    console.log(result, notes.filter((note)=>note.id === 3));\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (notes.l) _services_noteServices__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getAll().then((response)=>{\n            setNotes(notes.concat(response));\n        });\n    }, []);\n    const addNote = (event)=>{\n        event.preventDefault();\n        console.log(\"button clicked\", event.target);\n        const noteObject = {\n            content: newNote,\n            important: Math.random() < 0.5,\n            id: notes.length + 1\n        };\n        _services_noteServices__WEBPACK_IMPORTED_MODULE_3__[\"default\"].create(noteObject).then((response)=>{\n            console.log(response.data);\n            setNotes(notes.concat(response.data));\n            setNewNote(\"Please Enter a New Note...\");\n        });\n    };\n    const handleNoteChange = (event)=>{\n        console.log(event.target.value);\n        setNewNote(event.target.value);\n    };\n    const notesToShow = showAll ? notes : notes.filter((note)=>note.important);\n    const toggleImportanceOf = (id)=>{\n        const url = \"http://localhost:3001/notes/\".concat(id);\n        const note = notes.find((x)=>x.id === id);\n        const changedNote = {\n            ...note,\n            important: !note.important\n        };\n        _services_noteServices__WEBPACK_IMPORTED_MODULE_3__[\"default\"].update(id, changedNote).then((response)=>{\n            setNotes(notes.map((x)=>x.id !== id ? x : response.data));\n        }).catch((error)=>{\n            alert(\"the note '\".concat(note.content, \"' was already deleted from server\"));\n            setNotes(notes.filter((n)=>n.id !== id));\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Notes\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Visual Studio Code Projects\\\\Exercises\\\\exercises_part02\\\\pages\\\\app.js\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    notesToShow.map((note)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_note__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            note: note,\n                            toggleImportance: ()=>toggleImportanceOf(note.id)\n                        }, note.id, false, {\n                            fileName: \"D:\\\\Visual Studio Code Projects\\\\Exercises\\\\exercises_part02\\\\pages\\\\app.js\",\n                            lineNumber: 83,\n                            columnNumber: 21\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setShowAll(!showAll),\n                        children: [\n                            \"show \",\n                            showAll ? \"important\" : \"all\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Visual Studio Code Projects\\\\Exercises\\\\exercises_part02\\\\pages\\\\app.js\",\n                        lineNumber: 86,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"----------------------------------------------------\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Visual Studio Code Projects\\\\Exercises\\\\exercises_part02\\\\pages\\\\app.js\",\n                        lineNumber: 89,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: addNote,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                value: newNote,\n                                onChange: handleNoteChange\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Visual Studio Code Projects\\\\Exercises\\\\exercises_part02\\\\pages\\\\app.js\",\n                                lineNumber: 91,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                children: \"save\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Visual Studio Code Projects\\\\Exercises\\\\exercises_part02\\\\pages\\\\app.js\",\n                                lineNumber: 92,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Visual Studio Code Projects\\\\Exercises\\\\exercises_part02\\\\pages\\\\app.js\",\n                        lineNumber: 90,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Footer, {}, void 0, false, {\n                        fileName: \"D:\\\\Visual Studio Code Projects\\\\Exercises\\\\exercises_part02\\\\pages\\\\app.js\",\n                        lineNumber: 94,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Visual Studio Code Projects\\\\Exercises\\\\exercises_part02\\\\pages\\\\app.js\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(App, \"7svp7AaIh+fqSKrnICklnS1Dyns=\");\n_c1 = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c, _c1;\n$RefreshReg$(_c, \"Footer\");\n$RefreshReg$(_c1, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNiLDhEQUFDdEIsd0RBQUlBOzRCQUFnQnNCLE1BQU1BOzRCQUMzQm9DLGtCQUFrQixJQUFNWCxtQkFBbUJ6QixLQUFLQyxFQUFFOzJCQUR0Q0QsS0FBS0MsRUFBRTs7Ozs7a0NBR3ZCLDhEQUFDb0M7d0JBQU9DLFNBQVMsSUFBTXpDLFdBQVcsQ0FBQ0Q7OzRCQUFVOzRCQUNuQ0EsVUFBVSxjQUFjLEtBQUs7Ozs7Ozs7a0NBRXZDLDhEQUFDMkM7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0M7d0JBQUtDLFVBQVUvQjs7MENBQ1osOERBQUNnQztnQ0FBTW5CLE9BQU83QjtnQ0FBU2lELFVBQVVyQjs7Ozs7OzBDQUNqQyw4REFBQ2U7Z0NBQU9PLE1BQUs7MENBQVM7Ozs7Ozs7Ozs7OztrQ0FFMUIsOERBQUM5RDs7Ozs7Ozs7Ozs7OztBQUlqQjtHQS9FTVM7TUFBQUE7QUFpRk4sK0RBQWVBLEdBQUdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBwLmpzP2IyNDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vdGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvbm90ZVwiXHJcbmltcG9ydCB7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgbm90ZVNlcnZpY2VzIGZyb20gXCIuLi9zZXJ2aWNlcy9ub3RlU2VydmljZXNcIlxyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZm9vdGVyU3R5bGUgPSB7XHJcbiAgICAgIGNvbG9yOiAnZ3JlZW4nLFxyXG4gICAgICBmb250U3R5bGU6ICdpdGFsaWMnLFxyXG4gICAgICBmb250U2l6ZTogMTZcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgc3R5bGU9e2Zvb3RlclN0eWxlfT5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8ZW0+Tm90ZSBhcHAsIERlcGFydG1lbnQgb2YgQ29tcHV0ZXIgU2NpZW5jZSwgVW5pdmVyc2l0eSBvZiBIZWxzaW5raSAyMDIyPC9lbT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuY29uc3QgQXBwID0gKCk9PnsgICAgXHJcbiAgICBjb25zdCBbbm90ZXMsc2V0Tm90ZXNdID0gdXNlU3RhdGUoW10pICAgIFxyXG4gICAgY29uc3QgW25ld05vdGUsIHNldE5ld05vdGVdID0gdXNlU3RhdGUoJ2EgbmV3IG5vdGUuLi4nKSBcclxuICAgIGNvbnN0IFtzaG93QWxsLCBzZXRTaG93QWxsXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCByZXN1bHQgPSBub3Rlcy5maW5kKG5vdGUgPT4gbm90ZS5pZD09PTEpXHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQsbm90ZXMuZmlsdGVyKG5vdGU9Pm5vdGUuaWQ9PT0zKSlcclxuXHJcbiAgICB1c2VFZmZlY3QgKCgpID0+IHsgICAgICAgXHJcbiAgICAgIGlmKG5vdGVzLmwpXHJcbiAgICAgIG5vdGVTZXJ2aWNlcy5nZXRBbGwoKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7ICAgICAgICAgIFxyXG4gICAgICAgICAgc2V0Tm90ZXMobm90ZXMuY29uY2F0KHJlc3BvbnNlKSlcclxuICAgICAgfSlcclxuICAgIH0sW10pXHJcbiAgICAgICAgICBcclxuICAgIGNvbnN0IGFkZE5vdGUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2J1dHRvbiBjbGlja2VkJywgZXZlbnQudGFyZ2V0KVxyXG4gICAgICAgIGNvbnN0IG5vdGVPYmplY3QgPSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IG5ld05vdGUsXHJcbiAgICAgICAgICAgIGltcG9ydGFudDogTWF0aC5yYW5kb20oKSA8IDAuNSxcclxuICAgICAgICAgICAgaWQ6bm90ZXMubGVuZ3RoKzFcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBub3RlU2VydmljZXNcclxuICAgICAgICAuY3JlYXRlKG5vdGVPYmplY3QpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxyXG4gICAgICAgICAgICBzZXROb3Rlcyhub3Rlcy5jb25jYXQocmVzcG9uc2UuZGF0YSkpXHJcbiAgICAgICAgICAgIHNldE5ld05vdGUoJ1BsZWFzZSBFbnRlciBhIE5ldyBOb3RlLi4uJykgICAgICAgICAgICBcclxuICAgICAgICB9KSAgICAgICAgXHJcbiAgICB9ICAgXHJcblxyXG4gICAgY29uc3QgaGFuZGxlTm90ZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgICBzZXROZXdOb3RlKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgIH0gICAgXHJcblxyXG4gICAgY29uc3Qgbm90ZXNUb1Nob3cgPSBzaG93QWxsXHJcbiAgICAgICAgPyBub3Rlc1xyXG4gICAgICAgIDogbm90ZXMuZmlsdGVyKG5vdGUgPT4gbm90ZS5pbXBvcnRhbnQpXHJcblxyXG4gICAgY29uc3QgdG9nZ2xlSW1wb3J0YW5jZU9mID0gKGlkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9ub3Rlcy8ke2lkfWBcclxuICAgICAgICBjb25zdCBub3RlID0gbm90ZXMuZmluZCh4ID0+IHguaWQgPT09IGlkKVxyXG4gICAgICAgIGNvbnN0IGNoYW5nZWROb3RlID0geyAuLi5ub3RlLCBpbXBvcnRhbnQ6ICFub3RlLmltcG9ydGFudCB9XHJcbiAgICAgIFxyXG4gICAgICAgIG5vdGVTZXJ2aWNlcy51cGRhdGUoaWQsIGNoYW5nZWROb3RlKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgIHNldE5vdGVzKG5vdGVzLm1hcCh4ID0+IHguaWQgIT09IGlkID8geCA6IHJlc3BvbnNlLmRhdGEpKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICAgICAgYHRoZSBub3RlICcke25vdGUuY29udGVudH0nIHdhcyBhbHJlYWR5IGRlbGV0ZWQgZnJvbSBzZXJ2ZXJgXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgc2V0Tm90ZXMobm90ZXMuZmlsdGVyKG4gPT4gbi5pZCAhPT0gaWQpKVxyXG4gICAgICAgICAgfSlcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDE+Tm90ZXM8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2ID4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHtub3Rlc1RvU2hvdy5tYXAobm90ZSA9PiBcclxuICAgICAgICAgICAgICAgICAgICA8Tm90ZSAga2V5PXtub3RlLmlkfSBub3RlPXtub3RlfSBcclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVJbXBvcnRhbmNlPXsoKSA9PiB0b2dnbGVJbXBvcnRhbmNlT2Yobm90ZS5pZCl9Lz5cclxuICAgICAgICAgICAgICAgICl9ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFNob3dBbGwoIXNob3dBbGwpfT5cclxuICAgICAgICAgICAgICAgICAgICBzaG93IHtzaG93QWxsID8gJ2ltcG9ydGFudCcgOiAnYWxsJyB9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxwPi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS08L3A+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17YWRkTm90ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtuZXdOb3RlfSBvbkNoYW5nZT17aGFuZGxlTm90ZUNoYW5nZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPnNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT4gXHJcbiAgICAgICAgICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcCJdLCJuYW1lcyI6WyJOb3RlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJub3RlU2VydmljZXMiLCJGb290ZXIiLCJmb290ZXJTdHlsZSIsImNvbG9yIiwiZm9udFN0eWxlIiwiZm9udFNpemUiLCJkaXYiLCJzdHlsZSIsImJyIiwiZW0iLCJBcHAiLCJub3RlcyIsInNldE5vdGVzIiwibmV3Tm90ZSIsInNldE5ld05vdGUiLCJzaG93QWxsIiwic2V0U2hvd0FsbCIsInJlc3VsdCIsImZpbmQiLCJub3RlIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyIiwibCIsImdldEFsbCIsInRoZW4iLCJyZXNwb25zZSIsImNvbmNhdCIsImFkZE5vdGUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0Iiwibm90ZU9iamVjdCIsImNvbnRlbnQiLCJpbXBvcnRhbnQiLCJNYXRoIiwicmFuZG9tIiwibGVuZ3RoIiwiY3JlYXRlIiwiZGF0YSIsImhhbmRsZU5vdGVDaGFuZ2UiLCJ2YWx1ZSIsIm5vdGVzVG9TaG93IiwidG9nZ2xlSW1wb3J0YW5jZU9mIiwidXJsIiwieCIsImNoYW5nZWROb3RlIiwidXBkYXRlIiwibWFwIiwiY2F0Y2giLCJlcnJvciIsImFsZXJ0IiwibiIsImgxIiwidG9nZ2xlSW1wb3J0YW5jZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJvbkNoYW5nZSIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/app.js\n"));

/***/ })

});
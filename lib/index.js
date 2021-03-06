'use strict';

const registerPlugins = (Vue, VuePlugins = {}) => {
  for (const plugin in VuePlugins) {
    if (plugin && VuePlugins[plugin]) {
      Vue.use(VuePlugins[plugin]);
    }
  }
};

const vueUse = (VuePlugin) => {
  /*
    istanbul ignore next,
    Auto installation only occurs if window.Vue exists
  */
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VuePlugin);
  }
};

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script = {
  name: 'btb-vue-table',
  props: {
    headData: {
      type: Array,
      default: function () {
        return []
      }
    },
    bodyData: {
      type: Array,
      default: function () {
        return []
      }
    },
    xScrollable: Boolean,
    bodyWidth: {
      type: [String, Number],
      default: function () {
        return undefined
      }
    }
  },
  computed: {
    tableStyled () {
      const styledObj = {};
      switch (typeof this.bodyWidth) {
        case 'number':
          styledObj.width = `${this.bodyWidth}px`;
          break
        default:
          styledObj.width = this.bodyWidth;
          break
      }
      return styledObj
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
const __vue_script__ = script;
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      class: ["btb-vue-table", { "table-x-scrollable": _vm.xScrollable }],
      style: _vm.tableStyled
    },
    [
      _c(
        "table",
        { class: ["table_container"] },
        [
          _vm.headData.length
            ? [
                _c("thead", { staticClass: "container_head" }, [
                  _c(
                    "tr",
                    { staticClass: "head_tr" },
                    [
                      _vm._l(_vm.headData, function(entry_td) {
                        return [
                          _c(
                            "th",
                            {
                              key: entry_td.index,
                              class: ["tr_th", "th-" + entry_td.index]
                            },
                            [
                              _vm._v(
                                "\n          " +
                                  _vm._s(entry_td.name) +
                                  "\n        "
                              )
                            ]
                          )
                        ]
                      })
                    ],
                    2
                  )
                ])
              ]
            : _vm._e(),
          _vm._v(" "),
          _vm.bodyData.length
            ? [
                _c(
                  "tbody",
                  { staticClass: "container_body" },
                  [
                    _vm._l(_vm.bodyData, function(entry_tr, index_tr) {
                      return [
                        _c(
                          "tr",
                          {
                            key: index_tr,
                            class: ["body_tr", "tr-" + index_tr]
                          },
                          [
                            _vm._l(_vm.headData, function(entry_td) {
                              return [
                                _c(
                                  "td",
                                  {
                                    key: entry_td.index,
                                    class: ["tr_td", "td-" + entry_td.index]
                                  },
                                  [
                                    _vm._v(
                                      "\n          " +
                                        _vm._s(entry_tr[entry_td.index]) +
                                        "\n        "
                                    )
                                  ]
                                )
                              ]
                            })
                          ],
                          2
                        )
                      ]
                    })
                  ],
                  2
                )
              ]
            : _vm._e()
        ],
        2
      )
    ]
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

__vue_component__.install = function (Vue) {
  Vue.component(__vue_component__.name, __vue_component__);
};

const InstallTable = {
  Table: __vue_component__
};

const install = function (Vue) {
  if (install.installed) {
    /* istanbul ignore next */
    return
  }
  install.installed = true;

  registerPlugins(Vue, InstallTable);
};

install.installed = false;

const componentsInstaller = {
  install: install,
  module: __vue_component__
};

vueUse(componentsInstaller);

module.exports = componentsInstaller;

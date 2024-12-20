import { defineComponent as O, ref as b, openBlock as a, createBlock as y, unref as c, withCtx as d, createVNode as f, mergeProps as s, resolveDynamicComponent as k, nextTick as $, onMounted as I, computed as M, normalizeProps as C, guardReactiveProps as V, createTextVNode as P, toDisplayString as g, createElementBlock as x, Fragment as j, createCommentVNode as F, createSlots as N, render as q, inject as A } from "vue";
import { useTheme as E } from "vuetify";
import { VThemeProvider as K, VDialog as U, VCard as H, VCardText as L, VCardActions as z, VSpacer as R, VBtn as D, VSnackbar as G } from "vuetify/components";
import { VCardTitle as J } from "vuetify/lib/components/VCard/index.mjs";
import { VTextField as Q } from "vuetify/lib/components/VTextField/index.mjs";
function S(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function B(e, t, n = ".", i) {
  if (!S(t))
    return B(e, {}, n, i);
  const r = Object.assign({}, t);
  for (const l in e) {
    if (l === "__proto__" || l === "constructor")
      continue;
    const o = e[l];
    o != null && (i && i(r, l, o, n) || (Array.isArray(o) && Array.isArray(r[l]) ? r[l] = [...o, ...r[l]] : S(o) && S(r[l]) ? r[l] = B(
      o,
      r[l],
      (n ? `${n}.` : "") + l.toString(),
      i
    ) : r[l] = o));
  }
  return r;
}
function W(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, i) => B(n, i, "", e), {})
  );
}
const T = W(), X = /* @__PURE__ */ O({
  __name: "Dialog",
  props: {
    component: {
      type: Object,
      required: !0
    },
    componentProps: {
      type: Object,
      required: !1
    },
    dialogProps: {
      type: Object,
      required: !1
    },
    theme: {
      type: String,
      required: !0
    },
    resolve: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = b(!0);
    function i(l) {
      t.resolve(l), n.value = !1;
    }
    function r(l) {
      l || $(() => {
        t.resolve(!1);
      });
    }
    return (l, o) => (a(), y(c(K), { theme: e.theme }, {
      default: d(() => [
        f(c(U), s(e.dialogProps, {
          modelValue: n.value,
          "onUpdate:modelValue": [
            o[1] || (o[1] = (u) => n.value = u),
            r
          ]
        }), {
          default: d(() => [
            (a(), y(k(e.component), s(e.componentProps, {
              isActive: n.value,
              "onUpdate:isActive": o[0] || (o[0] = (u) => n.value = u),
              onClose: i
            }), null, 16, ["isActive"]))
          ]),
          _: 1
        }, 16, ["modelValue"])
      ]),
      _: 1
    }, 8, ["theme"]));
  }
}), Y = /* @__PURE__ */ O({
  __name: "ConfirmDialog",
  props: {
    title: {
      type: String,
      required: !1,
      default: "Are you sure?"
    },
    titleComponent: {
      type: Object,
      required: !1
    },
    titleComponentProps: {
      type: Object,
      required: !1
    },
    content: {
      type: String,
      required: !1,
      default: ""
    },
    contentComponent: {
      type: Object,
      required: !1
    },
    contentComponentProps: {
      type: Object,
      required: !1
    },
    confirmationKeyword: {
      type: String,
      required: !1
    },
    confirmationKeywordTextFieldProps: {
      type: Object,
      required: !1,
      default: () => ({})
    },
    confirmationText: {
      type: String,
      required: !1,
      default: "Ok"
    },
    cancellationText: {
      type: String,
      required: !1,
      default: "Cancel"
    },
    dialogProps: {
      type: Object,
      required: !1,
      default: () => ({})
    },
    cardProps: {
      type: Object,
      required: !1,
      default: () => ({})
    },
    cardTitleProps: {
      type: Object,
      required: !1,
      default: () => ({})
    },
    cardTextProps: {
      type: Object,
      required: !1,
      default: () => ({})
    },
    cardActionsProps: {
      type: Object,
      required: !1,
      default: () => ({})
    },
    actionsContentComponent: {
      type: Object,
      required: !1
    },
    cancellationButtonProps: {
      type: Object,
      required: !1,
      default: () => ({})
    },
    confirmationButtonProps: {
      type: Object,
      required: !1,
      default: () => ({})
    },
    theme: {
      type: String,
      required: !0
    },
    resolve: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = b(!0), i = b(null), r = b("");
    function l() {
      t.resolve(!0), n.value = !1;
    }
    function o() {
      t.resolve(!1), n.value = !1;
    }
    I(() => {
      var v;
      (v = i.value) == null || v.focus();
    });
    const u = M(() => t.confirmationKeyword ? t.confirmationKeyword !== r.value : !1);
    function m(v) {
      v || $(() => {
        t.resolve(!1);
      });
    }
    return (v, p) => (a(), y(c(K), { theme: e.theme }, {
      default: d(() => [
        f(c(U), s(e.dialogProps, {
          modelValue: n.value,
          "onUpdate:modelValue": [
            p[1] || (p[1] = (h) => n.value = h),
            m
          ]
        }), {
          default: d(() => [
            f(c(H), C(V(e.cardProps)), {
              default: d(() => [
                e.titleComponent ? (a(), y(k(e.titleComponent), C(s({ key: 0 }, e.titleComponentProps)), null, 16)) : (a(), y(J, C(s({ key: 1 }, e.cardTitleProps)), {
                  default: d(() => [
                    P(g(e.title), 1)
                  ]),
                  _: 1
                }, 16)),
                f(c(L), C(V(e.cardTextProps)), {
                  default: d(() => [
                    e.contentComponent ? (a(), y(k(e.contentComponent), C(s({ key: 0 }, e.contentComponentProps)), null, 16)) : (a(), x(j, { key: 1 }, [
                      e.content ? (a(), x(j, { key: 0 }, [
                        P(g(e.content), 1)
                      ], 64)) : F("", !0),
                      e.confirmationKeyword ? (a(), y(Q, s({
                        key: 1,
                        ref_key: "textFieldInput",
                        ref: i,
                        modelValue: r.value,
                        "onUpdate:modelValue": p[0] || (p[0] = (h) => r.value = h)
                      }, e.confirmationKeywordTextFieldProps, { variant: "underlined" }), null, 16, ["modelValue"])) : F("", !0)
                    ], 64))
                  ]),
                  _: 1
                }, 16),
                f(c(z), C(V(e.cardActionsProps)), {
                  default: d(() => [
                    e.actionsContentComponent ? (a(), y(k(e.actionsContentComponent), {
                      key: 0,
                      "confirmation-button-disabled": u.value,
                      cancel: o,
                      confirm: l
                    }, null, 8, ["confirmation-button-disabled"])) : (a(), x(j, { key: 1 }, [
                      f(c(R)),
                      f(c(D), s(e.cancellationButtonProps, { onClick: o }), {
                        default: d(() => [
                          P(g(e.cancellationText), 1)
                        ]),
                        _: 1
                      }, 16),
                      f(c(D), s({
                        color: "primary",
                        disabled: u.value
                      }, e.confirmationButtonProps, { onClick: l }), {
                        default: d(() => [
                          P(g(e.confirmationText), 1)
                        ]),
                        _: 1
                      }, 16, ["disabled"])
                    ], 64))
                  ]),
                  _: 1
                }, 16)
              ]),
              _: 1
            }, 16)
          ]),
          _: 1
        }, 16, ["modelValue"])
      ]),
      _: 1
    }, 8, ["theme"]));
  }
}), Z = /* @__PURE__ */ O({
  __name: "Snackbar",
  props: {
    text: {
      type: String,
      required: !1,
      default: ""
    },
    contentComponent: {
      type: Object,
      required: !1
    },
    snackbarProps: {
      type: Object,
      required: !1,
      default: () => ({})
    },
    showCloseButton: {
      type: Boolean,
      required: !1,
      default: !0
    },
    closeButtonProps: {
      type: Object,
      required: !1,
      default: () => ({})
    },
    closeButtonText: {
      type: String,
      required: !1,
      default: "Close"
    },
    theme: {
      type: String,
      required: !0
    }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = e, i = t, r = b(!0), l = M(() => ({
      ...n.snackbarProps,
      onAfterLeave() {
        var o, u;
        (u = (o = n.snackbarProps).onAfterLeave) == null || u.call(o), i("close");
      }
    }));
    return (o, u) => (a(), y(c(K), { theme: e.theme }, {
      default: d(() => [
        f(c(G), s(l.value, {
          modelValue: r.value,
          "onUpdate:modelValue": u[1] || (u[1] = (m) => r.value = m)
        }), N({
          default: d(() => [
            e.contentComponent ? (a(), y(k(e.contentComponent), { key: 0 })) : (a(), x(j, { key: 1 }, [
              P(g(e.text), 1)
            ], 64))
          ]),
          _: 2
        }, [
          e.showCloseButton ? {
            name: "actions",
            fn: d(() => [
              f(c(D), s({
                variant: "text",
                text: e.closeButtonText
              }, e.closeButtonProps, {
                onClick: u[0] || (u[0] = (m) => r.value = !1)
              }), null, 16, ["text"])
            ]),
            key: "0"
          } : void 0
        ]), 1040, ["modelValue"])
      ]),
      _: 1
    }, 8, ["theme"]));
  }
});
function w(e, t, n, i) {
  const r = f(e, {
    key: Math.random(),
    ...t
  });
  return n && n._context && (r.appContext = n._context), i ? (n._container.appendChild(i), q(r, i)) : q(r, n._container.firstElementChild), { vNode: r };
}
const re = {
  install(e, t) {
    const n = document.createElement("div");
    function i(o) {
      return new Promise((u) => new Promise((m) => {
        w(X, {
          ...T(o, (t == null ? void 0 : t.dialog) ?? {}),
          resolve: m
        }, e, n);
      }).then((m) => {
        e._container.removeChild(n), q(null, n), u(m);
      }));
    }
    function r(o) {
      const u = document.createElement("div");
      return new Promise((m) => new Promise((v) => {
        w(Y, {
          ...T(o, (t == null ? void 0 : t.confirmDialog) ?? {}),
          resolve: v
        }, e, u);
      }).then((v) => {
        e._container.removeChild(u), q(null, u), m(v);
      }));
    }
    function l(o) {
      const u = document.createElement("div");
      w(Z, {
        ...T(o, (t == null ? void 0 : t.snackbar) ?? {}),
        onClose() {
          e._container.removeChild(u), q(null, u);
        }
      }, e, u);
    }
    e.provide("ConfirmDialogKey", {
      mountDialog: i,
      mountConfirmDialog: r,
      mountSnackbar: l
    }), e.config.globalProperties.$dialog = (o) => i(o), e.config.globalProperties.$confirm = (o) => r(o), e.config.globalProperties.$toast = (o) => l(o);
  }
};
function ie() {
  const e = A("ConfirmDialogKey"), t = E();
  function n(i) {
    if (!e)
      throw new Error("Missing dialog instance");
    return e.mountDialog({
      theme: t.name.value,
      ...i
    });
  }
  return n;
}
function le() {
  const e = A("ConfirmDialogKey"), t = E();
  function n(i) {
    if (!e)
      throw new Error("Missing dialog instance");
    return e.mountConfirmDialog({
      theme: t.name.value,
      ...i
    });
  }
  return n;
}
function ue() {
  const e = A("ConfirmDialogKey"), t = E();
  function n(i) {
    if (!e)
      throw new Error("Missing dialog instance");
    return e.mountSnackbar({
      theme: t.name.value,
      ...i
    });
  }
  return n;
}
export {
  re as default,
  le as useConfirm,
  ie as useDialog,
  ue as useSnackbar
};

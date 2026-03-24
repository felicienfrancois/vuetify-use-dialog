import { defineComponent as O, ref as b, openBlock as a, createBlock as y, unref as c, withCtx as d, createVNode as s, mergeProps as m, resolveDynamicComponent as k, nextTick as $, onMounted as I, computed as M, normalizeProps as v, guardReactiveProps as V, createTextVNode as P, toDisplayString as g, createElementBlock as x, Fragment as j, createCommentVNode as F, createSlots as N, render as q, inject as A } from "vue";
import { useTheme as E } from "vuetify";
import { VThemeProvider as K, VDialog as U, VCard as H, VCardText as L, VCardActions as z, VSpacer as R, VBtn as D, VSnackbar as G } from "vuetify/components";
import { VCardTitle as J } from "vuetify/components/VCard";
import { VTextField as Q } from "vuetify/components/VTextField";
function S(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function B(e, t, n = ".", l) {
  if (!S(t))
    return B(e, {}, n, l);
  const i = Object.assign({}, t);
  for (const o in e) {
    if (o === "__proto__" || o === "constructor")
      continue;
    const r = e[o];
    r != null && (l && l(i, o, r, n) || (Array.isArray(r) && Array.isArray(i[o]) ? i[o] = [...r, ...i[o]] : S(r) && S(i[o]) ? i[o] = B(
      r,
      i[o],
      (n ? `${n}.` : "") + o.toString(),
      l
    ) : i[o] = r));
  }
  return i;
}
function W(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, l) => B(n, l, "", e), {})
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
    function l(o) {
      t.resolve(o), n.value = !1;
    }
    function i(o) {
      o || $(() => {
        t.resolve(!1);
      });
    }
    return (o, r) => (a(), y(c(K), { theme: e.theme }, {
      default: d(() => [
        s(c(U), m(e.dialogProps, {
          modelValue: n.value,
          "onUpdate:modelValue": [
            r[1] || (r[1] = (u) => n.value = u),
            i
          ]
        }), {
          default: d(() => [
            (a(), y(k(e.component), m(e.componentProps, {
              isActive: n.value,
              "onUpdate:isActive": r[0] || (r[0] = (u) => n.value = u),
              onClose: l
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
    const t = e, n = b(!0), l = b(null), i = b("");
    function o() {
      t.resolve(!0), n.value = !1;
    }
    function r() {
      t.resolve(!1), n.value = !1;
    }
    I(() => {
      var C;
      (C = l.value) == null || C.focus();
    });
    const u = M(() => t.confirmationKeyword ? t.confirmationKeyword !== i.value : !1);
    function f(C) {
      C || $(() => {
        t.resolve(!1);
      });
    }
    return (C, p) => (a(), y(c(K), { theme: e.theme }, {
      default: d(() => [
        s(c(U), m(e.dialogProps, {
          modelValue: n.value,
          "onUpdate:modelValue": [
            p[1] || (p[1] = (h) => n.value = h),
            f
          ]
        }), {
          default: d(() => [
            s(c(H), v(V(e.cardProps)), {
              default: d(() => [
                e.titleComponent ? (a(), y(k(e.titleComponent), v(m({ key: 0 }, e.titleComponentProps)), null, 16)) : (a(), y(J, v(m({ key: 1 }, e.cardTitleProps)), {
                  default: d(() => [
                    P(g(e.title), 1)
                  ]),
                  _: 1
                }, 16)),
                s(c(L), v(V(e.cardTextProps)), {
                  default: d(() => [
                    e.contentComponent ? (a(), y(k(e.contentComponent), v(m({ key: 0 }, e.contentComponentProps)), null, 16)) : (a(), x(j, { key: 1 }, [
                      e.content ? (a(), x(j, { key: 0 }, [
                        P(g(e.content), 1)
                      ], 64)) : F("", !0),
                      e.confirmationKeyword ? (a(), y(Q, m({
                        key: 1,
                        ref_key: "textFieldInput",
                        ref: l,
                        modelValue: i.value,
                        "onUpdate:modelValue": p[0] || (p[0] = (h) => i.value = h)
                      }, e.confirmationKeywordTextFieldProps, { variant: "underlined" }), null, 16, ["modelValue"])) : F("", !0)
                    ], 64))
                  ]),
                  _: 1
                }, 16),
                s(c(z), v(V(e.cardActionsProps)), {
                  default: d(() => [
                    e.actionsContentComponent ? (a(), y(k(e.actionsContentComponent), {
                      key: 0,
                      "confirmation-button-disabled": u.value,
                      cancel: r,
                      confirm: o
                    }, null, 8, ["confirmation-button-disabled"])) : (a(), x(j, { key: 1 }, [
                      s(c(R)),
                      s(c(D), m(e.cancellationButtonProps, { onClick: r }), {
                        default: d(() => [
                          P(g(e.cancellationText), 1)
                        ]),
                        _: 1
                      }, 16),
                      s(c(D), m({
                        color: "primary",
                        disabled: u.value
                      }, e.confirmationButtonProps, { onClick: o }), {
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
    const n = e, l = t, i = b(!0), o = M(() => ({
      ...n.snackbarProps,
      onAfterLeave() {
        var r, u;
        (u = (r = n.snackbarProps).onAfterLeave) == null || u.call(r), l("close");
      }
    }));
    return (r, u) => (a(), y(c(K), { theme: e.theme }, {
      default: d(() => [
        s(c(G), m(o.value, {
          modelValue: i.value,
          "onUpdate:modelValue": u[1] || (u[1] = (f) => i.value = f)
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
              s(c(D), m({
                variant: "text",
                text: e.closeButtonText
              }, e.closeButtonProps, {
                onClick: u[0] || (u[0] = (f) => i.value = !1)
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
function w(e, t, n, l) {
  const i = s(e, {
    key: Math.random(),
    ...t
  });
  return n && n._context && (i.appContext = n._context), l ? (n._container.appendChild(l), q(i, l)) : q(i, n._container.firstElementChild), { vNode: i };
}
const re = {
  install(e, t) {
    function n(o) {
      const r = document.createElement("div");
      return new Promise((u) => new Promise((f) => {
        w(X, {
          ...T(o, (t == null ? void 0 : t.dialog) ?? {}),
          resolve: f
        }, e, r);
      }).then((f) => {
        e._container.removeChild(r), q(null, r), u(f);
      }));
    }
    function l(o) {
      const r = document.createElement("div");
      return new Promise((u) => new Promise((f) => {
        w(Y, {
          ...T(o, (t == null ? void 0 : t.confirmDialog) ?? {}),
          resolve: f
        }, e, r);
      }).then((f) => {
        e._container.removeChild(r), q(null, r), u(f);
      }));
    }
    function i(o) {
      const r = document.createElement("div");
      w(Z, {
        ...T(o, (t == null ? void 0 : t.snackbar) ?? {}),
        onClose() {
          e._container.removeChild(r), q(null, r);
        }
      }, e, r);
    }
    e.provide("ConfirmDialogKey", {
      mountDialog: n,
      mountConfirmDialog: l,
      mountSnackbar: i
    }), e.config.globalProperties.$dialog = (o) => n(o), e.config.globalProperties.$confirm = (o) => l(o), e.config.globalProperties.$toast = (o) => i(o);
  }
};
function ie() {
  const e = A("ConfirmDialogKey"), t = E();
  function n(l) {
    if (!e)
      throw new Error("Missing dialog instance");
    return e.mountDialog({
      theme: t.name.value,
      ...l
    });
  }
  return n;
}
function le() {
  const e = A("ConfirmDialogKey"), t = E();
  function n(l) {
    if (!e)
      throw new Error("Missing dialog instance");
    return e.mountConfirmDialog({
      theme: t.name.value,
      ...l
    });
  }
  return n;
}
function ue() {
  const e = A("ConfirmDialogKey"), t = E();
  function n(l) {
    if (!e)
      throw new Error("Missing dialog instance");
    return e.mountSnackbar({
      theme: t.name.value,
      ...l
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

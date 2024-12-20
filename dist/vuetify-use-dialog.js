import { defineComponent as O, ref as g, openBlock as a, createBlock as m, unref as c, withCtx as f, createVNode as d, mergeProps as s, resolveDynamicComponent as b, nextTick as $, onMounted as I, computed as M, normalizeProps as y, guardReactiveProps as V, createTextVNode as v, toDisplayString as P, createElementBlock as x, Fragment as j, createCommentVNode as F, createSlots as N, render as k, inject as A } from "vue";
import { useTheme as K } from "vuetify";
import { VThemeProvider as E, VDialog as U, VCard as H, VCardText as L, VCardActions as z, VSpacer as R, VBtn as D, VSnackbar as G } from "vuetify/components";
import { VCardTitle as J } from "vuetify/lib/components/VCard/index.mjs";
import { VTextField as Q } from "vuetify/lib/components/VTextField/index.mjs";
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
    const t = e, n = g(!0);
    function l(o) {
      t.resolve(o), n.value = !1;
    }
    function i(o) {
      o || $(() => {
        t.resolve(!1);
      });
    }
    return (o, r) => (a(), m(c(E), { theme: e.theme }, {
      default: f(() => [
        d(c(U), s(e.dialogProps, {
          modelValue: n.value,
          "onUpdate:modelValue": [
            r[1] || (r[1] = (u) => n.value = u),
            i
          ]
        }), {
          default: f(() => [
            (a(), m(b(e.component), s(e.componentProps, {
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
    const t = e, n = g(!0), l = g(null), i = g("");
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
    function q(C) {
      C || $(() => {
        t.resolve(!1);
      });
    }
    return (C, p) => (a(), m(c(E), { theme: e.theme }, {
      default: f(() => [
        d(c(U), s(e.dialogProps, {
          modelValue: n.value,
          "onUpdate:modelValue": [
            p[1] || (p[1] = (h) => n.value = h),
            q
          ]
        }), {
          default: f(() => [
            d(c(H), y(V(e.cardProps)), {
              default: f(() => [
                e.titleComponent ? (a(), m(b(e.titleComponent), y(s({ key: 0 }, e.titleComponentProps)), null, 16)) : (a(), m(J, y(s({ key: 1 }, e.cardTitleProps)), {
                  default: f(() => [
                    v(P(e.title), 1)
                  ]),
                  _: 1
                }, 16)),
                d(c(L), y(V(e.cardTextProps)), {
                  default: f(() => [
                    e.contentComponent ? (a(), m(b(e.contentComponent), y(s({ key: 0 }, e.contentComponentProps)), null, 16)) : (a(), x(j, { key: 1 }, [
                      e.content ? (a(), x(j, { key: 0 }, [
                        v(P(e.content), 1)
                      ], 64)) : F("", !0),
                      e.confirmationKeyword ? (a(), m(Q, s({
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
                d(c(z), y(V(e.cardActionsProps)), {
                  default: f(() => [
                    e.actionsContentComponent ? (a(), m(b(e.actionsContentComponent), {
                      key: 0,
                      "confirmation-button-disabled": u.value,
                      cancel: r,
                      confirm: o
                    }, null, 8, ["confirmation-button-disabled"])) : (a(), x(j, { key: 1 }, [
                      d(c(R)),
                      d(c(D), s(e.cancellationButtonProps, { onClick: r }), {
                        default: f(() => [
                          v(P(e.cancellationText), 1)
                        ]),
                        _: 1
                      }, 16),
                      d(c(D), s({
                        color: "primary",
                        disabled: u.value
                      }, e.confirmationButtonProps, { onClick: o }), {
                        default: f(() => [
                          v(P(e.confirmationText), 1)
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
    const n = e, l = t, i = g(!0), o = M(() => ({
      ...n.snackbarProps,
      onAfterLeave() {
        var r, u;
        (u = (r = n.snackbarProps).onAfterLeave) == null || u.call(r), l("close");
      }
    }));
    return (r, u) => (a(), m(c(E), { theme: e.theme }, {
      default: f(() => [
        d(c(G), s(o.value, {
          modelValue: i.value,
          "onUpdate:modelValue": u[1] || (u[1] = (q) => i.value = q)
        }), N({
          default: f(() => [
            e.contentComponent ? (a(), m(b(e.contentComponent), { key: 0 })) : (a(), x(j, { key: 1 }, [
              v(P(e.text), 1)
            ], 64))
          ]),
          _: 2
        }, [
          e.showCloseButton ? {
            name: "actions",
            fn: f(() => [
              d(c(D), s({
                variant: "text",
                text: e.closeButtonText
              }, e.closeButtonProps, {
                onClick: u[0] || (u[0] = (q) => i.value = !1)
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
  const i = d(e, {
    key: Math.random(),
    ...t
  });
  return n && n._context && (i.appContext = n._context), l ? (n._container.appendChild(l), k(i, l)) : k(i, n._container.firstElementChild), { vNode: i };
}
const re = {
  install(e, t) {
    function n(o) {
      return new Promise((r) => new Promise((u) => {
        w(X, {
          ...T(o, (t == null ? void 0 : t.dialog) ?? {}),
          resolve: u
        }, e);
      }).then((u) => {
        k(null, e._container.firstElementChild), r(u);
      }));
    }
    function l(o) {
      return new Promise((r) => new Promise((u) => {
        w(Y, {
          ...T(o, (t == null ? void 0 : t.confirmDialog) ?? {}),
          resolve: u
        }, e);
      }).then((u) => {
        k(null, e._container.firstElementChild), r(u);
      }));
    }
    function i(o) {
      const r = document.createElement("div");
      w(Z, {
        ...T(o, (t == null ? void 0 : t.snackbar) ?? {}),
        onClose() {
          e._container.removeChild(r), k(null, r);
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
  const e = A("ConfirmDialogKey"), t = K();
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
  const e = A("ConfirmDialogKey"), t = K();
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
  const e = A("ConfirmDialogKey"), t = K();
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

import { createVNode, render, getCurrentInstance, ref, h, inject } from 'vue';
import { VSnackbar, VThemeProvider, VBtn } from 'vuetify/components';

/**
 * @typedef {import('vue').Component} Component
 */

/**
 * @typedef {Object} SnackbarOptions
 * @property {string} [text]
 * @property {Component|string} [contentComponent]
 * @property {Record<string, any>} [snackbarProps]
 * @property {boolean} [showCloseButton]
 * @property {Record<string, any>} [closeButtonProps]
 * @property {string} [closeButtonText]
 * @property {string} [theme]
 * @property {import('vue').AppContext} [appContext]
 */

/**
 * @callback UseSnackbarFn
 * @param {SnackbarOptions} [options]
 * @returns {void}
 */

/**
 * Creates a snackbar function that mounts a vuetify snackbar when called.
 * @param {SnackbarOptions} [globalOptions] Options applied to all snackbars triggered by the returned function.
 * @returns {UseSnackbarFn}
 */
export function useSnackbar(globalOptions = {}) {
  const instance = getCurrentInstance();
  let injectedOptions = {};
  if (instance) {
    injectedOptions = inject('vuetifyUseDialogOptions', {});
  }
  
  const finalGlobalOptions = { ...(injectedOptions.snackbar || {}), ...globalOptions };

  return function toast(options = {}) {
    const mergedOptions = { ...finalGlobalOptions, ...options };
    const { 
      text = '', 
      contentComponent, 
      snackbarProps = {}, 
      showCloseButton = true, 
      closeButtonProps = {}, 
      closeButtonText = 'Close', 
      theme 
    } = mergedOptions;

    const mountNode = document.createElement('div');
    mountNode.classList.add('vuetify-use-dialog-mount');
    document.body.appendChild(mountNode);

    const isOpen = ref(true);
    let isClosed = false;

    const closeSnackbar = () => {
      isOpen.value = false;
      if (!isClosed) {
        isClosed = true;
        setTimeout(() => {
          render(null, mountNode);
          if (mountNode.parentNode) {
            mountNode.parentNode.removeChild(mountNode);
          }
        }, 500);
      }
    };

    const WrappedSnackbar = {
      setup() {
        return () => {
          const finalSnackbarProps = {
            ...snackbarProps,
            modelValue: isOpen.value,
            'onUpdate:modelValue': (val) => {
              isOpen.value = val;
              if (!val) closeSnackbar();
              if (snackbarProps['onUpdate:modelValue']) {
                snackbarProps['onUpdate:modelValue'](val);
              }
            },
            onAfterLeave: () => {
              if (snackbarProps.onAfterLeave) snackbarProps.onAfterLeave();
              closeSnackbar();
            }
          };

          const defaultSlot = () => contentComponent ? h(contentComponent) : text;
          
          const actionsSlot = showCloseButton ? ({ attrs }) => h(VBtn, {
            ...attrs,
            variant: 'text',
            text: closeButtonText,
            ...closeButtonProps,
            onClick: () => {
              isOpen.value = false;
              closeSnackbar(); // onAfterLeave handles standard close, but click immediately fires cleanup
            }
          }) : undefined;

          let snackbarContent = h(VSnackbar, finalSnackbarProps, { 
            default: defaultSlot, 
            ...(showCloseButton ? { actions: actionsSlot } : {}) 
          });

          if (theme) {
            return h(VThemeProvider, { theme }, { default: () => snackbarContent });
          }

          return snackbarContent;
        };
      }
    };

    const vnode = createVNode(WrappedSnackbar);
    if (options.appContext) {
      vnode.appContext = options.appContext;
    } else if (instance && instance.appContext) {
      vnode.appContext = instance.appContext;
    }
    render(vnode, mountNode);
  };
}

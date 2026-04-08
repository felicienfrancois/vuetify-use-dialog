import { createVNode, render, getCurrentInstance, ref, h, inject } from 'vue';
import { VDialog, VThemeProvider } from 'vuetify/components';

/**
 * Creates a dialog function that mounts a component in a vuetify dialog when called.
 * @param {import('./index.js').DialogOptions} [globalOptions] Options applied to all dialogs triggered by the returned function.
 * @returns {import('./index.js').UseDialogFn}
 */
export function useDialog(globalOptions = {}) {
  const instance = getCurrentInstance();
  let injectedOptions = {};
  if (instance) {
    injectedOptions = inject('vuetifyUseDialogOptions', {});
  }
  
  const finalGlobalOptions = { ...(injectedOptions.dialog || {}), ...globalOptions };

  return function dialog(options = {}) {
    return new Promise((resolve) => {
      const mergedOptions = { ...finalGlobalOptions, ...options };
      const { component, componentProps = {}, dialogProps = {}, theme } = mergedOptions;

      if (!component) {
        console.warn('[vuetify-use-dialog] No component provided.');
        return resolve(undefined);
      }

      // Create a mount point and append to the DOM
      const mountNode = document.createElement('div');
      mountNode.classList.add('vuetify-use-dialog-mount');
      document.body.appendChild(mountNode);

      const isOpen = ref(true);
      let isResolved = false;

      // Function to cleanup and resolve
      const closeDialog = (result) => {
        isOpen.value = false;
        
        if (!isResolved) {
          isResolved = true;
          resolve(result);
          
          // Wait for Vuetify's leave transition to finish before destroying
          setTimeout(() => {
            render(null, mountNode);
            if (mountNode.parentNode) {
              mountNode.parentNode.removeChild(mountNode);
            }
          }, 500); // 500ms safety timeout for animation
        }
      };

      // Wrap the component in a VDialog
      const WrappedDialog = {
        setup() {
          return () => {
            const passedProps = {
              ...dialogProps,
              modelValue: isOpen.value,
              'onUpdate:modelValue': (val) => {
                isOpen.value = val;
                if (!val) {
                  closeDialog(false); // resolve false if closed outside
                }
                if (dialogProps['onUpdate:modelValue']) {
                  dialogProps['onUpdate:modelValue'](val);
                }
              }
            };

            const dialogContent = h(VDialog, passedProps, {
              default: () => h(component, {
                ...componentProps,
                isActive: isOpen.value,
                'onUpdate:isActive': (val) => { isOpen.value = val; },
                onClose: (result) => {
                  closeDialog(result);
                }
              })
            });

            if (theme) {
                return h(VThemeProvider, { theme }, { default: () => dialogContent });
            }
            return dialogContent;
          };
        }
      };

      // Create app-level VNode
      const vnode = createVNode(WrappedDialog);
      if (options.appContext) {
        vnode.appContext = options.appContext;
      } else if (instance && instance.appContext) {
        vnode.appContext = instance.appContext;
      }

      // Render the virtual dom root into the real dom
      render(vnode, mountNode);
    });
  };
}

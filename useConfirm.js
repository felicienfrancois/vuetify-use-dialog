import { useDialog } from './useDialog.js';
import ConfirmDialog from './ConfirmDialog.vue';
import { inject, getCurrentInstance } from 'vue';

/**
 * Creates a confirm dialog function.
 * @param {import('./index.js').ConfirmDialogOptions} [globalOptions] 
 * @returns {import('./index.js').UseConfirmFn}
 */
export function useConfirm(globalOptions = {}) {
  const dialog = useDialog(); // inherit useDialog setup, including context
  const instance = getCurrentInstance();
  let injectedOptions = {};
  if (instance) {
    injectedOptions = inject('vuetifyUseDialogOptions', {});
  }
  
  const finalGlobalOptions = { ...(injectedOptions.confirmDialog || {}), ...globalOptions };

  return function confirm(options = {}) {
    const mergedOptions = { ...finalGlobalOptions, ...options };
    const { dialogProps = {}, theme, appContext, ...componentProps } = mergedOptions;
    
    return dialog({
      component: ConfirmDialog,
      componentProps,
      dialogProps,
      theme,
      appContext
    });
  };
}

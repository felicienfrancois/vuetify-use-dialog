import { useDialog } from './useDialog.js';
import ConfirmDialog from './ConfirmDialog.vue';
import { inject, getCurrentInstance } from 'vue';

/**
 * @typedef {import('./useDialog.js').DialogOptions} DialogOptions
 * @typedef {import('vue').Component} Component
 */

/**
 * @typedef {Object} ConfirmDialogOptions
 * @property {string} [title]
 * @property {Component} [titleComponent]
 * @property {Record<string, any>} [titleComponentProps]
 * @property {string} [content]
 * @property {Component} [contentComponent]
 * @property {Record<string, any>} [contentComponentProps]
 * @property {Component} [actionsContentComponent]
 * @property {string} [confirmationText]
 * @property {string} [cancellationText]
 * @property {Record<string, any>} [dialogProps]
 * @property {Record<string, any>} [cardProps]
 * @property {Record<string, any>} [cardTitleProps]
 * @property {Record<string, any>} [cardTextProps]
 * @property {Record<string, any>} [cardActionsProps]
 * @property {Record<string, any>} [cancellationButtonProps]
 * @property {Record<string, any>} [confirmationButtonProps]
 * @property {string} [confirmationKeyword]
 * @property {Record<string, any>} [confirmationKeywordTextFieldProps]
 * @property {string} [theme]
 * @property {import('vue').AppContext} [appContext]
 */

/**
 * @callback UseConfirmFn
 * @param {ConfirmDialogOptions} [options]
 * @returns {Promise<boolean>}
 */

/**
 * Creates a confirm dialog function.
 * @param {ConfirmDialogOptions} [globalOptions] 
 * @returns {UseConfirmFn}
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

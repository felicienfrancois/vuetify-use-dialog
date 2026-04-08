import { useDialog } from './useDialog.js';
import { useConfirm } from './useConfirm.js';
import { useSnackbar } from './useSnackbar.js';
import ConfirmDialog from './ConfirmDialog.vue';

export { useDialog, useConfirm, useSnackbar, ConfirmDialog };

export default {
  install(app, globalOptions = {}) {
    app.provide('vuetifyUseDialogOptions', globalOptions);

    app.config.globalProperties.$dialog = function (options = {}) {
      const dialog = useDialog(globalOptions);
      return dialog({ ...options, appContext: app._context });
    };

    app.config.globalProperties.$confirm = function (options = {}) {
      const confirm = useConfirm(globalOptions);
      return confirm({ ...options, appContext: app._context });
    };

    app.config.globalProperties.$toast = function (options = {}) {
      const toast = useSnackbar(globalOptions);
      return toast({ ...options, appContext: app._context });
    };
  }
};

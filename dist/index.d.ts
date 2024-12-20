import { ConfirmDialogOptions, DialogOptions, SnackbarOptions } from './utils';
import { Plugin } from 'vue';

declare const plugin: Plugin;
declare function useDialog(): (options: DialogOptions) => Promise<undefined>;
declare function useConfirm(): (options: ConfirmDialogOptions) => Promise<undefined>;
declare function useSnackbar(): (options: SnackbarOptions) => void;
export { plugin as default, useDialog, useConfirm, useSnackbar, };

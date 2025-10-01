import { Plugin } from 'vue';
import { ConfirmDialogOptions, DialogOptions, SnackbarOptions } from './utils';

declare const plugin: Plugin;
declare function useDialog(): (options: DialogOptions) => Promise<undefined>;
declare function useConfirm(): (options: ConfirmDialogOptions) => Promise<undefined>;
declare function useSnackbar(): (options: SnackbarOptions) => void;
export { plugin as default, useDialog, useConfirm, useSnackbar, };

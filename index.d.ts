import { Component, AppContext, App } from 'vue';

export interface DialogOptions {
  /** Vue Component to mount inside the dialog */
  component?: Component;
  /** Props to pass to the component */
  componentProps?: Record<string, any>;
  /** Props to pass to the v-dialog component */
  dialogProps?: Record<string, any>;
  /** Theme to use */
  theme?: string;
  /** Optional application context */
  appContext?: AppContext;
}

export type UseDialogFn = (options?: DialogOptions) => Promise<any>;

export interface ConfirmDialogOptions {
  title?: string;
  titleComponent?: Component;
  titleComponentProps?: Record<string, any>;
  content?: string;
  contentComponent?: Component;
  contentComponentProps?: Record<string, any>;
  actionsContentComponent?: Component;
  confirmationText?: string;
  cancellationText?: string;
  dialogProps?: Record<string, any>;
  cardProps?: Record<string, any>;
  cardTitleProps?: Record<string, any>;
  cardTextProps?: Record<string, any>;
  cardActionsProps?: Record<string, any>;
  cancellationButtonProps?: Record<string, any>;
  confirmationButtonProps?: Record<string, any>;
  confirmationKeyword?: string;
  confirmationKeywordTextFieldProps?: Record<string, any>;
  theme?: string;
  appContext?: AppContext;
}

export type UseConfirmFn = (options?: ConfirmDialogOptions) => Promise<boolean>;

export interface SnackbarOptions {
  text?: string;
  contentComponent?: Component | string;
  snackbarProps?: Record<string, any>;
  showCloseButton?: boolean;
  closeButtonProps?: Record<string, any>;
  closeButtonText?: string;
  theme?: string;
  appContext?: AppContext;
}

export type UseSnackbarFn = (options?: SnackbarOptions) => void;

export function useDialog(globalOptions?: DialogOptions): UseDialogFn;
export function useConfirm(globalOptions?: ConfirmDialogOptions): UseConfirmFn;
export function useSnackbar(globalOptions?: SnackbarOptions): UseSnackbarFn;

export const ConfirmDialog: Component;

export interface VuetifyUseDialogGlobalOptions {
  dialog?: DialogOptions;
  confirmDialog?: ConfirmDialogOptions;
  snackbar?: SnackbarOptions;
}

declare const plugin: {
  install(app: App, globalOptions?: VuetifyUseDialogGlobalOptions): void;
};

export default plugin;

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $dialog: UseDialogFn;
    $confirm: UseConfirmFn;
    $toast: UseSnackbarFn;
  }
}

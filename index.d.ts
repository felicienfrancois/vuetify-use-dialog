import type { Component, AppContext, App } from "vue";
import type { ComponentProps } from "vue-component-type-helpers";
import type { VDialog, VCard, VCardTitle, VCardText, VCardActions, VBtn, VTextField, VSnackbar } from "vuetify/components";
type DialogProps = InstanceType<typeof VDialog>["$props"];
type CardProps = InstanceType<typeof VCard>["$props"];
type CardTitleProps = InstanceType<typeof VCardTitle>["$props"];
type CardTextProps = InstanceType<typeof VCardText>["$props"];
type CardActionsProps = InstanceType<typeof VCardActions>["$props"];
type BtnProps = InstanceType<typeof VBtn>["$props"];
type TextFieldProps = InstanceType<typeof VTextField>["$props"];
type SnackbarProps = InstanceType<typeof VSnackbar>["$props"];

export interface DialogOptions<C extends Component = Component> {
  component?: C;
  componentProps?: ComponentProps<C>;
  dialogProps?: DialogProps;
  theme?: string;
  appContext?: AppContext;
}

export type UseDialogFn = <C extends Component = Component>(options?: DialogOptions<C>) => Promise<any>;

export interface ConfirmDialogOptions<
  TitleC extends Component = Component,
  ContentC extends Component = Component,
  ActionsC extends Component = Component,
> {
  title?: string;
  titleComponent?: TitleC;
  titleComponentProps?: ComponentProps<TitleC>;

  content?: string;
  contentComponent?: ContentC;
  contentComponentProps?: ComponentProps<ContentC>;

  actionsContentComponent?: ActionsC;

  confirmationText?: string;
  cancellationText?: string;

  dialogProps?: DialogProps;
  cardProps?: CardProps;
  cardTitleProps?: CardTitleProps;
  cardTextProps?: CardTextProps;
  cardActionsProps?: CardActionsProps;
  cancellationButtonProps?: BtnProps;
  confirmationButtonProps?: BtnProps;

  confirmationKeyword?: string;
  confirmationKeywordTextFieldProps?: TextFieldProps;

  theme?: string;
  appContext?: AppContext;
}

export type UseConfirmFn = <TitleC extends Component = Component, ContentC extends Component = Component, ActionsC extends Component = Component>(
  options?: ConfirmDialogOptions<TitleC, ContentC, ActionsC>
) => Promise<boolean>;

export interface SnackbarOptions<ContentC extends Component = Component> {
  text?: string;
  contentComponent?: ContentC;
  contentComponentProps?: ComponentProps<ContentC>;
  snackbarProps?: SnackbarProps;
  showCloseButton?: boolean;
  closeButtonProps?: BtnProps;
  closeButtonText?: string;
  theme?: string;
  appContext?: AppContext;
}

export type UseSnackbarFn = <ContentC extends Component = Component>(options?: SnackbarOptions<ContentC>) => void;

export function useDialog<C extends Component = Component>(globalOptions?: DialogOptions<C>): UseDialogFn;

export function useConfirm<TitleC extends Component = Component, ContentC extends Component = Component, ActionsC extends Component = Component>(
  globalOptions?: ConfirmDialogOptions<TitleC, ContentC, ActionsC>
): UseConfirmFn;

export function useSnackbar<ContentC extends Component = Component>(globalOptions?: SnackbarOptions<ContentC>): UseSnackbarFn;

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

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $dialog: UseDialogFn;
    $confirm: UseConfirmFn;
    $toast: UseSnackbarFn;
  }
}

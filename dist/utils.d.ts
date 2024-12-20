import { VBtn, VCard, VCardActions, VCardText, VCardTitle, VDialog, VSnackbar, VTextField } from 'vuetify/components';
import { AllowedComponentProps, App, Component, VNode, VNodeProps } from 'vue';

type ExtractProps<TComponent> = TComponent extends new () => {
    $props: infer P;
} ? Omit<P, keyof VNodeProps | keyof AllowedComponentProps> : never;
export interface ConfirmDialogOptions {
    title?: string;
    titleComponent?: Component;
    titleComponentProps?: Record<string, any>;
    content?: string;
    contentComponent?: Component;
    contentComponentProps?: Record<string, any>;
    actionContentComponent?: Component;
    confirmationText?: string;
    cancellationText?: string;
    dialogProps?: ExtractProps<typeof VDialog>;
    cardProps?: ExtractProps<typeof VCard>;
    cardTitleProps?: ExtractProps<typeof VCardTitle>;
    cardTextProps?: ExtractProps<typeof VCardText>;
    cardActionsProps?: ExtractProps<typeof VCardActions>;
    cancellationButtonProps?: ExtractProps<typeof VBtn>;
    confirmationButtonProps?: ExtractProps<typeof VBtn>;
    confirmationKeyword?: string;
    confirmationKeywordTextFieldProps?: ExtractProps<typeof VTextField>;
    theme?: string;
    /**
     * @internal
     */
    resolve?: (value: boolean) => void;
}
export interface DialogOptions {
    component?: Component;
    componentProps?: Record<string, any>;
    dialogProps?: ExtractProps<typeof VDialog>;
    theme?: string;
    /**
     * @internal
     */
    resolve?: (value: boolean) => void;
}
export interface SnackbarOptions {
    text?: string;
    contentComponent?: Component;
    snackbarProps?: ExtractProps<typeof VSnackbar>;
    showCloseButton?: boolean;
    closeButtonProps?: ExtractProps<typeof VBtn>;
    closeButtonText?: string;
    theme?: string;
    /**
     * @internal
     */
    onClose?: () => void;
}
export declare function mount(component: Component, props: DialogOptions & {
    promiseId: string;
} | ConfirmDialogOptions & {
    promiseId: string;
} | SnackbarOptions, app: App, el?: HTMLDivElement): {
    vNode: VNode<import('vue').RendererNode, import('vue').RendererElement, {
        [key: string]: any;
    }>;
};
export interface ConfirmDialogKeyValue {
    mountDialog: (options: DialogOptions) => Promise<undefined>;
    mountConfirmDialog: (options: ConfirmDialogOptions) => Promise<undefined>;
    mountSnackbar: (options: SnackbarOptions) => void;
    state: {
        promiseIds: Map<string, {
            resolve: ((value: unknown) => void);
            reject: ((value: unknown) => void);
        }>;
    };
}
export {};

import { Component, PropType } from 'vue';

declare const _default: import('vue').DefineComponent<{
    text: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    contentComponent: {
        type: PropType<Component>;
        required: false;
    };
    snackbarProps: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    showCloseButton: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    closeButtonProps: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    closeButtonText: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    theme: {
        type: StringConstructor;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    text: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    contentComponent: {
        type: PropType<Component>;
        required: false;
    };
    snackbarProps: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    showCloseButton: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    closeButtonProps: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    closeButtonText: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    theme: {
        type: StringConstructor;
        required: true;
    };
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
}, {
    text: string;
    snackbarProps: Record<string, any>;
    showCloseButton: boolean;
    closeButtonProps: Record<string, any>;
    closeButtonText: string;
}, {}>;
export default _default;

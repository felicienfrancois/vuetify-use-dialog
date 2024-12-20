import { Component, PropType } from 'vue';

declare const _default: import('vue').DefineComponent<{
    title: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    titleComponent: {
        type: PropType<Component>;
        required: false;
    };
    titleComponentProps: {
        type: ObjectConstructor;
        required: false;
    };
    content: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    contentComponent: {
        type: PropType<Component>;
        required: false;
    };
    contentComponentProps: {
        type: ObjectConstructor;
        required: false;
    };
    confirmationKeyword: {
        type: StringConstructor;
        required: false;
    };
    confirmationKeywordTextFieldProps: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    confirmationText: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    cancellationText: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    dialogProps: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    cardProps: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    cardTitleProps: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    cardTextProps: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    cardActionsProps: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    actionsContentComponent: {
        type: PropType<Component>;
        required: false;
    };
    cancellationButtonProps: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    confirmationButtonProps: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    theme: {
        type: StringConstructor;
        required: true;
    };
    resolve: {
        type: PropType<(value: boolean) => void>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    titleComponent: {
        type: PropType<Component>;
        required: false;
    };
    titleComponentProps: {
        type: ObjectConstructor;
        required: false;
    };
    content: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    contentComponent: {
        type: PropType<Component>;
        required: false;
    };
    contentComponentProps: {
        type: ObjectConstructor;
        required: false;
    };
    confirmationKeyword: {
        type: StringConstructor;
        required: false;
    };
    confirmationKeywordTextFieldProps: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    confirmationText: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    cancellationText: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    dialogProps: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    cardProps: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    cardTitleProps: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    cardTextProps: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    cardActionsProps: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    actionsContentComponent: {
        type: PropType<Component>;
        required: false;
    };
    cancellationButtonProps: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    confirmationButtonProps: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    theme: {
        type: StringConstructor;
        required: true;
    };
    resolve: {
        type: PropType<(value: boolean) => void>;
        required: true;
    };
}>>, {
    title: string;
    content: string;
    confirmationKeywordTextFieldProps: Record<string, any>;
    confirmationText: string;
    cancellationText: string;
    dialogProps: Record<string, any>;
    cardProps: Record<string, any>;
    cardTitleProps: Record<string, any>;
    cardTextProps: Record<string, any>;
    cardActionsProps: Record<string, any>;
    cancellationButtonProps: Record<string, any>;
    confirmationButtonProps: Record<string, any>;
}, {}>;
export default _default;

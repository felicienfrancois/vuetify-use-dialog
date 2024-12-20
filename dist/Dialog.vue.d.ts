import { Component, PropType } from 'vue';

declare const _default: import('vue').DefineComponent<{
    component: {
        type: PropType<Component>;
        required: true;
    };
    componentProps: {
        type: ObjectConstructor;
        required: false;
    };
    dialogProps: {
        type: ObjectConstructor;
        required: false;
    };
    theme: {
        type: StringConstructor;
        required: true;
    };
    resolve: {
        type: PropType<(value: any) => void>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    component: {
        type: PropType<Component>;
        required: true;
    };
    componentProps: {
        type: ObjectConstructor;
        required: false;
    };
    dialogProps: {
        type: ObjectConstructor;
        required: false;
    };
    theme: {
        type: StringConstructor;
        required: true;
    };
    resolve: {
        type: PropType<(value: any) => void>;
        required: true;
    };
}>>, {}, {}>;
export default _default;

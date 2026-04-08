# @felicienfrancois/vuetify-use-dialog

A highly simple and effective Vue 3 module that simplifies the creation of dynamically mounted dialogs, confirm dialogs, and snackbars in [Vuetify 3](https://v3.vuetifyjs.com/).

It leverages promises, meaning the dialog will return whatever data your component emits through the `close` event! All methods are fully type-compliant and purely function-based without requiring explicit template definitions.

## Installation

```sh
npm install @felicienfrancois/vuetify-use-dialog
```

## Usage

You can use the functions directly as composables without needing a plugin installation!

### 1. Mounting custom components (`useDialog`)

```vue
<script setup>
import MyComponentDialog from "@/components/MyComponentDialog.vue";
import { useDialog } from "@felicienfrancois/vuetify-use-dialog";

// 1. Initialize the composable
const dialog = useDialog({
  // Global options (optional)
  dialogProps: {
    maxWidth: "800px",
  },
});

async function showDialog() {
  // 2. Call the dialog function and wait for the result
  const result = await dialog({
    component: MyComponentDialog,
    componentProps: {
      my_first_prop: "test",
    },
    dialogProps: {
      maxWidth: "700px", // overrides global option
      persistent: true,
    },
  });

  console.log("Dialog closed with result:", result);
}
</script>

<template>
  <v-btn @click="showDialog">Open Dialog</v-btn>
</template>
```

#### In Your Component (`MyComponentDialog.vue`)

Simply emit the `close` event with whatever data you want returned!

```vue
<script setup>
const props = defineProps(["my_first_prop"]);
const emit = defineEmits(["close"]);

function save() {
  // Doing something...
  const data = { success: true };

  // Emit 'close' to resolve the promise!
  emit("close", data);
}

function cancel() {
  emit("close", null);
}
</script>

<template>
  <v-card :title="'My Dialog: ' + my_first_prop">
    <v-card-text>
      <!-- content -->
    </v-card-text>
    <v-card-actions>
      <v-btn @click="cancel">Cancel</v-btn>
      <v-btn @click="save" color="primary">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>
```

### 2. Built-in Confirm Dialog (`useConfirm`)

```vue
<script setup>
import { useConfirm, useSnackbar } from "@felicienfrancois/vuetify-use-dialog";

const createConfirm = useConfirm();
const createSnackbar = useSnackbar();

async function handleConfirm() {
  const isConfirmed = await createConfirm({ content: "This action is permanent!" });

  if (!isConfirmed) return;

  createSnackbar({ text: "Confirmed" });
}
</script>

<template>
  <v-btn @click="handleConfirm">Confirm</v-btn>
</template>
```

### 3. Built-in Snackbar (`useSnackbar`)

```vue
<script setup>
import { useSnackbar } from "@felicienfrancois/vuetify-use-dialog";

const createSnackbar = useSnackbar();

function showToast() {
  createSnackbar({ text: "Your file has been saved!" });
}
</script>

<template>
  <v-btn @click="showToast">Show Toast</v-btn>
</template>
```

## Global Setup (Optional Plugin)

You can optionally install the plugin to provide global initial defaults or use the methods via the default Options API using `this.$dialog`, `this.$confirm`, and `this.$toast`.

```ts
import { createApp } from "vue";
import { createVuetify } from "vuetify";
import VuetifyUseDialog from "@felicienfrancois/vuetify-use-dialog";

import App from "./App.vue";

const app = createApp(App);
const vuetify = createVuetify();

app.use(vuetify);
app.use(VuetifyUseDialog, {
  dialog: {
    // global useDialog options
  },
  confirmDialog: {
    // global useConfirm options
    title: "Are you sure?",
  },
  snackbar: {
    // global useSnackbar options
    snackbarProps: {
      timeout: 2000,
    },
  },
});

app.mount("#app");
```

## Options

### `useDialog`

| Name             | Type        | Default | Description                                         |
| ---------------- | ----------- | ------- | --------------------------------------------------- |
| `component`      | `Component` | `-`     | The Vue component to render inside the dialog.      |
| `componentProps` | `Object`    | `{}`    | Props bound directly to your component.             |
| `dialogProps`    | `Object`    | `{}`    | Props bound to the underlying `<v-dialog>`.         |
| `theme`          | `String`    | `-`     | Wraps the dialog content in a `<v-theme-provider>`. |

### `useConfirm`

| Name                                    | Type        | Default           | Description                                                                                                                                             |
| --------------------------------------- | ----------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`title`**                             | `string`    | `'Are you sure?'` | Dialog title.                                                                                                                                           |
| **`titleComponent`**                    | `Component` | `-`               | Custom title component.                                                                                                                                 |
| **`titleComponentProps`**               | `object`    | `{}`              | Custom title component props.                                                                                                                           |
| **`content`**                           | `string`    | `''`              | Dialog content.                                                                                                                                         |
| **`contentComponent`**                  | `Component` | `-`               | Custom content component.                                                                                                                               |
| **`contentComponentProps`**             | `object`    | `{}`              | Custom content component props.                                                                                                                         |
| **`confirmationText`**                  | `string`    | `'Ok'`            | Confirmation button caption.                                                                                                                            |
| **`cancellationText`**                  | `string`    | `'Cancel'`        | Cancellation button caption.                                                                                                                            |
| **`dialogProps`**                       | `object`    | `{}`              | [VDialog](https://v3.vuetifyjs.com/en/api/v-dialog/#props) props.                                                                                       |
| **`cardProps`**                         | `object`    | `{}`              | [VCard](https://v3.vuetifyjs.com/en/api/v-card/#props) props.                                                                                           |
| **`confirmationButtonProps`**           | `object`    | `{}`              | [VBtn](https://v3.vuetifyjs.com/en/api/v-btn/#props) props for the confirmation button.                                                                 |
| **`cancellationButtonProps`**           | `object`    | `{}`              | [VBtn](https://v3.vuetifyjs.com/en/api/v-btn/#props) props for the cancellation button.                                                                 |
| **`cardTitleProps`**                    | `object`    | `{}`              | [VCardTitle](https://v3.vuetifyjs.com/en/api/v-card-title/#props) props for the dialog title.                                                           |
| **`cardTextProps`**                     | `object`    | `{}`              | [VCardText](https://v3.vuetifyjs.com/en/api/v-card-text/#props) props for the dialog content.                                                           |
| **`confirmationKeyword`**               | `string`    | `-`               | If provided, the confirm button will be disabled by default & an additional textfield will be rendered. The textfield must match `confirmationKeyword`. |
| **`confirmationKeywordTextFieldProps`** | `object`    | `{}`              | [VTextField](https://v3.vuetifyjs.com/en/api/v-text-field/#props) props for the confirmation keyword textfield.                                         |
| **`cardActionsProps`**                  | `object`    | `{}`              | [VCardActions](https://v3.vuetifyjs.com/en/api/v-card-actions/#props) props.                                                                            |
| **`actionsContentComponent`**           | `Component` | `-`               | Custom actions content component.                                                                                                                       |

### `useSnackbar`

| Name                   | Type        | Default   | Description                                                                      |
| ---------------------- | ----------- | --------- | -------------------------------------------------------------------------------- |
| **`text`**             | `string`    | `''`      | Snackbar text.                                                                   |
| **`contentComponent`** | `Component` | `-`       | Custom content component rendered instead of `text`.                             |
| **`snackbarProps`**    | `object`    | `{}`      | [VSnackbar](https://v3.vuetifyjs.com/en/api/v-snackbar/#props) props.            |
| **`showCloseButton`**  | `boolean`   | `true`    | Show the close button.                                                           |
| **`closeButtonText`**  | `string`    | `'Close'` | Close button text.                                                               |
| **`closeButtonProps`** | `object`    | `{}`      | [VBtn](https://v3.vuetifyjs.com/en/api/v-btn/#props) props for the close button. |

## License

MIT

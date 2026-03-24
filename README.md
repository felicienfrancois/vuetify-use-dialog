# @felicienfrancois/vuetify-use-dialog

A module that simplifies the creation of dialogs and snackbars in [Vuetify 3](https://v3.vuetifyjs.com).

Forked from [https://github.com/wobsoriano/vuetify-use-dialog](https://github.com/wobsoriano/vuetify-use-dialog)

Changelog :

- Rename mountDialog into mountConfirmDialog
- add missing option definition actionContentComponent
- Fix type definitions
- Add useDialog composable
- Stack dialogs instead of replacing

## Installation

```bash
npm install @felicienfrancois/vuetify-use-dialog
```

## Usage

Install the plugin (after vuetify)

```ts
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import VuetifyUseDialog from 'vuetify-use-dialog'

import App from './App.vue'

const app = createApp(App)
const vuetify = createVuetify()

app.use(vuetify)
app.use(VuetifyUseDialog)

app.mount('#app')
```

Call the `useConfirm` or `useSnackbar` composable anywhere:

```vue
<script setup lang="ts">
import { useConfirm, useSnackbar } from 'vuetify-use-dialog'

const createConfirm = useConfirm()
const createSnackbar = useSnackbar()

async function handleConfirm() {
  const isConfirmed = await createConfirm({ content: 'This action is permanent!' })

  if (!isConfirmed)
    return

  createSnackbar({ text: 'Confirmed' })
}
</script>

<template>
  <VBtn @click="handleConfirm">
    Confirm
  </VBtn>
</template>
```

Check [this](https://github.com/wobsoriano/vuetify-use-dialog/issues/4) if you're using Options API.

## Options

### `useConfirm`

| Name                                    | Type        | Default           | Description                                                                                                                                                                                                                            |
| --------------------------------------- | ----------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`title`**                             | `string` | `'Are you sure?'` | Dialog title.                                                                                                                                                                                                                          |
| **`titleComponent`**                             | `Component` | | Custom title component.                                                                                                                                                                                                                          |
| **`titleComponentProps`**                             | `object` | `{}` | Custom title component props.                                                                                                                                                                                                                          |
| **`content`**                       | `string` | `''`              | Dialog content.                                                                                                                                                                          |
| **`contentComponent`**                             | `Component` | | Custom content component.                                                                                                                                                                                                                          |
| **`contentComponentProps`**                             | `object` | `{}` | Custom content component props.                                                                                                                                                                                                                          |
| **`confirmationText`**                  | `string` | `'Ok'`            | Confirmation button caption.                                                                                                                                                                                                           |
| **`cancellationText`**                  | `string` | `'Cancel'`        | Cancellation button caption.                                                                                                                                                                                                           |
| **`dialogProps`**                       | `object`    | `{}`              | [VDialog](https://next.vuetifyjs.com/en/api/v-dialog/#props) props.                                                                                                                                                             |
| **`cardProps`**                | `object`    | `{}`              | [VCard](https://next.vuetifyjs.com/en/api/v-card/#props) props.                                                                                                                                              |
| **`confirmationButtonProps`**           | `object`    | `{}`              | [VBtn](https://next.vuetifyjs.com/en/api/v-btn/#props) props for the confirmation button.                                                                                                                                 |
| **`cancellationButtonProps`**           | `object`    | `{}`              | [VBtn](https://next.vuetifyjs.com/en/api/v-btn/#props) props for the cancellation button.                                                                                                                                 |
| **`cardTitleProps`**                        | `object`    | `{}`              | [VCardTitle](https://next.vuetifyjs.com/en/api/v-card-title/#props) props for the dialog title.                                                                                                                                         |
| **`cardTextProps`**                      | `object`    | `{}`              | [VCardText](https://next.vuetifyjs.com/en/api/v-card-text/#props) props for the dialog content.                                                                                                                                   |
| **`confirmationKeyword`**                  | `string` | `undefined`            | If provided the confirmation button will be disabled by default and an additional textfield will be rendered. The confirmation button will only be enabled when the contents of the textfield match the value of `confirmationKeyword`.                                                                                                                                    |
| **`confirmationKeywordTextFieldProps`**                      | `object`    | `{}`              | [VTextField](https://next.vuetifyjs.com/en/api/v-text-field/#props) props for the confirmation keyword textfield.                                                                                                                                   |
| **`cardActionsProps`**                      | `object`    | `{}`              | [VCardActions](https://next.vuetifyjs.com/en/api/v-card-actions/#props) props.                                                                                                                                   |
| **`actionsContentComponent`**                      | `Component`    | `{}`              | Custom actions content component.                                                                                                                                   |

### `useSnackbar`

| Name                                    | Type        | Default           | Description                                                                                                                                                                                                                            |
| --------------------------------------- | ----------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`text`**                             | `string` | `''` | Snackbar text.                                                                                                                                                              |
| **`snackbarProps`**                       | `object`    | `{}`              | [VSnackbar](https://next.vuetifyjs.com/en/api/v-snackbar/#props) props.                                                                                                                                                             |
| **`showCloseButton`**                       | `boolean` | `true`              | Show the close button.
| **`closeButtonText`**                       | `string` | `'Close'`              | Close button text
| **`closeButtonProps`**                       | `object`    | `{}`              | [VBtn](https://next.vuetifyjs.com/en/api/v-btn/#props) props.                                                                                                                                                             |

Global options:

```ts
app.use(VuetifyUseDialog, {
  confirmDialog: {
    // useConfirm options
    title: 'Are you sure?'
  },
  snackbar: {
    // useSnackbar options
    snackbarProps: {
      timeout: 2000,
    }
  }
})
```

Looking for a stackable toast component? Check out [Vuetify Sonner](https://vuetify-sonner.vercel.app).

## License

MIT

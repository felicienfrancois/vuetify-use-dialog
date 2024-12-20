<script setup lang="ts">
import { VBtn, VCard, VCardActions, VCardText, VDialog, VSpacer, VThemeProvider } from 'vuetify/components'
import { type Component, type PropType, computed, nextTick, onMounted, ref } from 'vue'

const props = defineProps({
  component: {
    type: Object as PropType<Component>,
    required: true,
  },
  componentProps: {
    type: Object,
    required: false,
  },
  dialogProps: {
    type: Object,
    required: false,
  },
  theme: {
    type: String,
    required: true,
  },
  resolve: {
    type: Function as PropType<(value: any) => void>,
    required: true,
  },
})

const isOpen = ref(true)

function close(result: any) {
  props.resolve(result)
  isOpen.value = false
}

function resolveIfHidden(v: boolean) {
  if (!v) {
    nextTick(() => {
      props.resolve(false)
    })
  }
}
</script>

<template>
  <VThemeProvider :theme="theme">
    <VDialog v-bind="dialogProps" v-model="isOpen" @update:model-value="resolveIfHidden">
      <component :is="component" v-bind="componentProps" v-model:isActive="isOpen" @close="close" />
    </VDialog>
  </VThemeProvider>
</template>

<script setup>
import { VBtn, VCard, VCardActions, VCardText, VCardTitle, VSpacer, VTextField } from 'vuetify/components';
import { computed, onMounted, ref } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: 'Are you sure?',
  },
  titleComponent: {
    type: [Object, Function, String],
  },
  titleComponentProps: {
    type: Object,
  },
  content: {
    type: String,
    default: '',
  },
  contentComponent: {
    type: [Object, Function, String],
  },
  contentComponentProps: {
    type: Object,
  },
  confirmationKeyword: {
    type: String,
  },
  confirmationKeywordTextFieldProps: {
    type: Object,
    default: () => ({}),
  },
  confirmationText: {
    type: String,
    default: 'Ok',
  },
  cancellationText: {
    type: String,
    default: 'Cancel',
  },
  cardProps: {
    type: Object,
    default: () => ({}),
  },
  cardTitleProps: {
    type: Object,
    default: () => ({}),
  },
  cardTextProps: {
    type: Object,
    default: () => ({}),
  },
  cardActionsProps: {
    type: Object,
    default: () => ({}),
  },
  actionsContentComponent: {
    type: [Object, Function, String],
  },
  cancellationButtonProps: {
    type: Object,
    default: () => ({}),
  },
  confirmationButtonProps: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits(['close']);

const textFieldInput = ref(null);
const textField = ref('');

function confirm() {
  emit('close', true);
}

function cancel() {
  emit('close', false);
}

onMounted(() => {
  if (textFieldInput.value) {
    textFieldInput.value.focus();
  }
});

const confirmationButtonDisabled = computed(() => {
  if (!props.confirmationKeyword) {
    return false;
  }
  return props.confirmationKeyword !== textField.value;
});
</script>

<template>
  <VCard v-bind="cardProps">
    <component :is="titleComponent" v-if="titleComponent" v-bind="titleComponentProps" />
    <VCardTitle v-else v-bind="cardTitleProps">
      {{ title }}
    </VCardTitle>
    <VCardText v-bind="cardTextProps">
      <component :is="contentComponent" v-if="contentComponent" v-bind="contentComponentProps" />
      <template v-else>
        <template v-if="content">
          {{ content }}
        </template>
        <VTextField
          v-if="confirmationKeyword"
          ref="textFieldInput"
          v-model="textField"
          v-bind="confirmationKeywordTextFieldProps"
          variant="underlined"
        />
      </template>
    </VCardText>
    <VCardActions v-bind="cardActionsProps">
      <component
        :is="actionsContentComponent"
        v-if="actionsContentComponent"
        :confirmation-button-disabled="confirmationButtonDisabled"
        :cancel="cancel"
        :confirm="confirm"
      />
      <template v-else>
        <VSpacer />
        <VBtn v-bind="cancellationButtonProps" @click="cancel">
          {{ cancellationText }}
        </VBtn>
        <VBtn color="primary" :disabled="confirmationButtonDisabled" v-bind="confirmationButtonProps" @click="confirm">
          {{ confirmationText }}
        </VBtn>
      </template>
    </VCardActions>
  </VCard>
</template>

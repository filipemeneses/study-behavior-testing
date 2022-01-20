<template>
  <div>
    <input
      role="textbox"
      v-model="propValue"
      v-bind="{
        ...(limit > 0 ? {maxlength: limit} : {})
      }"
    />
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    limit: {
      type: [String, Number],
      default: 0
    }
  },
  setup(props, { emit }) { 
    const propValue = computed({ 
      get: () => props.modelValue, 
      set: (value) => emit('update:modelValue', value) 
    }) 

    return { 
      propValue,
    } 
  }
}
</script>
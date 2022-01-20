<template>
  <div>
    <input
      role="textbox"
      :value="modelValue"
      @input="applyLimitAndEmit"
    />
  </div>
</template>

<script>
import { useStringLimit } from "./useStringLimit";

export default {
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    limit: {
      type: [String, Number],
      default: 0,
    },
  },
  setup(props, { emit }) {
    const parsedLimit = Number(props.limit)
    const applyLimit = useStringLimit(parsedLimit);
    let lastEmit

    const applyLimitAndEmit = ($event) => {
      const target = $event?.target
      if (!target) return

      const eventValue = $event?.target?.value
      const newValue = eventValue?.length > parsedLimit ? applyLimit(eventValue) : eventValue

      $event.target.value = newValue;

      if (newValue?.length === lastEmit?.length) return

      lastEmit = newValue
      emit("update:modelValue", newValue);
    };

    return {
      applyLimitAndEmit,
    };
  },
};
</script>
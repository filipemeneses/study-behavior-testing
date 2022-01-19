<!--
This component is a mimic
to show how a developer is using
the component
-->
<template>
  <Button @click="$emit('usingButtonClick', $event)"/>
</template>


<script>
import Button from "./Button.vue";

export default {
  components: { Button },
};
</script>


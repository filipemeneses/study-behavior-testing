
<script>
// This component is a mimic for external library component

// ButtonA emits `click`
import ButtonA from './ButtonA.vue'
// ButtonB emits `myClick`
import ButtonB from './ButtonB.vue'
// ButtonC emits `click` but changes role
import ButtonC from './ButtonC.vue'

export default {
    // changing any version should make tests fails
    // if it does not fail, it means the test isn't covering
    // component behavior changes
    extends: ButtonA
}
</script>
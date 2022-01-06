<script setup lang="tsx">
type props = {
  text: string
}

const { text } = defineProps<props>()
</script>

<script lang="tsx">
export default defineComponent({
  setup() {
    return { text }
  },
  render() {
    return (
      <h1>GoodBye { this.text } !</h1>
    )
  }
})
</script>
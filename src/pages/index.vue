<script lang="tsx">
import Hello from "../components/Hello"
import Hello2 from "../components/Hello2"

export default defineComponent({
  render() {
    return (
      <div>
        <Hello text="Hello World!"/>
        <Hello2 text="Hello World!"/>
      </div>
    )
  }
})
</script>
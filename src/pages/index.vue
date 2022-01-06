<script lang="tsx">
import Hello from "../components/Hello"
import Hello2 from "../components/Hello2"
import GoodBye from "../components/GoodBye.vue"

export default defineComponent({
  render() {
    return (
      <div>
        <Hello text="Hello World!"/>
        <Hello2 text="Hello World!"/>
        <GoodBye text='everyone'/>
      </div>
    )
  }
})
</script>
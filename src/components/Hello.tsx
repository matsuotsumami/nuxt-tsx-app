export default defineComponent({
  props: {
    text: {
      type: String,
      ddefault: null,
    }
  },
  setup(props) {
    return { text: props.text }
  },
  render() {
    return (
      <h1>{this.text}</h1>
    )
  }
});
<template>
  <div>
    <h2>This is Index page {{text}}</h2>
    <p>This is some description to change</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: 'This is new message'
    }
  },
  mounted () {
    // alert('Show Index Page')
  }
}
</script>

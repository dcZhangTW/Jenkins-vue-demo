<template>
  <div :class="$style.wrap">
    <ul :class="$style.tabs">
      <li :class="$style['tab-item']" v-for="tab in tabs" :key="tab.name">
        <router-link :class="$style.link" :to="tab.path">
          <span>{{tab.name}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'my-tab',
  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style src="./index.scss" module></style>

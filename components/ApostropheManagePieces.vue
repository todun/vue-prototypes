<template>
  <div class="apos-manage-pieces">
    <Component :is="chooserComponent" />
    <Component :is="browserComponent" />
  </div>
</template>
<script>
// Apostrophe Vue components are globally registered (but carefully namespaced)
export default {
  name: 'ApostropheManagePieces',
  props: { 'chooserComponent': String, 'browserComponent': String }
}
</script>

<template>
  <form>
    <div class="input-group">
      <input type="text" class="form-control search-style-top" placeholder="Pesquisar..."  v-model="filter">
      <div class="input-group-btn">
        <div  class="btn btn-default search-style"><b-icon icon="search"></b-icon></div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
    name: "Buscar",
    data() {
        return {
            filter: "",
        };
    },
    methods: {
      highlightMatches(text) {
        const matchExists = text.toLowerCase();
        if (!matchExists) return text;
        const re = new RegExp(this.filter, "ig");
        return text.replace(re, matchedText => `<strong>${matchedText}</strong>`);
      }
        
    },
    computed: {
        
        
    }
}
</script>

<style>

</style>
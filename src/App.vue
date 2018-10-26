<template>
  <div id="app">
	<router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Header from './components/Header.vue';
import NavTags from './components/NavTags.vue';
import ArticleBody from './components/ArticleBody.vue';

export default {
  name: "app",
  components: {
	// HelloWorld
	Header,
	NavTags,
	ArticleBody
  },
  data() {
    return {
      tags: [
        {
			url:'#',
			name:'新鲜事'
		},
		{
			url:'#',
			name:'热门'
		},
		{
			url:'#',
			name:'搞笑'
		},
		{
			url:'#',
			name:'情感'
		},
		{
			url:'#',
			name:'情感'
		},
		{
			url:'#',
			name:'情感'
		},
		{
			url:'#',
			name:'情感'
		},
		{
			url:'#',
			name:'情感'
		}
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

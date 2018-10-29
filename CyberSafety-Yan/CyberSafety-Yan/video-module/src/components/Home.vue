<template>
  <div class="hello">
    <h1>Video Module</h1>
    <input v-on:keyup.enter="displayVideo(msg)" v-model="msg" placeholder="Paste Video URL">
    <p>Example: https://staging.coverr.co/s3/mp4/Rain%20in%20the%20Garden.mp4</p>
    <video  id="my-video" 
        class="video-js vjs-big-play-centered" 
        controls
        data-setup="{}" v-if="display"> 
    
     <source v-bind:src="msg" type="video/mp4" />

    <p class="vjs-no-js">
      To view this video please enable JavaScript, and consider upgrading to a web browser that
      <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
    </p>



</video>
  </div>
</template>

<script>
import videojs from "video.js" ; 

export default {
  name: 'Home',
  data() {

        return {
            player: null,
            display: false,
        }
    },
  props: {
    message: String
  },
  methods: {
    displayVideo: function(msg) {
      this.message = msg
      this.display = true
      
    }
  },
  ready() {

        this.player = videojs('video');
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
input {
  width: 70%;
  height: 30px;
  font-size: 24px;
  border-radius: 8px 8px;
  border: 1px solid #ccc;
  padding: 10px;
  
}
input:focus{
  outline: none;
}
</style>

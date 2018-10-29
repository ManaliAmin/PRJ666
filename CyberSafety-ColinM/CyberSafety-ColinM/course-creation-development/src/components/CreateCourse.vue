<template>
  <div class="hello">
    <div class="holder">

      <p>Click on a button to add a module</p>
      <p>The X icon beside the module added will remove it from the list</p>

      <form @submit.prevent="addModule">

        <button v-on:click = "addQuiz()">Add Quiz</button>
        <button v-on:click = "addVideo()">Add Video</button>
        <button v-on:click = "addImage()">Add Image</button>
        <button v-on:click = "addAudio()">Add Audio</button>
        <button v-on:click = "addPresentation()">Add Presentation</button>
        <router-link to="/TextModule" tag="button">Add Text</router-link>

      </form>

      <ul>
        <transition-group name="list" enter-active-class="animated bounceInDown" leave-active-class="animated bounceOutDown">
          <li v-for="(data, index) in modules" :key='index'> {{ data.module }}
            <i class="fa fa-window-close" v-on:click="remove(index)"></i>
            <i class="fa fa-edit" v-on:click="editModule()"></i>
            <i class="fa fa-drivers-license" v-on:click="viewModule()"></i>
          </li>
        </transition-group>
      </ul>

      <p>These are the modules that your course consists of. When you
      are ready to export click on the button below! Or choose to view
    your course in its entirety.</p>

      <button v-on:click = "viewCourse()">View Course</button>
      <button v-on:click = "submitCourse()">Submit Course</button>
      <button-counter></button-counter>

    </div>
  </div>
</template>

<script>
export default {

  name: 'Modules',
  data() {
    return {
      modules: [
        { "module": "Quiz"},
        { "module": "Image"},
        { "module": "Video"}
      ]
    }
  },

  methods: {
    addQuiz() {
          alert("Content coming soon!");
          this.modules.push({module: "Quiz"});
    },
    addVideo() {
          alert("Content coming soon!");
          this.modules.push({module: "Video"});
    },
    addImage() {
          alert("Content coming soon!");
          this.modules.push({module: "Image"});
    },
    addAudio() {
          alert("Content coming soon!");
          this.modules.push({module: "Audio"});
    },
    addPresentation() {
          alert("Content coming soon!");
          this.modules.push({module: "Presentation"});
    },
    addText() {
          alert("Content coming soon!");
          this.modules.push({module: "Text"});
    },
    remove(id) {
      if(confirm("Are you sure you want to delete this module?"))
      {
          this.modules.splice(id,1);
      }
      else
      {
          console.log("User did not remove module");
      }
    },
    editModule() {
      alert("Content coming soon!");
    },
    viewModule() {
      alert("Content coming soon!");
    },
    submitCourse() {
      alert("Content coming soon!");
      for(var i = 0; i < this.modules.length; ++i){
          console.log(this.modules[i]);
      }
    },
    viewCourse() {
      alert("Content coming soon!");
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

  .holder {
    background: #fff;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #98FB98;
    border-left: 5px solid black;
    margin-bottom: 2px;
    color: #3E5252;
  }

  p {
    text-align:center;
    padding: 20px 0;
    color: gray;
  }

  .container {
    box-shadow: 0px 0px 40px lightgray;
  }

  input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
  }
  .alert {
    background: #fdf2ce;
    font-weight: bold;
    display: inline-block;
    padding: 5px;
    margin-top: -20px;
  }

  .alert-in-enter-active {
    animation: bounce-in .5s;
  }
  .alert-in-leave-active {
    animation: bounce-in .5s reverse;
  }

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

i {
  float:right;
  margin-left: 20px;
  cursor:pointer;
}

button {
  background-color: #4CAF50; /* Green */
   border: none;
   width: 27em;
   color: white;
   padding: 25px 25px;
   text-align: center;
   text-decoration: none;
   display: inline-block;
   font-size: 15px;
   margin: 20px 35px;
   cursor: pointer;
}
</style>

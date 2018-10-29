<template>
  <div id="app">
    <nav>
      <router-link to="/MyCourses">My Courses</router-link>
      <router-link to="/CreateCourse">Create Course</router-link>
      <router-link to="/ModifyCourse">Modify Course</router-link>
      <router-link to="/DeactivateCourse">Deactivate Course</router-link>
      <router-link to="/CloneCourse">Clone Course</router-link>
      <router-link to="/CourseStatus">Course Status</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script>
import Modules from './components/CreateCourse.vue'
export default {
  name: 'app',
  components: {
    Modules
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
body {
  background-color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  padding-top: 50px;
}
body, html {
  margin: 0;
  height: 100%;
}
#app {
    width: 50%;
}
nav {

}
nav a {
  height: 5em;
  width: 5em;
  padding:1px;
  text-decoration: none;
  background: #fff;
  border-radius: 25px;
  color: #4CAF50;
  font-weight: bold;
  margin-right: 10px;
}
</style>

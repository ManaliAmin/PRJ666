<!-- Router.vue -->
<template>
  <component :is="routedComponent"></component>
</template>


<script>
import homePage from "./home.vue";
import adminPage from "./admin.vue";
// import viewPage from "./view.vue";
// import createPage from "./create.vue";
import presentPage from "./present.vue";
//------ Colin M
import MyCourses from './MyCourses.vue'
import RemoveCourse from './RemoveCourse.vue'
import ModifyCourse from './ModifyCourse.vue'
import DeactivateCourse from './DeactivateCourse.vue'
import CreateCourse from './CreateCourse.vue'
import CloneCourse from './CloneCourse.vue'
import CourseStatus from './CourseStatus.vue'
import TextModule from './TextModule.vue'


const routes = {
  "/": homePage,
  "/admin": adminPage,
  "/MyCourses":MyCourses,
  "/CreateCourse":CreateCourse,
  "/ModifyCourse":ModifyCourse,
  "/DeactivateCourse":DeactivateCourse,
  "/CloneCourse":CloneCourse,
  "/CourseStatus":CourseStatus,
   "/TextModule":TextModule,
   // "/view": viewPage,
  // "/create": createPage,
  "/present": presentPage

//   <router-link to="/MyCourses">My Courses</router-link>
//       <router-link to="/CreateCourse">Create Course</router-link>
//       <router-link to="/ModifyCourse">Modify Course</router-link>
//       <router-link to="/DeactivateCourse">Deactivate Course</router-link>
//       <router-link to="/CloneCourse">Clone Course</router-link>
//       <router-link to="/CourseStatus">Course Status</router-link>
};


export default {
  data() {
    return { current: window.location.pathname };
  },
  computed: {
    routedComponent() {
      return routes[this.current];
    }
  }
};
</script>

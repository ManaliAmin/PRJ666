import Vue from 'vue'
import Router from 'vue-router'
import MyCourses from './components/MyCourses.vue'
import RemoveCourse from './components/RemoveCourse.vue'
import ModifyCourse from './components/ModifyCourse.vue'
import DeactivateCourse from './components/DeactivateCourse.vue'
import CreateCourse from './components/CreateCourse.vue'
import CloneCourse from './components/CloneCourse.vue'
import CourseStatus from './components/CourseStatus.vue'
import TextModule from './components/TextModule.vue'
import MergeCourse from './components/MergeCourse.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/MyCourses',
      name: 'MyCourses',
      component: MyCourses
    },
    {
      path: '/RemoveCourse',
      name: 'RemoveCourse',
      component: RemoveCourse
    },
    {
      path: '/ModifyCourse',
      name: 'ModifyCourse',
      component: ModifyCourse
    },
    {
      path: '/DeactivateCourse',
      name: 'DeactivateCourse',
      component: DeactivateCourse
    },
    {
      path: '/CreateCourse/',
      name: 'CreateCourse',
      component: CreateCourse
    },
    {
      path: '/CourseStatus',
      name: 'CourseStatus',
      component: CourseStatus
    },
    {
      path: '/CloneCourse',
      name: 'CloneCourse',
      component: CloneCourse
    },
    {
      path: '/TextModule',
      name: 'TextModule',
      component: TextModule
    },
    {
      path: '/MergeCourse',
      name: 'MergeCourse',
      component: MergeCourse
    }
  ]
})

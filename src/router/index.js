import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home/Home'
import Section from '@/views/Section/Section'
import SectionList from '@/views/Section/SectionList'
import Post from '@/views/Post/Post'
import List from '@/views/List/List'
import Intro from '@/views/Intro/Intro'
import Link from '@/views/Link/Link'
import Teach from '@/views/Teach/Teach'
import TeachPost from '@/views/Teach/TeachPost'
import Categories from '@/views/Categories/Categories'
import UserRegister from '@/views/Users/Register'
import UserLogin from '@/views/Users/Login'
import UserProfile from '@/views/Users/Profile'
import forget_passwords from '@/views/Users/forget_passwords'
import reset_passwords from '@/views/Users/reset_passwords'
import recover from '@/views/Users/recover'
import ActivityList from '@/views/Activity/ActivityList'
import activity_list from '@/views/activity_school/activity_list'
import activity from '@/views/activity_school/activity'
import activity_post from '@/views/activity_school/activity_post'
import activity_category from '@/views/activity_school/activity_category'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/section/:sectionid',
      name: 'Section',
      component: Section,
      children: [
        {
          path: 'tab/:tabid/page/:pageid',
          name: 'SectionList',
          component: SectionList,
        },
      ],
    },
    {
      path: '/post/:postid',
      name: 'Post',
      component: Post
    },
    {
      path: '/list/:listid',
      name: 'List',
      component: List
    },
    {
      path: '/project/:projectid',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/link/:linkid',
      name: 'Link',
      component: Link
    },
    {
      path: '/categories/:categoriesid',
      name: 'Categories',
      component: Categories
    },
    {
      path: '/newUser',
      name: 'Users',
      component: UserRegister
    },
    {
      path: '/users/login/:whichService',
      name: 'Login',
      component: UserLogin
    },
    {
      path: '/me',
      name: 'Profile',
      component: UserProfile
    },
    {
      path: '/forgot_passwords',
      name: 'forget_passwords',
      component: forget_passwords
    },
    {
      path: '/resetPassword/:email/:token',
      name: 'reset_passwords',
      component: reset_passwords
    },
    {
      path: '/module/page/:pageid',
      name: 'Teach',
      component: Teach,
    },
    {
      path: '/module/post/:postid',
      name: 'TeachPost',
      component: TeachPost,
    },
    {
      path: '/activity/school',
      name: 'activity',
      component: activity,
      children: [
        {
          path: 'post/:postid',
          name: 'activity_post',
          component: activity_post
        },
        {
          path: 'list',
          name: 'activity_list',
          component: activity_list
        },
        {
          path: 'tab/:category',
          name: 'activity_category',
          component: activity_category
        },
      ]
    },
    {
      path: '/api-demo',
      name: 'ApiDemo',
      component: () => import('@/views/Debug/index'),
    },
  ]
})

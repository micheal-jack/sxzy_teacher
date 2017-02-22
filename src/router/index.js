import Vue from 'vue'
import Router from 'vue-router'

// import Hello from 'components/Hello'

Vue.use(Router)


const CourseDetailCatelog = resolve => require(['components/Course/CourseDetailCatelog.vue'], resolve);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => require(['components/Home.vue'], resolve)
    },
    //登录
    {
      path: '/login',
      name: 'Login',
      component: resolve => require(['components/Login/Login.vue'], resolve),
    },
    //课表
    {
      path: '/class_schedule',
      name: 'ClassSchedule',
      component: resolve => require(['components/ClassSchedule/MyClassSchedule.vue'], resolve),
    },
    //开始上课-选择课程（直接用我的课程页面就可以了,把里面的查看课程改为开始上课，点击后跳转到选择课程对应的班级）
    {
      path: '/start_course',
      name: 'StartCourse',
      component: resolve => require(['components/Course/MyCourse.vue'], resolve)
    },

    //开始上课-选择班级
    {
      path: '/course_class/select',
      name: 'CourseClassSelect',
      component: resolve => require(['components/Course/ClassSelect.vue'], resolve)
    },
  	//开始上课-课程详情电子白板

	 //我的课程
    {
      path: '/mycourse',
      name: 'MyCourse',
      component: resolve => require(['components/Course/MyCourse.vue'], resolve)
    },

    //练习首页
    {
      path: '/homework/:id',
      name: 'HomeworkDetail',
      component: resolve => require(['components/HomeWork/ItemStartAnswer.vue'], resolve),
    },

    //题目详情页

    //练习结果统计

    //同学练习情况
    {
      path: '/homework/:id/workprogress',
      name: 'HomeWorkList',
      component: resolve => require(['components/HomeWork/ItemStudentAnalytics.vue'], resolve),
    },
    

    //在线问答
    {
      path: '/mythread',
      name: 'MyThread',
      component: resolve => require(['components/MyThread/MyThreadList.vue'], resolve),
    },
    //在线问答详情
    //在线问答-提问
    {
      path: '/mythread/add',
      name: 'MyThreadAdd',
      component: resolve => require(['components/MyThread/MyThreadAdd.vue'], resolve),
    },
    //在线问答-回答

    //教学评价
    // 同学交作业情况
    // 同学交作业情况-评阅前、评阅后

    //题目详情页-评阅
    //提交作业后的答题卡
    //作业质量分析

    //我的笔记
    {
      path: '/mynote',
      name: 'MyNote',
      component: resolve => require(['components/MyNote/NoteList.vue'], resolve),
    },
    //我的笔记-详情
    {
      path: '/mynote/:id',
      name: 'MyNoteDetail',
      component: resolve => require(['components/MyNote/NoteDetail.vue'], resolve),
    },
    //我的笔记-修改
    {
      path: '/mynote/:id/edit',
      name: 'MyNoteEdit',
      component: resolve => require(['components/MyNote/NoteEdit.vue'], resolve),
    },

    //班级成员
    {
      path: '/myclass/member',
      name: 'MyClassMember',
      component: resolve => require(['components/MyClass/ClassMember.vue'], resolve),
    },
    //我的班级
    {
      path: '/myclass',
      name: 'MyClassTimeline',
      component: resolve => require(['components/MyClass/ClassTimeline.vue'], resolve),
    },
    //学生成长记录

    //我的消息
    {
      path: '/msg',
      name: 'MsgList',
      component: resolve => require(['components/Msg/MsgList.vue'], resolve),
    },

    //我
    {
      path: '/setting',
      name: 'SettingHome',
      component: resolve => require(['components/Setting/SettingHome.vue'], resolve),
      children: [
      		{
	          path: '',
	          name:'SettingAvatar',
	          component: resolve => require(['components/Setting/SettingAvatar.vue'], resolve),
	        },
	        {
	          path: 'help',
	          name:'SettingHelp',
	          component: resolve => require(['components/Setting/SettingHelp.vue'], resolve),
	        },
	        {
	          path: 'list',
	          name:'SettingList',
	          component: resolve => require(['components/Setting/SettingList.vue'], resolve),
	        },
	        {
	          path: 'login',
	          name:'SettingLogin',
	          component: resolve => require(['components/Setting/SettingLogin.vue'], resolve),
	        },
	        {
	          path: 'passwd',
	          name:'SettingPasswd',
	          component: resolve => require(['components/Setting/SettingPasswd.vue'], resolve),
	        },
	        {
	          path: 'user_info',
	          name:'SettingUserInfo',
	          component: resolve => require(['components/Setting/SettingUserInfo.vue'], resolve),
	        }
      ]
    },

    {
      path: '/analytics/work',
      name: 'AnalyticsHomeWork',
      component: resolve => require(['components/Analytics/HomeWork.vue'], resolve)
    },
    {
      path: '/analytics/exercises',
      name: 'AnalyticsExercises',
      component: resolve => require(['components/Analytics/Exercises.vue'], resolve)
    },
    {
      path: '/homework',
      name: 'HomeWorkList',
      component: resolve => require(['components/HomeWork/HomeWorkList.vue'], resolve),
    },
    
    
    
    
    
    
    
    //找回密码
    {
      path: '/login/reset_passwd',
      name: 'ResetPasswd',
      component: resolve => require(['components/Login/ResetPasswd.vue'], resolve),
    },
    //课程
    {
      path: '/course_detail/:id',
      name: 'CourseDetail',
      component: resolve => require(['components/Course/CourseDetail.vue'], resolve),
      children: [
      		{
	          path: '',
	          name:'CourseDetailCatelog',
	          component: CourseDetailCatelog,
	        },
	        // {
	        //   path: 'catelog',
	        //   name:'CourseDetailCatelog',
	        //   component: CourseDetailCatelog,
	        // },
	        {
	          path: 'note',
	          name:'CourseDetailNote',
	          component: resolve => require(['components/Course/CourseDetailNote.vue'], resolve),
	        },
	        {
	          path: 'thread',
	          name:'CourseDetailThread',
	          component: resolve => require(['components/Course/CourseDetailThread.vue'], resolve),
	        }
      ]
    }
  ]
})

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ngCordova','ngRoute'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleLightContent();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider, $httpProvider, $ionicConfigProvider) {

        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';
        $ionicConfigProvider.backButton.text('Go Back').icon('ion-chevron-left');
        $ionicConfigProvider.navBar.alignTitle("center"); //Places them at the bottom for all OS
        $ionicConfigProvider.tabs.position("bottom"); //Places them at the bottom for all OS
        $ionicConfigProvider.tabs.style("standard"); //Makes them all look the same across all OS
        $ionicConfigProvider.tabs.position('bottom');
        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            // setup an abstract state for the tabs directive

//主页页面
            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
            })


//老师和获奖页面
            .state('teachers', {
                url: '/teachers?params',
                templateUrl: 'templates/teachers.html',
                controller: 'TeachersCtrl'
            })
            //获奖跳转页面
            .state('rewarded', {
                url: '/rewarded?params',
                templateUrl: 'templates/rewarded.html',
                controller: 'RewardedCtrl'
            })
//老师子页面
            .state('teachers-detail', {
                url: '/teachers/:teacherId',
                templateUrl: 'templates/teachers-detail.html',
                controller: 'Teachers-detailCtrl'
            })
//获奖展示
            .state('trophy', {
                url: '/trophy',
                templateUrl: 'templates/trophy.html',
                controller: 'TrophyCtrl'
            })
//获奖展示子页面
            .state('trophy-detail', {
                url: '/trophy/:trophyId',
                templateUrl: 'templates/trophy-detail.html',
                controller: 'TrophyDetailCtrl'
            })
//地址选择
            .state('address_select', {
                url: '/address_select',
                templateUrl: 'templates/address_select.html',
                controller: 'address_selectCtrl'
            })
//导航
            .state('navigation', {
                url: '/navigation',
                templateUrl: 'templates/navigation.html',
                controller: 'NavigationCtrl'
            })
//联系我们
            .state('phone', {
                url: '/phone',
                templateUrl: 'templates/phone.html',
                controller: 'PhoneCtrl'
            })
//活动
            .state('activity', {
                url: '/activity',
                templateUrl: 'templates/activity.html',
                controller: 'ActivityCtrl'
            })
//活动子页面
            .state('activity-detail',{
                url:'/activity/:activityId',
                templateUrl:'templates/activity-detail.html',
                controller:'ActivityDetailCtrl'
            })
//招聘信息
            .state('message', {
                url: '/message',
                templateUrl: 'templates/message.html',
                controller: 'MessageCtrl'
            })
//机构介绍
            .state('introduce', {
                url: '/introduce',
                templateUrl: 'templates/introduce.html',
                controller: 'IntroduceCtrl'
            })
//报名
            .state('products', {
                url: '/products',
                templateUrl: 'templates/products.html',
                controller: 'ProductsCtrl'
            })
//留言显示
            .state('newmessage',{
                url:'/newmessage',
                templateUrl:'templates/newmessage.html',
                controller:'NewmessageCtrl'
            })
//自己单条留言
            .state('formessage1',{
                url:'/newmessage/1/:_id',
                templateUrl:'templates/formessage1.html',
                controller:'formessage1Ctrl'
            })
//添加留言
            .state('newmessage-1',{
                url:'/newmessage-1',
                templateUrl:'templates/newmessage-1.html',
                controller:'Newmessage-1Ctrl'
            })
//课程
            .state('lesson', {
                url: '/lesson',
                templateUrl: 'templates/lesson.html',
                controller: 'LessonCtrl'
            })
//已报课程
            .state('lessoned', {
                url: '/lesson/:lessonensId',
                templateUrl: 'templates/lessoned.html',
                controller: 'LessonedCtrl'
            })
//动态主页面
            .state('trends',{
                url:'/trends',
                templateUrl:'templates/trends.html',
                controller:'TrendsCtrl'
            })
//第一个课程集合
            .state('train1', {
                url: '/train1',
                templateUrl: 'templates/train1.html',
                controller: 'Train1Ctrl'
            })
//第二个课程集合
            .state('train2', {
                url: '/train2',
                templateUrl: 'templates/train2.html',
                controller: 'Train2Ctrl'
            })
//第三个课程集合
            .state('train3', {
                url: '/train3',
                templateUrl: 'templates/train3.html',
                controller: 'Train3Ctrl'
            })
//第四个课程集合
            .state('train4', {
                url: '/train4',
                templateUrl: 'templates/train4.html',
                controller: 'Train4Ctrl'
            })
//第一个课程单个课堂详细介绍
            .state('train1-1', {
                url: '/train1/:trainId',
                templateUrl: 'templates/train1-1.html',
                controller: 'Train1-1Ctrl'
            })
//第二个课程单个课堂详细介绍
            .state('train2-2', {
                url: '/train2/:trainId',
                templateUrl: 'templates/train2-2.html',
                controller: 'Train2-2Ctrl'
            })
//第三个课程单个课堂详细介绍
            .state('train3-3', {
                url: '/train3/:trainId',
                templateUrl: 'templates/train3-3.html',
                controller: 'Train3-3Ctrl'
            })
//第四个课程单个课堂详细介绍
            .state('train4-4', {
                url: '/train4/:trainId',
                templateUrl: 'templates/train4-4.html',
                controller: 'Train4-4Ctrl'
            })

        $urlRouterProvider.otherwise('/home');

    })



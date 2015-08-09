var IMGURL = 'http://huyugui.f3322.org:3000/images/'
var URL='http://huyugui.f3322.org:3000/'
angular.module('starter.controllers', ['ionic'])
//主页
    .controller('HomeCtrl', function ($scope, $state) {
        $scope.dash = {
            tu1: './img/introduce.png',
            name1: '机构介绍',
            tu2: './img/activity.png',
            name2: '活动公告',
            tu3: './img/people.png',
            name3: '开班报课',
            tu4: './img/trophy.png',
            name4: '最新动态',
            tu5: './img/products.png',
            name5: '名师优生',
            tu6: './img/navigation.png',
            name6: '机构地址',
            tu7: './img/message.png',
            name7: '招聘信息',
            tu8: './img/phone.png',
            name8: '联系我们',
            tu9: './img/phone.png',
            name9: '留言'
        }
        $scope.goto1 = function () {
            $state.go("introduce");
        }
        $scope.goto2 = function () {
            $state.go("activity");
        }
        $scope.goto3 = function () {
            $state.go("lesson");
        }
        $scope.goto4 = function () {
            $state.go("trends");
        }
        $scope.goto5 = function () {
            $state.go("teachers" );
        }
        $scope.goto6 = function () {
            $state.go("navigation" );
        }
        $scope.goto7 = function () {
            $state.go("message");
        }
        $scope.goto8 = function () {
            $state.go("phone");
        }
        $scope.goto9 = function () {
            $state.go("newmessage");
        }
    })
//活动
    .controller('ActivityCtrl', function ($scope,$ionicPopup, $stateParams, $http,Activity,$state,User) {
        $scope.imgurl = IMGURL;
        $scope.activitys = {}
        $http.get(URL+'activity')
            .success(function(data){
                $scope.activitys.activity = data.activity;
          console.log(data)
                $scope.activitys = data;
                $scope.activitys.activity = data.activity;
            })




        //$scope.activity = Activity.all();
        $scope.back = function () {
            $state.go("home");
        }
        //$scope.activitys={
        //    a1:'./img/f1.jpg',
        //    a2:'./img/f2.jpg',
        //    a3:'./img/f3.jpg',
        //    a4:'./img/f4.jpg',
        //    a5:'./img/f5.jpg',
        //    a6:'./img/f6.jpg'
        //}
        //$scope.sendFeedback = function (train) {
        //    $scope.currentSong = angular.copy(train);
        //    User.addFruitToFavorites($scope.currentSong);
        //    $ionicPopup.confirm({
        //        title: '提示',
        //        template: '切换到报名页面吗？',
        //        cancelText: '取消',
        //        okText: '确定'
        //    }).then(function (res) {
        //        if (res == true) {
        //            $state.go('products');
        //        } else {
        //
        //        }
        //    });
        //}
    })
//活动子页面
    .controller('ActivityDetailCtrl', function($scope, $stateParams, $state,Activity) {
        $scope.activity = Activity.get($stateParams.activityId);
        $scope.return = function(){
            $state.go("activity");
        }
    })
//机构介绍
    .controller('IntroduceCtrl', function ($scope, $state,$cordovaImagePicker) {



        $scope.pickImage = function () {
            //console.log("haha");

            var options = {
                maximumImagesCount: 4,
                width: 800,
                height: 800,
                quality: 80
            };

            $cordovaImagePicker.getPictures(options)
                .then(function (results) {
                    //console.log(results);
                    $scope.imgSrc = results[0]
                })}


        $scope.back = function () {
            $state.go("home");
        }
        $scope.introduce = {
            face: './img/s3.png',
            text: '华图教育作为一家有良好声誉和社会责任感的本土优秀教育企业，华图经过十年的文化沉淀和业务发展，从一个教师考试培训班到全国近30所直属分校，从教师招录培训到教师资格培训、教师职称培训、教师进修培训和教师学历培训，从教师培训第一品牌到教师培训行业标准的制定者。招教资深教师全程授课，全方位提升学员笔试水平华图一线资深专家教师授课，针对学科专业的笔试特点、对应试技巧继续拧深度讲 解，使学员全面了解笔试，提升笔试应试技能。系统精讲学科专业知识，使学员在短时间内把握精确解读中小学教师招聘考试中学科专业知识考查体系及考查形式，全面、系统精讲相关 内容，使学员能够在短时间内获取并掌握。',
            face1: './img/s2.png',
            text1: '该品牌图标是具有明确指代含义的计算机图形。其中桌面图标是软件标识，界面中的图标是功能标识。它源自于生活中的各种图形标识，是计算机应用图形化的重要组成部分。'
        }
    })
//招聘信息
    .controller('MessageCtrl', function ($scope, Messages, $state) {
        $scope.messages = Messages.all();
        $scope.back = function () {
            $state.go('home');
        }

    })
//导航
    .controller('NavigationCtrl', function ($scope, $state) {
        $scope.back = function () {
            $state.go("home");
        }
        var map = new BMap.Map("allmap");
        var point = new BMap.Point(113.40, 22.07);
        var dd = null;
        var ff = null;

        map.centerAndZoom(point, 12);

        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function (r) {
            if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                var mk = new BMap.Marker(r.point);
                map.addOverlay(mk);
                map.panTo(r.point);
                map.enableScrollWheelZoom();
                alert('您的位置：' + r.point.lng + ',' + r.point.lat);
                dd = r.point.lng;
                ff = r.point.lat

                var p1 = new BMap.Point(dd, ff);

                var p2 = new BMap.Point(113.321084, 22.055749);

                var driving = new BMap.DrivingRoute(map, {renderOptions: {map: map, autoViewport: true}});
                driving.search(p1, p2);
            }
            else {
                alert('failed' + this.getStatus());
            }
        }, {enableHighAccuracy: true})
    })
//报名
    .controller('ProductsCtrl', function ($scope,$http, $ionicPopup, $state, Train1, Train2, Train3, Train4, $stateParams, User) {
        $scope.train1 = Train1.all();
        $scope.train2 = Train2.all();
        $scope.train3 = Train3.all();
        $scope.train4 = Train4.all();
        $scope.back = function () {
            $ionicPopup.confirm({
                title: '提示',
                template: '你要放弃报名？',
                cancelText: '取消',
                okText: '确定'
            }).then(function (res) {
                if (res == true) {
                    $state.go('lesson')
                        .then(function (train) {
                            User.remove(train);
                        })
                } else {

                }
            });
        }
        $scope.myfavorites = User.myfavorites;
        $scope.user = {name:'',phone:'',kecheng:''}
        //$scope.user.class = $scope.myfavorites.name;
        $scope.ensure = function () {

            if ($scope.user.name != '' && $scope.user.phone != ''&& ($scope.user.kecheng == '英语'||$scope.user.kecheng == '数学'||$scope.user.kecheng == '法语'
                ||$scope.user.kecheng == '粤语'||$scope.user.kecheng == '俄语'||
                $scope.user.kecheng == '语文'||$scope.user.kecheng == '硬笔字'||$scope.user.kecheng == '芭蕾舞'
                ||$scope.user.kecheng == '恰恰'||$scope.user.kecheng == '爵士'||$scope.user.kecheng == '钢琴'||
                $scope.user.kecheng == 'hip-hop'||$scope.user.kecheng == '吉他'||$scope.user.kecheng == '古筝'||$scope.user.kecheng == '美术'
                ||$scope.user.kecheng == '口琴')) {
                //$state.go('newmessage');
                alert('恭喜您，已提交您的预约，等待商家确定')
                $state.go('lesson');
                $http.post('http://172.16.20.76:3000/order',$scope.user)
                    .success(function(){})
            }else {
                if ($scope.user.name == '' && $scope.user.phone == ''&& $scope.user.kecheng == '')
                {
                    $ionicPopup.alert({
                        title: '提示',
                        template: '请输入您的相关信息'
                    });
                }
                if ($scope.user.phone == ''&&$scope.user.name!=''&&$scope.user.kecheng!='') {
                    $ionicPopup.alert({
                        title: '提示',
                        template: '请输入您的电话号码'
                    });
                }
                if ($scope.user.name == ''&&$scope.user.phone!=''&&$scope.user.kecheng!='') {
                    $ionicPopup.alert({
                        title: '提示',
                        template: '请输入您的名字'
                    });
                }
                if ($scope.user.kecheng == ''&&$scope.user.name!=''&&$scope.user.phone!='') {
                    $ionicPopup.alert({
                        title: '提示',
                        template: '请输入您要报的课程'
                    });
                }}





            //$scope.user = {}
            //$scope.ensure = function () {
            //$http.get('http://localhost:3000/order',{
            //        parmas:{
            //              name:$scope.user.name,
            //              class:$scope.myfavorites.name
            //                    }
            //     })
            //    .success(function(){
            //
            //if ($scope.user.name != '' && $scope.user.phone != '') {
            //    $ionicPopup.alert({
            //        title: '提示',
            //        template: '报名成功，我们将在三个工作日内联系您'
            //    }).then(function (res) {
            //        if (res == true) {
            //        $state.go('home')
            //            .then(function (train) {
            //                User.remove(train);
            //            })
            //        } else {
            //
            //        }
            //    });
            //} else {
            //    if ($scope.user.name == '' && $scope.user.phone == '') {
            //        $ionicPopup.alert({
            //            title: '提示',
            //            template: '请输入您的相关信息'
            //        });
            //    }
            //    if ($scope.user.name !='' && $scope.user.phone == '') {
            //        $ionicPopup.alert({
            //            title: '提示',
            //            template: '请输入您的电话号码'
            //        });
            //    }
            //    if ($scope.user.name == '' && $scope.user.phone != '') {
            //        $ionicPopup.alert({
            //            title: '提示',
            //            template: '请输入您的名字'
            //        });
            //    }
            //
            //}
            //    })

        }

        $scope.test = function () {
            $scope.lessoned = Train1.get($stateParams.trainId)
        }

    })
//联系我们
    .controller('PhoneCtrl', function ($scope, $state) {
        $scope.back = function () {
            $state.go("home");
        }
    })
//全体老师页面
    .controller('TeachersCtrl', function ($scope, $stateParams, $http,Teacherss, $state,Trophy) {


        //获奖展示
        $scope.data={}
        $scope.rewardeds = {};
        $scope.imgurl = IMGURL;
        $http.get(URL + 'rewarded')
            .success(function(d){

                $scope.data.rewarded = d.rewarded;
                //$scope.activitys.name = data.name;
            })



        $scope.teachers = Teacherss.all();
        $scope.back = function () {
            $state.go('home');
        }
        $scope.trophy1 = {
            f1: './img/f1.jpg',
            f2: './img/f2.jpg',
            f3: './img/f3.jpg',
            f4: './img/f4.jpg',
            f5: './img/f5.jpg'
        }
        $scope.trophy = Trophy.all();
    })
//全体老师子页面
    .controller('Teachers-detailCtrl', function ($scope, $stateParams, Teacherss, $state,Trophy) {
        $scope.teacher = Teacherss.get($stateParams.teacherId);
        $scope.trophy = Trophy.get($stateParams.trophyId);
        $scope.back = function () {
            $state.go('teachers');
        }
    })
//获奖展示
    .controller('TrophyCtrl', function ($scope, $stateParams, Trophy, $state) {
        $scope.trophy1 = {
            f1: './img/f1.jpg',
            f2: './img/f2.jpg',
            f3: './img/f3.jpg',
            f4: './img/f4.jpg',
            f5: './img/f5.jpg'
        }
        $scope.trophy = Trophy.all();
        $scope.back = function () {
            $state.go("home");
        }
    })
//获奖展示子页
    .controller('TrophyDetailCtrl', function ($scope, $stateParams, Trophy, $state) {
        $scope.trophy = Trophy.get($stateParams.trophyId);
        $scope.return = function () {
            $state.go("teachers");
        }
    })
//个人页面控制器
    .controller('AccountCtrl', function ($scope, $ionicPopup, $state) {
        $scope.settings = {
            enableFriends: true
        }
        $scope.refer = function () {
            $ionicPopup.confirm({
                title: '提示',
                template: '确定提交留言吗？',
                cancelText: '取消',
                okText: '确定'
            }).then(function (res) {
                if (res == true) {

                } else {

                }
            });
        }
        $scope.myclass = function () {
            $state.go('myclass');
        }
        $scope.mydata = function () {
            $state.go('mydata');
        }
        $scope.navigation = function () {
            $state.go('navigation');
        }
    })

//参加班级控制器
    .controller('MyclassCtrl', function () {


    })
//留言展示
    .controller('NewmessageCtrl', function ($scope,$http,$state,Message) {
        $scope.$on('$ionicView.beforeEnter', function(viewInfo, state)  {


            $scope.back = function () {
                $state.go('home');
            }
            $scope.newmessage = function () {
                $state.go('newmessage-1');
            }
            //$scope.mymessage = Message.mymessage;
            //$scope.date = new Date();


            $http.get(URL+'message')
                .success(function (da) {
                    $scope.mymessage = da;

                });

            //$scope.loadData= function() {
            //
            //}
            //$scope.loadData();

        })
    })
//单个留言（不能回复）
    .controller('formessageCtrl', function ($scope, $state, $http, $rootScope, $stateParams, $ionicLoading, $timeout,$routeParams) {
        //$scope.imgurl = IMGURL;

        $scope.back = function () {
            $state.go("newmessage");
        };
        // 根据点击的链接，发送对应的请求
        $http.get(URL+'message/' + $stateParams._id).success(function (data) {
            $scope.messageaa = data; // 将获取到的数据 通过$scope绑定成NG的数据模型
        });

        $scope.form = {answer:'',date:new Date()};
        $scope.form.submit = function () {
            if ($scope.form.answer == '') {
                alert('空的就不要提交啦')
            } else {
                $ionicLoading.show({
                    content: 'Loading',
                    animation: 'fade-in',
                    showBackdrop: true,
                    maxWidth: 200,
                    showDelay: 0
                });
                $timeout(function () {
                    $ionicLoading.hide();
                    $http.post(URL + 'message/' + $stateParams._id + '/answer', {answer:$scope.form.answer,date:$scope.form.date})
                        .success(function (data) {
                            $scope.messageaa.answer.push({
                                answer: $scope.form.answer,
                                date:$scope.form.date

                            });
                            $state.go('newmessage')
                        }).error(function (error) {
                            alert(error);
                        }).finally();
                }, 2000);
            }
        }
        $scope.date = new Date();

    })
//单个留言（能回复）
    .controller('formessage1Ctrl', function ($scope, $state, $http, $rootScope, $stateParams, $ionicLoading, $timeout,$routeParams) {
        //$scope.imgurl = IMGURL;

        $scope.back = function () {
            $state.go("newmessage");
        };
        // 根据点击的链接，发送对应的请求
        $http.get(URL+'message/' + $stateParams._id).success(function (data) {
            $scope.messageaa = data; // 将获取到的数据 通过$scope绑定成NG的数据模型
        });

        $scope.form = {answer:'',date:new Date()};
        $scope.form.submit = function () {
            if ($scope.form.answer == '') {
                alert('空的就不要提交啦')
            } else {
                $ionicLoading.show({
                    content: 'Loading',
                    animation: 'fade-in',
                    showBackdrop: true,
                    maxWidth: 200,
                    showDelay: 0
                });
                $timeout(function () {
                    $ionicLoading.hide();
                    $http.post(URL + 'message/' + $stateParams._id + '/answer',{answer:$scope.form.answer,date:$scope.form.date})
                        .success(function (data) {
                            $scope.messageaa.answer.push({
                                answer: $scope.form.answer,
                                date:$scope.form.date
                            });
                            $state.go('newmessage')
                        }).error(function (error) {
                            alert(error);
                        }).finally();
                }, 2000);
            }
        }
        $scope.date = new Date();

    })
//添加留言
    .controller('Newmessage-1Ctrl', function ($scope,$http,$state,Message,$ionicPopup) {
        $scope.text={title:'',content:'',category:''};
        $scope.back= function () {
            if ($scope.text.title == '' && $scope.text.content == '' && $scope.text.category == '') {
                $state.go('newmessage');
            }else {
                $ionicPopup.confirm({
                    title: '提示',
                    template: '你还没提交留言呢！',
                    cancelText: '再看看',
                    okText: '不提交'
                }).then(function (res) {
                    if (res == true) {
                        $state.go('newmessage')
                    } else {
                    }
                });
            }
        }
        $scope.sendFeedback = function (text) {
            if (text.title != '' && text.content != '' && text.category != '') {
                $ionicPopup.confirm({
                    title: '提示',
                    template: '确定要提交留言吗',
                    cancelText: '取消',
                    okText: '确定'
                }).then(function (res) {
                    if (res == true) {
                        $http.post(URL+'message',$scope.text).success(function(){

                        })
                        $state.go('newmessage',{}, {reload: true});
                        //$scope.currentSong = angular.copy(text);
                        //Message.addFruitToFavorites($scope.currentSong);
                        $scope.text={title:'',content:'',category:''};
                    } else {

                    }
                });
            }else {
                if ($scope.text.title == '' || $scope.text.content == '' || $scope.text.category == '') {
                    $ionicPopup.alert({
                        title: '提示',
                        template: '请填写完整的留言'
                    });
                }
            }




        }
    })
//课程页面控制器
    .controller('LessonCtrl', function ($scope,$http, $state, Train1, Train2, Train3, Train4, Lessonens) {

        $scope.lessonens = Lessonens.all();

        $scope.train1 = function () {
            $state.go('train1');
        }
        $scope.train2 = function () {
            $state.go('train2');
        }
        $scope.train3 = function () {
            $state.go('train3');
        }
        $scope.train4 = function () {
            $state.go('train4');
        }
        $scope.back = function () {
            $state.go('home');
        }
        //数据绑定
        $scope.lesson = {
            lesson1: './img/preschool.jpg',
            lesson2: './img/primary.png',
            lesson3: './img/camp.jpg',
            lesson4: './img/primary.png',
            name1: '语言类',
            name2: '学习类',
            name3: '舞蹈类',
            name4: '音乐类'
        }
        $http.get(URL+'reqorder')
            .success(function(da){
                $scope.kc= da;
            })

    })
//以报课程
    .controller('LessonedCtrl', function ($http, $scope, Lessonens, $stateParams, $state) {
        $scope.lessoned = Lessonens.get($stateParams.lessonensId);
        $scope.back = function () {
            $state.go('lesson');
        }

    })
//第一类课程单个课堂详细介绍控制器
    .controller('Train1-1Ctrl', function ($scope, $state, Train1, User, $stateParams, $ionicPopup) {
        $scope.train = Train1.get($stateParams.trainId);
        $scope.back = function () {
            $state.go('lesson');
        }

        $scope.sendFeedback = function (train) {
            $scope.currentSong = angular.copy(train);
            User.addFruitToFavorites($scope.currentSong);
            $ionicPopup.confirm({
                title: '提示',
                template: '切换到报名页面吗？',
                cancelText: '取消',
                okText: '确定'
            }).then(function (res) {
                if (res == true) {
                    $state.go('products');
                } else {

                }
            });
        }
    })
//第二类课程单个课堂详细介绍控制器
    .controller('Train2-2Ctrl', function ($scope, $state, Train2, User, $stateParams, $ionicPopup) {
        $scope.train = Train2.get($stateParams.trainId);
        $scope.back = function () {
            $state.go('lesson');
        }
        $scope.sendFeedback = function (train) {
            $scope.currentSong = angular.copy(train);
            User.addFruitToFavorites($scope.currentSong);
            $ionicPopup.confirm({
                title: '提示',
                template: '切换到报名页面吗？',
                cancelText: '取消',
                okText: '确定'
            }).then(function (res) {
                if (res == true) {
                    $state.go('products');
                } else {

                }
            });
        }
    })
//第三类课程单个课堂详细介绍控制器
    .controller('Train3-3Ctrl', function ($scope, $state, Train3, User, $stateParams, $ionicPopup) {
        $scope.train = Train3.get($stateParams.trainId);

        $scope.back = function () {
            $state.go('lesson');
        }
        $scope.sendFeedback = function (train) {
            $scope.currentSong = angular.copy(train);
            User.addFruitToFavorites($scope.currentSong);
            $ionicPopup.confirm({
                title: '提示',
                template: '切换到报名页面吗？',
                cancelText: '取消',
                okText: '确定'
            }).then(function (res) {
                if (res == true) {
                    $state.go('products');
                } else {

                }
            });
        }
    })
//第四类课程单个课堂详细介绍控制器
    .controller('Train4-4Ctrl', function ($scope, $state, Train4, User, $stateParams, $ionicPopup) {
        $scope.train = Train4.get($stateParams.trainId);
        $scope.back = function () {
            $state.go('lesson');
        }
        $scope.sendFeedback = function (train) {
            $scope.currentSong = angular.copy(train);
            User.addFruitToFavorites($scope.currentSong);
            $ionicPopup.confirm({
                title: '提示',
                template: '切换到报名页面吗？',
                cancelText: '取消',
                okText: '确定'
            }).then(function (res) {
                if (res == true) {
                    $state.go('products');
                } else {

                }
            });
        }
    })


//第一类课程表框控制器
    .controller('Train1Ctrl', function ($scope, Train1, $state) {
        $scope.train11 = Train1.all();
        $scope.back = function () {
            $state.go('lesson');
        }
    })
//第二类课程表框控制器
    .controller('Train2Ctrl', function ($scope, $state, Train2) {
        $scope.train22 = Train2.all();
        $scope.back = function () {
            $state.go('lesson');
        }
    })
//第三类课程表框控制器
    .controller('Train3Ctrl', function ($scope, $state, Train3) {
        $scope.train33 = Train3.all();
        $scope.back = function () {
            $state.go('lesson');
        }
    })
//第四类课程表框控制器
    .controller('Train4Ctrl', function ($scope, $state, Train4) {
        $scope.train44 = Train4.all();
        $scope.back = function () {
            $state.go('lesson');
        }
    })
//动态主页面
    .controller('TrendsCtrl',function($scope,$http,$state,$stateParams,$ionicLoading){

        $scope.up = {};
        var file = document.getElementById('file').files[0];
        $scope.uploadFile = function(){{
                var ft = new FileTransfer();
                var op = new FileUploadOptions();
                var win = function(r){

                }
                var fail = function(error){

                }
                op.fileKey = 'file';
                op.mimeType = 'text/plain';

                if($scope.up.video != ''){
                    op.fileName = $scope.up.video.substring($scope.up.video.lastIndexOf('/')
                            + 1,$scope.up.video.lastIndexOf('.'))
                        + Date.now() + $scope.up.video.substr($scope.up.video.lastIndexOf('.'));
                    ft.upload($scope.up.video,encodeURI(URL+'public/videos'),win,fail,op);
                    $scope.up.video = op.fileName;
                }

                $ionicLoading.show({
                    content:'Loading',
                    animation:'fade-in',
                    showBackdrop: true,
                    maxWidth: 200,
                    showDelay: 0
                });
                $timeout(function(){
                    $ionicLoading.hide();
                    $http.post(URL+'upfile',$scope.up)
                        .success(function(addrewardeds){
                            alert('提交成功');
                            $state.go('rewarded');
                        }).error(function(error){
                            alert(error);
                        }).finally();
                },2000);
            }
        }









        $scope.back= function () {
            $state.go('home');
        }

        $scope.show = function(){
            $ionicLoading.show({
                template:'加载中...'
            });
        };
        $scope.hide = function(){
            $ionicLoading.hide();
        };

        $scope.dorefresh = function(){
            $scope.$broadcast('scroll.refreshComplete');
        }
    })





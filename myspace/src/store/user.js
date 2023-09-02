// 用户相关的数据模块
import $ from "jquery";
import jwt_decode from "jwt-decode";

const ModuleUser = {
    state: {
        id: "",
        username:"",
        password:"",
        photo:"",
        followercount:0,
        access:"",
        refresh:"",
        is_login:false,
    },
    getters: {

    },
    // 同步和异步都可以放
    mutations: {
        //  第一个传state，第二个传自己定有的参数
        updateUser(state , user) {
            state.id = user.id;
            state.username = user.username;
            state.photo = user.photo;
            state.followercount = user.followercount;
            state.access = user.access;
            state.refresh = user.refresh;
            state.is_login = user.is_login;
        },
        updateAccess(state , access) {
            state.access = access;
        },
        logout(state) {
            state.id = "";
            state.username = "";
            state.photo = "";
            state.followercount = 0;
            state.access = "";
            state.refresh = "";
            state.is_login = false;
        },
    },
    // 只能行异步
    actions: {
        // 第一个参数是传递api的，第二个参数是传递数据的
        login(context, data) {
            $.ajax({
                url:"https://app165.acapp.acwing.com.cn/api/token/",
               type:"POST",
               data:{
                    username: data.username,
                    password: data.password,
               }, 
               //成功的回调函数
               success(resp) {
                const {access , refresh } = resp;
                const access_obj = jwt_decode(access);

                // 定时获取jwt令牌
                setInterval(() => {
                    $.ajax({
                        url:"https://app165.acapp.acwing.com.cn/api/token/refresh/",
                        type:"POST",
                        data: {
                            refresh,
                        },
                        success(resp) {
                            // 调用成功之后刷新access
                            context.commit("updateAccess" , resp.access);
                        },
                    });
                } , 4.5 * 60 * 1000); //为了防止在第五分钟正好过期，4.5min刷新一次。

                $.ajax({
                    url:"https://app165.acapp.acwing.com.cn/myspace/getinfo/",
                    type:"GET",
                    data:{
                        user_id:access_obj.user_id,
                    },
                    headers:{
                        "Authorization":"Bearer " + access,
                    },
                    success(resp) {
                        // 调用mutation里面的api
                        context.commit("updateUser" , {
                            ...resp,
                            access: access,
                            refresh: refresh,
                            is_login: true,

                        });
                        data.success();
                    },
                });
               },
               error() {
                data.error();
               }
            });
        },

    },
    modules: {

    }
};

export default ModuleUser;

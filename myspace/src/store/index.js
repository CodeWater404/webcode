// vuex创建的全局唯一对象
import { createStore } from 'vuex';
import ModuleUser  from './user';

export default createStore({
  // state存储所有的对象
  state: {
  },
  // 间接获取state中的值
  getters: {
  },
  // 对state中值的修改要在这里！
  mutations: {
  },
  // 定义对state的操作，但是不能直接对state的值的修改
  actions: {
  },
  //当state很多的时候，对state进行分模块 ；modules中每一个对象对应着state中的每一个对象，同时拥有
  // getters、mutations、actions
  modules: { 
    user:ModuleUser,
  }
})

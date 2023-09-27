<script setup>
import axios from 'axios';
import Edit from './components/Edit.vue'
import { onMounted, ref } from 'vue';

// TODO: 列表渲染
// 思路：声明响应式1ist->调用接口获取数据->后端数据赋值给1ist->绑定到table组件

const list = ref([])
const getList = async () => {
  const res = await axios.get('/list')
  list.value = res.data
}
onMounted(() => getList())


// TODO: 删除功能
//思路：获取当前行的id->通过id调用删除接口->更新最新的列表
const onDeleted = async (id) => {
  console.log(id)
  await axios.delete(`/del/${id}`)
  getList()
}


// TODO: 编辑功能
const editRef = ref(null)
const openDialog = (item) => {
  editRef.value.open(item)
}

//更新列表
const updateList = () => {
  getList()
}

</script>

<template>
  <div class="app">
    <el-table :data="list">
      <el-table-column label="ID" prop="id"></el-table-column>
      <el-table-column label="姓名" prop="name" width="150"></el-table-column>
      <el-table-column label="籍贯" prop="place"></el-table-column>
      <el-table-column label="操作" width="150">
        <template #default="{ row }">
          <el-button type="primary" @click="openDialog(row)" link>编辑</el-button>
          <el-button type="danger" @click="onDeleted(row.id)" link>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <Edit ref="editRef" @update-list="updateList" />
</template>

<style scoped>
.app {
  width: 980px;
  margin: 100px auto 0;
}
</style>

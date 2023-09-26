# 启动项目
> 黑马vue练手案例

1. npm install
2. npm run dev

# 接口说明

## 获取列表

```javascript
axios.get('/list')
```

## 删除

```javascript
axios.delete(`/del/${id}`)
```

## 编辑

```javascript
axios.patch(`/edit/${id}`, {
  name: '姓名',
  place: '籍贯',
})
```

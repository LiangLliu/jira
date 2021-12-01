# Jira

https://www.youtube.com/watch?v=vbXuHi1kMOo&list=PL5FIFxLsMtxTTxwZ3D86ymwUSZl7YR_Tr

code : https://github.com/fefuns/jira

## React 项目初始化

```shell
npx create-react-app jira --template typescript
```

## 插件

- 代码统一格式化： [prettier](https://prettier.io/)

```shell
yarn add --dev --exact prettier

npx mrm@2 lint-staged

yarn add eslint-config-prettier
```

- 代码提交检查： [commitlint](https://github.com/conventional-changelog/commitlint)

- 本地 Node 服务器：
  - [json-server](https://github.com/typicode/json-server)
- 前端本地模拟后端： [Service Worker API](https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API)
  - 本项目后端模拟： npx imooc-jira-tool
- 组件库：
  - Antd : [https://ant.design](https://ant.design)
  - Emotion : [https://emotion.sh/docs/introduction](https://emotion.sh/docs/introduction)
- 工具库：
  - 时间处理： dayjs

## 使用 Context 存储信息

- https://reactjs.org/docs/context.html

# Server Customer Extension

客户服务端插件通过环境变量 `CUSTOMER_EXTENSION_PATH` 指定，路径支持绝对路径或相对 `packages/server` 的路径。

插件必须导出对象：

```js
module.exports = {
  name: 'customer-example',
  providers: {
    authProvider,
    storageProvider,
    userProfileProvider,
    roomMetadataProvider,
  },
  middlewares: [customerMiddleware],
  routes: [customerRouter],
};
```

约束：

- 客户路由和中间件统一挂载在 `/api/customer` 下。
- 客户中间件在核心 CORS、凭证校验、请求上下文之后执行，不能覆盖核心安全中间件。
- Provider 缺失时使用默认降级实现。
- 客户路由仍需自行校验输入；动态 SQL 字段必须使用白名单。

# PoliceSketchMaker - API密钥设置指南

## 问题诊断

根据测试结果，GLM API返回401错误：
```
"令牌已过期或验证不正确" (Token expired or validation incorrect)
```

这表明BigModel API密钥有问题。

## 解决方案

### 1. 获取新的BigModel API密钥

1. **访问BigModel控制台**：
   - 打开 [BigModel控制台](https://www.bigmodel.cn/)
   - 登录你的账户

2. **生成新的API密钥**：
   - 进入API管理页面
   - 创建新的API密钥
   - 确保密钥有足够的权限和余额

3. **验证API密钥格式**：
   - BigModel API密钥通常以 `sk-` 开头
   - 例如：`sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

### 2. 更新环境变量

1. **编辑 `.env.local` 文件**：
   ```bash
   # 在项目根目录创建或编辑 .env.local 文件
   nano .env.local
   ```

2. **添加正确的API密钥**：
   ```env
   # BigModel API Configuration (for language processing)
   BIGMODEL_API_KEY=sk-your-actual-api-key-here

   # Apify API Configuration (for image generation)
   APIFY_API_TOKEN=your_apify_api_token_here

   # Next.js Configuration
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

### 3. 验证API密钥

1. **重启开发服务器**：
   ```bash
   # 停止服务器
   pkill -f "next dev"
   
   # 重新启动
   npm run dev
   ```

2. **测试API密钥**：
   - 访问 `http://localhost:3000/test`
   - 点击 "Test Process Prompt API"
   - 检查是否还有401错误

### 4. 常见问题

#### 问题1：API密钥格式错误
**症状**：401错误
**解决**：确保API密钥格式正确，以 `sk-` 开头

#### 问题2：API密钥已过期
**症状**：401错误，提示"令牌已过期"
**解决**：在BigModel控制台生成新的API密钥

#### 问题3：余额不足
**症状**：API调用失败
**解决**：在BigModel控制台充值

#### 问题4：权限不足
**症状**：API调用被拒绝
**解决**：确保API密钥有调用GLM-4-Flash-250414模型的权限

### 5. 测试步骤

1. **检查环境变量**：
   ```bash
   curl http://localhost:3000/api/check-env
   ```

2. **测试GLM API**：
   ```bash
   curl -X POST http://localhost:3000/api/process-prompt \
     -H "Content-Type: application/json" \
     -d '{"userInput": "A 30 year old male with black hair"}'
   ```

3. **预期成功响应**：
   ```json
   {
     "processedPrompt": "A 30-year-old male with black hair...",
     "originalInput": "A 30 year old male with black hair"
   }
   ```

### 6. 获取API密钥的详细步骤

#### BigModel API密钥获取：

1. 访问 [BigModel官网](https://www.bigmodel.cn/)
2. 注册或登录账户
3. 进入"控制台"或"API管理"
4. 创建新的API密钥
5. 确保选择GLM-4-Flash-250414模型权限
6. 复制API密钥（以 `sk-` 开头）

#### Apify API令牌获取：

1. 访问 [Apify控制台](https://console.apify.com/)
2. 注册或登录账户
3. 进入"API tokens"
4. 创建新的API令牌
5. 确保有足够的余额
6. 复制API令牌

### 7. 验证清单

- [ ] BigModel API密钥格式正确（以 `sk-` 开头）
- [ ] BigModel API密钥未过期
- [ ] BigModel账户有足够余额
- [ ] API密钥有正确权限
- [ ] `.env.local` 文件正确配置
- [ ] 开发服务器已重启
- [ ] API测试通过

### 8. 联系支持

如果问题仍然存在：

1. **BigModel支持**：
   - 访问 [BigModel支持页面](https://www.bigmodel.cn/support)
   - 联系客服确认API密钥状态

2. **检查账户状态**：
   - 确认账户未被冻结
   - 确认有足够的API调用额度
   - 确认API密钥权限设置正确 
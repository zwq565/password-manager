# API 文档

## 基础信息

- **基础 URL**: `https://api.password-manager.workers.dev` (生产)
- **本地开发**: `http://localhost:8787`
- **认证**: JWT Token (Bearer)
- **内容类型**: `application/json`

## 认证 API

### 注册

```bash
POST /auth/register
{
  "email": "user@example.com",
  "password": "secure-password"
}
```

### 登录

```bash
POST /auth/login
{
  "email": "user@example.com",
  "password": "secure-password"
}
```

## 密码 API

### 获取所有密码

```bash
GET /passwords
Authorization: Bearer {token}
```

### 创建密码

```bash
POST /passwords
Authorization: Bearer {token}
{
  "title": "Gmail",
  "url": "https://gmail.com",
  "username": "user@gmail.com",
  "encryptedPassword": "encrypted-data"
}
```

### 更新密码

```bash
PUT /passwords/{id}
Authorization: Bearer {token}
```

### 删除密码

```bash
DELETE /passwords/{id}
Authorization: Bearer {token}
```

## 错误响应

- `400` - Bad Request
- `401` - Unauthorized
- `404` - Not Found
- `500` - Server Error

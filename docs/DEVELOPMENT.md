# 开发指南

## 环境设置

### 系统要求

- Node.js 18+
- pnpm 8+
- Git
- Cloudflare 账户

### 安装

```bash
git clone https://github.com/zwq565/password-manager.git
cd password-manager
pnpm install
```

## 本地开发

### 启动前端

```bash
cd frontend
pnpm dev
# http://localhost:5173
```

### 启动后端

```bash
cd backend
wrangler dev
# http://localhost:8787
```

## 项目结构

```
password-manager/
├── frontend/          # React + Vite + TypeScript
│   ├── src/
│   ├── package.json
│   └── vite.config.ts
├── backend/           # Cloudflare Workers + Hono
│   ├── src/
│   ├── package.json
│   └── wrangler.toml
└── docs/             # 文档
    ├── ARCHITECTURE.md
    ├── API.md
    ├── SECURITY.md
    └── DEVELOPMENT.md
```

## 编码规范

### TypeScript

- 严格模式 (`strict: true`)
- 所有函数必须有类型注解
- 避免使用 `any`

### React 组件

- 函数式组件
- TypeScript Props 接口
- 单一职责原则

### 命名

- 文件: `kebab-case`
- 函数/变量: `camelCase`
- 类/接口: `PascalCase`
- 常量: `UPPER_SNAKE_CASE`

## 部署

### 部署前端

```bash
cd frontend
pnpm build
wrangler pages deploy dist
```

### 部署后端

```bash
cd backend
wrangler publish
```

### 项目简介

个人技术博客，基于 Hexo 7 与 anzhiyu 主题构建的静态站点。

- 依赖管理使用 pnpm；部署由 GitHub Actions 完成，推送到 `main` 触发 `.github/workflows/deploy.yml`，构建产物发布到 `gh-pages` 分支（GitHub Pages）
- 文章为 Markdown，位于 `source/_posts/`，按主题分目录。分类写在 front-matter 的 `categories`
- 图片使用阿里云 OSS 图床，本地不存放文章配图
- 已启用的自定义能力：MathJax 公式渲染、社交图标点击复制（配置里用 `copy:` 前缀声明）、侧边栏目录导航
- 常用命令：`pnpm server` 本地预览、`pnpm clean` 清理、`pnpm build` 生成、`pnpm deploy` 部署

### 配置文件

| 相对路径 | 作用 |
| --- | --- |
| `_config.yml` | Hexo 站点主配置：站点信息、URL、目录结构、主题选择、分页、部署等 |
| `_config.anzhiyu.yml` | anzhiyu 主题的用户配置，覆盖主题默认值；调整主题行为优先改这里 |
| `themes/anzhiyu/_config.yml` | anzhiyu 主题的出厂默认配置，主题升级会更新，一般不直接改 |
| `themes/anzhiyu/plugins.yml` | 主题引用的第三方库（MathJax、KaTeX、Snackbar、sharejs 等）的 CDN 地址与版本号 |
| `_config.landscape.yml` | Hexo 默认主题 landscape 的配置，本项目未使用，为空文件 |
| `pnpm-lock.yaml` | pnpm 依赖锁定文件 |
| `pnpm-workspace.yaml` | pnpm 工作区定义 |

主题配置的合并优先级（后者覆盖前者）：`themes/anzhiyu/_config.yml` → `_config.anzhiyu.yml` → `_config.yml` 的 `theme_config` 段。

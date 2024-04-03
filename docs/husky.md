<!-- 确保代码质量，统一标准，节省时间，提高开发效率 -->

<!-- 安装  pnpm add husky -Dw -->

<!-- npx husky add .husky/pre-commit "npx eslint . --fix husky - created .husky/pre-commit"   执行此命令，husky可以在提交代码之前帮助修复代码，无法修复的就提示报错 -->
<!-- 手动创建，在.husky文件夹下面直接创建一个名字叫pre-commit的文件 -->
<!-- 把下面的代码copy上去

#!/usr/bin/env sh

. "$(dirname -- "$0")/_/husky.sh"

npx eslint . --fix

 -->

<!--
 上面命令会检索所有文件符合eslint规范，如果项目太大，会导致内存溢出，速度慢等情况，优化一下
 lint-staged   安装pnpm add lint-staged -Dw
 在package.json中，添加lint-staged的配置
   "lint-staged": {
    "./**/*.{js,ts,vue,tsx,jsx,css,less,json}": [
      "eslint --fix"
    ]
  }
  -->

<!--
  配置完成后，修改pre-commit文件中的命令，
  把npx eslint . --fix注释掉
  使用
  npx lint-staged
   -->
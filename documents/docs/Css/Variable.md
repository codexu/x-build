# 内置变量

## 字号

<template>
  <ul class="content">
    <li style="font-weight: bold; margin-bottom: 10px;">
      <span>说明</span>
      <span>值</span>
      <span>变量</span>
      <span>操作</span>
    </li>
    <li style="font-size: 12px">
      <span>辅助文字</span>
      <span>12px</span>
      <span>$font-size-sm</span>
      <a v-copy="'$font-size-sm'">复制</a>
    </li>
    <li style="font-size: 14px">
      <span>正文</span>
      <span>14px</span>
      <span>$font-size-base</span>
      <a v-copy="'$font-size-base'">复制</a>
    </li>
    <li style="font-size: 16px">
      <span>大号文字</span>
      <span>16px</span>
      <span>$font-size-lg</span>
      <a v-copy="'$font-size-lg'">复制</a>
    </li>
    <li><br /></li>
    <li style="font-size: 26px">
      <span>标题 H1</span>
      <span>26px</span>
      <span>$heading-1-size</span>
      <a v-copy="'$heading-1-size'">复制</a>
    </li>
    <li style="font-size: 24px">
      <span>标题 H2</span>
      <span>24px</span>
      <span>$heading-2-size</span>
      <a v-copy="'$heading-2-size'">复制</a>
    </li>
    <li style="font-size: 22px">
      <span>标题 H3</span>
      <span>22px</span>
      <span>$heading-3-size</span>
      <a v-copy="'$heading-3-size'">复制</a>
    </li>
    <li style="font-size: 20px">
      <span>标题 H4</span>
      <span>20px</span>
      <span>$heading-4-size</span>
      <a v-copy="'$heading-4-size'">复制</a>
    </li>
    <li style="font-size: 18px">
      <span>标题 H5</span>
      <span>18px</span>
      <span>$heading-5-size</span>
      <a v-copy="'$heading-5-size'">复制</a>
    </li>
    <li style="font-size: 16px">
      <span>标题 H6</span>
      <span>16px</span>
      <span>$heading-6-size</span>
      <a v-copy="'$heading-6-size'">复制</a>
    </li>
    <li><br /></li>
    <li>
      <span>行高</span>
      <span>2</span>
      <span>$line-height-base</span>
      <a v-copy="'$line-height-base'">复制</a>
    </li>
    <li>
      <span>字间距</span>
      <span>2</span>
      <span>$letter-space-base</span>
      <a v-copy="'$letter-space-base'">复制</a>
    </li>
    <li>
      <span>默认字体</span>
      <span>Microsoft YaHei,PingFang SC</span>
      <span>$font-family-base</span>
      <a v-copy="'$font-family-base'">复制</a>
    </li>
  </ul>
</template>

## 颜色

<template>
  <ul class="content">
    <li style="font-weight: bold; margin-bottom: 10px;">
      <span>说明</span>
      <span>值</span>
      <span>变量</span>
      <span>操作</span>
    </li>
    <li>
      <span style="color: #1BA2FF">主色调</span>
      <span>#1BA2FF</span>
      <span>$primary-color</span>
      <a v-copy="'$primary-color'">复制</a>
    </li>
    <li>
      <span style="color: #24CBB2">成功</span>
      <span>#24CBB2</span>
      <span>$success-color</span>
      <a v-copy="'$success-color'">复制</a>
    </li>
    <li>
      <span style="color: #DF0140">失败</span>
      <span>#DF0140</span>
      <span>$error-color</span>
      <a v-copy="'$error-color'">复制</a>
    </li>
    <li>
      <span style="color: #FAE053">警告</span>
      <span>#FAE053</span>
      <span>$warning-color</span>
      <a v-copy="'$warning-color'">复制</a>
    </li>
    <li>
      <span style="color: #051724">正文</span>
      <span>#051724</span>
      <span>$text-color</span>
      <a v-copy="'$text-color'">复制</a>
    </li>
    <li>
      <span style="color: #051724">标题</span>
      <span>$text-color</span>
      <span>$title-color</span>
      <a v-copy="'$title-color'">复制</a>
    </li>
    <li>
      <span style="color: #CDD0D3">注释</span>
      <span>#CDD0D3</span>
      <span>$notes-color</span>
      <a v-copy="'$notes-color'">复制</a>
    </li>
    <li>
      <span style="color: #1BA2FF">数字</span>
      <span>#1BA2FF</span>
      <span>$number-color</span>
      <a v-copy="'$number-color'">复制</a>
    </li>
  </ul>
</template>

<script>
import MCopy from 'm-copy';

export default {
  directives: {
    copy: MCopy.directive,
  },
}
</script>

<style>
  .content li{
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 2;
    font-size: 14px;
  }
  .content li span:nth-child(1){
    width: 150px
  }
  .content li span:nth-child(2){
    width: 220px
  }
  .content li span:nth-child(3){
    flex: 1;
  }
  .content li a{
    font-size: 12px;
    cursor: pointer;
  }
</style>

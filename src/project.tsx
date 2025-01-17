import { makeProject } from '@revideo/core'
import { 动画 } from './scenes/animation'
import { 代码 } from './scenes/code'
import { 滤镜 } from './scenes/filters'
import { 公式 } from './scenes/formula'
import { 连线 } from './scenes/ligature'
import { 引用 } from './scenes/ref'
import { 信号 } from './scenes/signal'
import { 层次结构 } from './scenes/stage'
import { 快速开始 } from './scenes/start'
import { 过渡 } from './scenes/transitions'
import { TTS } from './scenes/tts'

export default makeProject({
  // 一些自己编写的简单的例子, 仅作为参考, 省略了很多内容.
  scenes: [快速开始, TTS, 层次结构, 引用, 动画, 信号, 过渡, 代码, 公式, 连线, 滤镜],
  settings: {
    shared: {
      size: { x: 1920, y: 1080 },
    },
    // https://github.com/redotvideo/revideo/issues/182
    rendering: {
      exporter: { name: '@revideo/core/ffmpeg', options: { format: 'mp4' } },
    },
  },
})

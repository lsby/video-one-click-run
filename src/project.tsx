import { Img, makeScene2D, Rect, Txt } from '@revideo/2d'
import { createRef, makeProject, waitFor } from '@revideo/core'
import { tts } from './components/tts'

let 我的视频 = makeScene2D('我的视频', function* (view) {
  view.add(<Rect width={'100%'} height={'100%'} fill={'white'} />)

  let 字幕区域 = createRef<Rect>()
  let 展示区域 = createRef<Rect>()
  view.add(<Rect ref={字幕区域} y={450} />)
  view.add(<Rect ref={展示区域} />)

  展示区域().removeChildren()
  展示区域().add(<Txt text={'一键启动, 便捷运行.'} fontSize={100} />)
  展示区域().add(<Txt text={'One-Click-Run'} fontSize={80} y={120} />)
  yield* waitFor(1)

  展示区域().removeChildren()
  展示区域().add(<Txt text={'动机'} fontSize={80} />)
  yield* tts(字幕区域(), '不知道大家有没有遇到这样的情况.')
  yield* tts(字幕区域(), '看新闻看到某个项目挺牛逼的, 想亲自体验一下.')
  yield* tts(字幕区域(), '结果配置环境, 安装依赖, 不但浪费大量的时间, 还把电脑搞的一团糟.')
  yield* tts(字幕区域(), '尤其是一些不太规范的项目, 还得自己排查依赖冲突之类的问题. (特别是python项目)')
  yield* tts(字幕区域(), '去网上找别人打包好的一键包吧, 百度盘下载速度感人, 而且还可能存在安全风险.')
  yield* tts(字幕区域(), '如果软件都可以一键安装依赖, 一键启动, 还不污染系统环境就好了.')

  展示区域().removeChildren()
  展示区域().add(<Txt text={'https://github.com/one-click-run'} fontSize={80} />)
  yield* tts(字幕区域(), '所以我自己搞了个github组织, 就叫"一键运行".')
  yield* tts(字幕区域(), '致力于提供有用的项目的一键启动脚本, 只要网络通畅, 双击脚本就可以自动安装依赖, 一键运行.')
  yield* tts(字幕区域(), '这样就可以直接从源下载, 而且脚本也是完全透明的, 不存在安全风险.')

  展示区域().removeChildren()
  let 便携环境 = createRef<Txt>()
  展示区域().add(<Txt ref={便携环境} text={'便携环境'} fontSize={80} />)
  yield* tts(字幕区域(), '要达成这个目标, 首先我们需要便携式的运行环境.')
  yield* tts(字幕区域(), '这些环境不会安装在你的系统路径里, 相反, 会安装在指定的文件夹中.')
  yield* tts(字幕区域(), '这个过程不会搞乱你的电脑配置, 不会在某个你不知道的地方创建奇怪的东西.')
  yield* tts(字幕区域(), '你可以随意移动和删除这个文件夹, 非常干净.')

  yield* 便携环境().position({ x: 0, y: -250 }, 1)
  展示区域().add(<Txt text={'python'} fontSize={60} x={-600} />)
  yield* tts(字幕区域(), '我先尝试制作了一个便携式的python, 大概方法是用官方安装包安装到某个目录, 然后将这个目录打包.')
  yield* tts(字幕区域(), '然后提供一个脚本, 每次通过这个脚本启动.')
  yield* tts(字幕区域(), '脚本会搜索这个目录中所有包含我安装路径的配置文件, 并将它们动态替换.')
  yield* tts(字幕区域(), '后来我发现, 安装路径不但存在于配置文件中, 甚至被硬编码到了可执行文件中.')
  yield* tts(字幕区域(), '最后我想了个办法, 额外提供了一个修复脚本, 来重新生成这些可执行文件.')

  展示区域().add(<Txt text={'conda'} fontSize={60} x={0} />)
  yield* tts(字幕区域(), '但后来我意识到, 有些包需要conda才能安装(比如一些预编译的包), 我又制作了便携式的conda环境.')
  yield* tts(字幕区域(), '大概方法是用官方安装包进行静默安装, 并且指定不注册到系统, 这样就只会生成一个干净的文件夹.')
  yield* tts(字幕区域(), '生成的文件也有很多硬编码的路径, 我同样提供了修复脚本来处理这些问题.')

  展示区域().add(<Txt text={'node.js'} fontSize={60} x={600} />)
  yield* tts(字幕区域(), '最后, 我还制作了nodejs的便携环境.')
  yield* tts(字幕区域(), '这个很容易, 官方直接提供了二进制分发, 设置一下环境变量就好了.')

  展示区域().removeChildren()
  let 使用 = createRef<Txt>()
  展示区域().add(<Txt ref={使用} text={'使用'} fontSize={80} />)
  yield* tts(字幕区域(), '要使用这些便携环境很简单, 我这里用conda作为例子.')
  yield* 使用().position({ x: 0, y: -250 }, 1)
  展示区域().add(
    <Txt
      text={'irm "https://raw.githubusercontent.com/one-click-run/portable-conda/main/init.ps1" | iex'}
      fontSize={40}
    />,
  )
  yield* tts(字幕区域(), '只需要切换到你想要安装环境的路径, 用powershell执行这个命令.')
  展示区域().removeChildren()
  展示区域().add(<Img src={'/QQ20250118-000757.png'} width={'80%'} />)
  yield* tts(字幕区域(), '就会出现一个图形界面, 让你选择你想要的版本, 之后都是自动运行的.')
  yield* tts(字幕区域(), '顺便一说, 如果不想图形化的交互, 也可以通过参数直接指定版本.')
  展示区域().removeChildren()
  展示区域().add(<Img src={'/QQ20250118-001436.png'} width={'80%'} />)
  yield* tts(字幕区域(), '执行完成后, 会出现一个OCR-portable-conda文件夹, 这是实际的环境.')
  yield* tts(字幕区域(), '还会出现OCR-portable-conda和OCR-portable-conda-fix两个脚本.')
  yield* tts(字幕区域(), '其中OCR就是One Click Run的简写.')
  yield* tts(字幕区域(), '前者用于进入环境, 后者用于修复环境.')
  yield* tts(字幕区域(), '(当你的环境文件夹路径变化的时候, 需要执行修复脚本.)')
  yield* tts(字幕区域(), '最后, 进入环境, 就可以愉快的使用conda等程序了.')

  展示区域().removeChildren()
  展示区域().add(<Txt text={'cosy voice'} fontSize={80} y={-250} />)
  展示区域().add(<Txt text={'https://github.com/one-click-run/cosy-voice'} fontSize={60} />)
  yield* tts(字幕区域(), '基于这个方案, 我成功的制作了一个cosy voice的一键运行脚本.')
  yield* tts(字幕区域(), '也放在这个组织的项目里了.')
  yield* tts(字幕区域(), '只需要将这个项目克隆, 然后双击运行脚本, 剩下一切都是自动的.')
  yield* tts(字幕区域(), '这是一个AI驱动的文字转语音软件.')
  yield* tts(字幕区域(), '本视频的语音就是用这个软件生成的.')

  展示区域().removeChildren()
  展示区域().add(<Txt text={'欢迎加入'} fontSize={80} />)
  yield* tts(字幕区域(), '以后, 我尝试其他软件的时候, 也会顺便将它们也都制作为这种一键脚本.')
  yield* tts(字幕区域(), '到时候应该也会发视频宣传一下.')
  yield* tts(字幕区域(), '也欢迎有相同想法的人加入这个组织.')
  yield* tts(字幕区域(), '有意向的小伙伴可以联系我.')

  展示区域().removeChildren()
  展示区域().add(<Txt text={'感谢观看'} fontSize={80} />)
  yield* tts(字幕区域(), '这次视频就是这样, 感谢观看.')
})

export default makeProject({
  scenes: [我的视频],
  settings: {
    shared: { size: { x: 1920, y: 1080 } },
    // https://github.com/redotvideo/revideo/issues/182
    rendering: {
      exporter: { name: '@revideo/core/ffmpeg', options: { format: 'mp4' } },
    },
  },
})

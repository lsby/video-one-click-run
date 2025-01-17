import { makeScene2D } from '@revideo/2d'
import { tts } from '../components/tts'

export let TTS = makeScene2D('TTS', function* (view) {
  // 为了避免多次重复生成, 将生成结果记忆在了本地存储中, 如出现问题, 需要清空浏览器存储.
  yield* tts(view, '你好, 这是一句话.')
})

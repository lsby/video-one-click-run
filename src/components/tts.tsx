import { Audio, View2D } from '@revideo/2d'
import { Promisable, ThreadGenerator, createRef, waitFor } from '@revideo/core'
import { z } from 'zod'
import { CosyVoice } from '../model/cosy-voice'
import { memoizeAsyncToLocalStorage } from '../tools/tools'

let cosyVoice = new CosyVoice('http://127.0.0.1:8000')
let 带缓存的请求 = memoizeAsyncToLocalStorage(cosyVoice.生成acc地址.bind(cosyVoice))
export function* tts(
  view: View2D,
  文本: string,
): Generator<void | Promise<any> | ThreadGenerator | Promisable<any>, void> {
  let 语音地址 =
    z
      .string()
      .array()
      .parse(yield 带缓存的请求(文本))[0] ?? null
  if (语音地址 === null) throw new Error('生成语音失败')

  let 音频引用 = createRef<Audio>()
  yield view.add(<Audio src={语音地址} play={true} ref={音频引用} />)
  yield* waitFor(音频引用().getDuration())
}

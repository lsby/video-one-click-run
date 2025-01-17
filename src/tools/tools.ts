/**
 * 注意: 输入输出必须是基本类型
 */
export function memoizeAsyncToLocalStorage<T extends (...args: any[]) => Promise<any>>(fn: T): T {
  // 从 localStorage 中加载缓存
  let loadCacheFromStorage = (): void => {
    let cachedData = localStorage.getItem('memoizeCache')
    if (cachedData !== null) {
      try {
        let parsedCache = JSON.parse(cachedData) as { [key: string]: any }
        Object.entries(parsedCache).forEach(([key, value]) => {
          cache.set(key, value)
        })
      } catch (e) {
        console.error('Failed to parse cache from localStorage:', e)
      }
    }
  }

  // 保存缓存到 localStorage
  let saveCacheToStorage = (): void => {
    let cacheObject: { [key: string]: any } = {}
    cache.forEach((value, key) => {
      cacheObject[key] = value as unknown
    })
    localStorage.setItem('memoizeCache', JSON.stringify(cacheObject))
  }

  // 缓存
  let cache = new Map<string, any>()

  loadCacheFromStorage()

  return async function (...args: Parameters<T>): Promise<ReturnType<T>> {
    let key = JSON.stringify(args) // 使用参数的 JSON 字符串作为缓存的键

    // 如果缓存中已有结果，直接返回缓存的结果
    if (cache.has(key)) {
      console.log('使用缓存的结果')
      return Promise.resolve(cache.get(key)) // 返回缓存的结果，包装成 Promise
    }

    // 否则，计算结果并缓存
    let result = fn(...args)

    if (result instanceof Promise) {
      try {
        let value_2 = (await result) as unknown
        cache.set(key, value_2) // 缓存结果
        saveCacheToStorage() // 保存缓存到 localStorage
        return value_2 as any
      } catch (error) {
        cache.delete(key) // 如果出错，删除缓存
        saveCacheToStorage() // 发生错误时也保存缓存状态
        throw error
      }
    }

    // 如果不是 Promise 直接返回
    cache.set(key, result) // 缓存结果
    saveCacheToStorage() // 保存缓存到 localStorage
    return Promise.resolve(result) // 包装成 Promise
  } as T
}

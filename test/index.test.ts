import { getStorage, MiddlewareFn } from '../dist/index.esm.js'
import { config } from 'dotenv'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)

config({ path: '.env' })

it('can save in-memory as the default (server)', () => {
  const memoryStorage = getStorage<number>()
  memoryStorage.set('abc', 123)
  expect(memoryStorage.get('abc', 0)).toStrictEqual(123)
})

it('can save in-memory (server)', () => {
  const memoryStorage = getStorage<number>('memory')
  memoryStorage.set('abc', 123)
  expect(memoryStorage.get('abc', 0)).toStrictEqual(123)
})

it('can delete from memory (server)', () => {
  const memoryStorage = getStorage<number>('memory')
  memoryStorage.set('abc', 123)
  memoryStorage.del('abc')
  expect(memoryStorage.get('abc', 444)).toStrictEqual(444)
})

it('can clear memory (server)', () => {
  const memoryStorage = getStorage<number>('memory')
  memoryStorage.set('abc', 123)
  memoryStorage.clear()
  expect(memoryStorage.get('abc', 444)).toStrictEqual(444)
})

it('can write and read from localStorage (server)', () => {
  const memoryStorage = getStorage<number>('local')
  memoryStorage.set('abc', 123)
  expect(memoryStorage.get('abc', 0)).toStrictEqual(123)
})

it('can delete from localStorage (server)', () => {
  const memoryStorage = getStorage<number>('local')
  memoryStorage.set('abc', 123)
  memoryStorage.del('abc')
  expect(memoryStorage.get('abc', 444)).toStrictEqual(444)
})

it('can clear localStorage (server)', () => {
  const memoryStorage = getStorage<number>('local')
  memoryStorage.set('abc', 123)
  memoryStorage.clear()
  expect(memoryStorage.get('abc', 444)).toStrictEqual(444)
})

it('can write and read from sessionStorage (server)', () => {
  const memoryStorage = getStorage<number>('session')
  memoryStorage.set('abc', 123)
  expect(memoryStorage.get('abc', 0)).toStrictEqual(123)
})

it('can write and read from sessionStorage using a middleware (server)', () => {
  const getMiddleware: MiddlewareFn<number> = <T>(key: string, value: T) => {
    return value
  }

  const setMiddleware: MiddlewareFn<number> = <T>(key: string, value: T) => {
    return value
  }

  const memoryStorage = getStorage<number>('session')
  memoryStorage.set('abc', 123, setMiddleware)
  expect(memoryStorage.get('abc', 0, getMiddleware)).toStrictEqual(123)
})

it('can delete from sessionStorage (server)', () => {
  const memoryStorage = getStorage<number>('session')
  memoryStorage.set('abc', 123)
  memoryStorage.del('abc')
  expect(memoryStorage.get('abc', 444)).toStrictEqual(444)
})

it('can clear sessionStorage (server)', () => {
  const memoryStorage = getStorage<number>('session')
  memoryStorage.set('abc', 123)
  memoryStorage.clear()
  expect(memoryStorage.get('abc', 444)).toStrictEqual(444)
})

it('can save in-memory as the default (browser)', () => {
  require('global-jsdom/register')
  const memoryStorage = getStorage<number>()
  memoryStorage.set('abc', 123)
  expect(memoryStorage.get('abc', 0)).toStrictEqual(123)
})

it('can save in-memory (browser)', () => {
  require('global-jsdom/register')
  const memoryStorage = getStorage<number>('memory')
  memoryStorage.set('abc', 123)
  expect(memoryStorage.get('abc', 0)).toStrictEqual(123)
})

it('can delete from memory (browser)', () => {
  require('global-jsdom/register')
  const memoryStorage = getStorage<number>('memory')
  memoryStorage.set('abc', 123)
  memoryStorage.del('abc')
  expect(memoryStorage.get('abc', 444)).toStrictEqual(444)
})

it('can clear memory (browser)', () => {
  require('global-jsdom/register')
  const memoryStorage = getStorage<number>('memory')
  memoryStorage.set('abc', 123)
  memoryStorage.clear()
  expect(memoryStorage.backendApi).toBeDefined()
  expect(memoryStorage.get('abc', 444)).toStrictEqual(444)
})

it('can write and read from localStorage (browser)', () => {
  require('global-jsdom/register')
  const memoryStorage = getStorage<number>('local')
  memoryStorage.set('abc', 123)
  expect(memoryStorage.get('abc', 0)).toStrictEqual(123)
})

it('can delete from localStorage (browser)', () => {
  require('global-jsdom/register')
  const memoryStorage = getStorage<number>('local')
  memoryStorage.set('abc', 123)
  memoryStorage.del('abc')
  expect(memoryStorage.get('abc', 444)).toStrictEqual(444)
})

it('can clear localStorage (browser)', () => {
  require('global-jsdom/register')
  const memoryStorage = getStorage<number>('local')
  memoryStorage.set('abc', 123)
  memoryStorage.clear()
  expect(memoryStorage.get('abc', 444)).toStrictEqual(444)
})

it('can write and read from sessionStorage (browser)', () => {
  require('global-jsdom/register')
  const memoryStorage = getStorage<number>('session')
  memoryStorage.set('abc', 123)
  expect(memoryStorage.get('abc', 0)).toStrictEqual(123)
})

it('can delete from sessionStorage (browser)', () => {
  require('global-jsdom/register')
  const memoryStorage = getStorage<number>('session')
  memoryStorage.set('abc', 123)
  memoryStorage.del('abc')
  expect(memoryStorage.get('abc', 444)).toStrictEqual(444)
})

it('can clear sessionStorage (browser)', () => {
  require('global-jsdom/register')
  const memoryStorage = getStorage<number>('session')
  memoryStorage.set('abc', 123)
  memoryStorage.clear()
  expect(memoryStorage.get('abc', 444)).toStrictEqual(444)
})

it('can write and read from memory (browser)', () => {
  require('global-jsdom/register')
  const memoryStorage = getStorage<number>('memory')
  memoryStorage.set('abc', 123)
  expect(memoryStorage.get('abc', 0)).toStrictEqual(123)
})

it('can delete from memory (browser)', () => {
  require('global-jsdom/register')
  const memoryStorage = getStorage<number>('memory')
  memoryStorage.set('abc', 123)
  memoryStorage.del('abc')
  expect(memoryStorage.get('abc', 444)).toStrictEqual(444)
})

it('can clear memory (browser)', () => {
  require('global-jsdom/register')
  const memoryStorage = getStorage<number>('memory')
  memoryStorage.set('abc', 123)
  memoryStorage.clear()
  expect(memoryStorage.get('abc', 444)).toStrictEqual(444)
})

it('can write and read from memory using a middleware (browser)', () => {
  require('global-jsdom/register')

  const getMiddleware: MiddlewareFn<number> = <T>(key: string, value: T) => {
    return value
  }

  const setMiddleware: MiddlewareFn<number> = <T>(key: string, value: T) => {
    return value
  }

  const memoryStorage = getStorage<number>('memory')
  memoryStorage.set('abc', 123, setMiddleware)
  expect(memoryStorage.get('abc', 0, getMiddleware)).toStrictEqual(123)
})

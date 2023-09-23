<h1 align="center">simply-persist-sync</h1>

> Nano utility library for JavaScript to persist objects (POJOs) everywhere and with ease

<h2 align="center">Purpose</h2>

Accessing `localStorage` and `sessionStorage` or writing to an in-memory object seems easy,
but then there is browser private mode, there are security and quota restrictions, and if
you try to run the same code on client (in the browser) and server, fun with Errors is guaranteed.

This is, why we've built this library that only has one job: Write an object into a storage backend,
be able to read from it by key to get a value and also be able to delete data by key and make this
possible isomorphic on client and server side, no matter what.

<h2 align="center">Features</h2>

- ✅ Write to storage using simple key/value API
- ✅ Middleware function API allows to hook what is read and written
- ✅ Isomorphic, works in-browser and in Node.js
- ✅ Supports `localStorage`
- ✅ Supports `sessionStorage`
- ✅ Supports in-memory as an automatic fallback
- ✅ Exposes the backend API reference of each storage provider for low-level API access
- ✅ Just `0.455 kB` nano sized (ESM, gizpped)
- ✅ Tree-shakable, side-effect free, so maybe just `~150 byte` for you
- ✅ First class TypeScript support
- ✅ 100% Unit Test coverage

<h2 align="center">Install</h2>

- yarn: `yarn add simply-persist-sync`
- npm: `npm install simply-persist-sync`

<h2 align="center">Use</h2>

<h3 align="center">ESM</h2>

```ts
import { getStorage } from 'simply-persist-sync'

const storage = getStorage('memory') // also: 'local' | 'session' | 'upstash'

// store a value
storage.set('abc', 123)

// read a previously stored value, if not existing, return the default (0)
const valueStored = storage.get('abc', 0)

// delete a single value
storage.del('abc')

// delete all values
storage.clear()
```

<h3 align="center">CommonJS</h2>

```ts
const { getStorage } = require('simply-persist-sync')

// same API like ESM variant
```

<h2 align="center">One thing about Node.js and `localStorage` and `sessionStorage`</h2>

The web storage APIs such as `localStorage` and `sessionStorage` are not available in Node.js.
This library will gently fallback to the in-memory variant instead. Please mind the slightly
different application behaviour in this case.

[**Filesystem Documentation**](../../../README.md)

***

[Filesystem Documentation](../../../README.md) / [errors/FilesystemError](../README.md) / FilesystemError

# Class: FilesystemError

Defined in: [filesystem/src/errors/FilesystemError.ts:6](https://github.com/stonemjs/filesystem/blob/3507c649e7e162008a7a2fa6bc8b30287cce6f59/src/errors/FilesystemError.ts#L6)

Custom error for error operations.

## Extends

- `RuntimeError`

## Constructors

### Constructor

> **new FilesystemError**(`message`, `options`): `FilesystemError`

Defined in: [filesystem/src/errors/FilesystemError.ts:7](https://github.com/stonemjs/filesystem/blob/3507c649e7e162008a7a2fa6bc8b30287cce6f59/src/errors/FilesystemError.ts#L7)

#### Parameters

##### message

`string`

##### options

`ErrorOptions` = `{}`

#### Returns

`FilesystemError`

#### Overrides

`RuntimeError.constructor`

## Properties

### cause?

> `readonly` `optional` **cause**: `Error`

Defined in: core/dist/index.d.ts:3372

#### Inherited from

`RuntimeError.cause`

***

### code?

> `readonly` `optional` **code**: `string`

Defined in: core/dist/index.d.ts:3371

#### Inherited from

`RuntimeError.code`

***

### metadata?

> `readonly` `optional` **metadata**: `unknown`

Defined in: core/dist/index.d.ts:3373

#### Inherited from

`RuntimeError.metadata`

## Methods

### toString()

> **toString**(`multiline?`): `string`

Defined in: core/dist/index.d.ts:3394

Converts the error to a formatted string representation.

#### Parameters

##### multiline?

`boolean`

Determine if output value must be multiline or not.

#### Returns

`string`

A formatted error string.

#### Inherited from

`RuntimeError.toString`

***

### create()

> `static` **create**\<`T`\>(`message`, `options?`): `T`

Defined in: core/dist/index.d.ts:3380

Create a RuntimeError.

#### Type Parameters

##### T

`T` *extends* `RuntimeError` = `RuntimeError`

#### Parameters

##### message

`string`

##### options?

`ErrorOptions`

The options to create a RuntimeError.

#### Returns

`T`

A new RuntimeError instance.

#### Inherited from

`RuntimeError.create`

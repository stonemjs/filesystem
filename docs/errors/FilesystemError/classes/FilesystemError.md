[**Filesystem Documentation v0.0.1**](../../../README.md)

***

[Filesystem Documentation](../../../modules.md) / [errors/FilesystemError](../README.md) / FilesystemError

# Class: FilesystemError

Defined in: filesystem/src/errors/FilesystemError.ts:6

Custom error for error operations.

## Extends

- `RuntimeError`

## Constructors

### new FilesystemError()

> **new FilesystemError**(`message`, `options`): [`FilesystemError`](FilesystemError.md)

Defined in: filesystem/src/errors/FilesystemError.ts:7

#### Parameters

##### message

`string`

##### options

`ErrorOptions` = `{}`

#### Returns

[`FilesystemError`](FilesystemError.md)

#### Overrides

`RuntimeError.constructor`

## Properties

### cause?

> `readonly` `optional` **cause**: `Error`

Defined in: core/dist/index.d.ts:2108

#### Inherited from

`RuntimeError.cause`

***

### code?

> `readonly` `optional` **code**: `string`

Defined in: core/dist/index.d.ts:2107

#### Inherited from

`RuntimeError.code`

***

### metadata?

> `readonly` `optional` **metadata**: `unknown`

Defined in: core/dist/index.d.ts:2109

#### Inherited from

`RuntimeError.metadata`

## Methods

### toString()

> **toString**(`multiline`?): `string`

Defined in: core/dist/index.d.ts:2130

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

> `static` **create**\<`T`\>(`message`, `options`?): `T`

Defined in: core/dist/index.d.ts:2116

Create a RuntimeError.

#### Type Parameters

• **T** *extends* `RuntimeError` = `RuntimeError`

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

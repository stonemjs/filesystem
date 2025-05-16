[**Filesystem Documentation**](../../README.md)

***

[Filesystem Documentation](../../README.md) / [utils](../README.md) / importModule

# Function: importModule()

> **importModule**\<`R`\>(`relativePath`): `Promise`\<`undefined` \| `R`\>

Defined in: [filesystem/src/utils.ts:105](https://github.com/stonemjs/filesystem/blob/3507c649e7e162008a7a2fa6bc8b30287cce6f59/src/utils.ts#L105)

Asynchronously imports a module given its relative path.

## Type Parameters

### R

`R`

## Parameters

### relativePath

`string`

The relative path to the module to be imported.

## Returns

`Promise`\<`undefined` \| `R`\>

A promise that resolves to the imported module, or null if the import fails.

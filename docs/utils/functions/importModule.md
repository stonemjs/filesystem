[**Filesystem Documentation v0.0.1**](../../README.md)

***

[Filesystem Documentation](../../modules.md) / [utils](../README.md) / importModule

# Function: importModule()

> **importModule**\<`R`\>(`relativePath`): `Promise`\<`R` \| `undefined`\>

Defined in: [filesystem/src/utils.ts:108](https://github.com/stonemjs/filesystem/blob/f9b4644b0de1467784914ebdad54c26a1ab4bd47/src/utils.ts#L108)

Asynchronously imports a module given its relative path.

## Type Parameters

• **R**

## Parameters

### relativePath

`string`

The relative path to the module to be imported.

## Returns

`Promise`\<`R` \| `undefined`\>

A promise that resolves to the imported module, or null if the import fails.

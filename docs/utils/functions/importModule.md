[**Filesystem Documentation v0.0.1**](../../README.md)

***

[Filesystem Documentation](../../modules.md) / [utils](../README.md) / importModule

# Function: importModule()

> **importModule**\<`R`\>(`relativePath`): `Promise`\<`R` \| `undefined`\>

Defined in: [filesystem/src/utils.ts:94](https://github.com/stonemjs/filesystem/blob/efeed60f59037ce4e839834b4563a29f0eff2a5f/src/utils.ts#L94)

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

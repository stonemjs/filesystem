[**Filesystem Documentation v0.0.1**](../../../README.md)

***

[Filesystem Documentation](../../../modules.md) / [file/UploadedFile](../README.md) / UploadedFile

# Class: UploadedFile

Defined in: filesystem/src/file/UploadedFile.ts:11

Class representing an UploadedFile.

## Author

Mr. Stone <evensstone@gmail.com>

## Extends

- [`File`](../../File/classes/File.md)

## Constructors

### new UploadedFile()

> **new UploadedFile**(`path`, `originalName`, `mimeType`?, `checkPath`?): [`UploadedFile`](UploadedFile.md)

Defined in: filesystem/src/file/UploadedFile.ts:34

Create an UploadedFile.

#### Parameters

##### path

`string`

The file path.

##### originalName

`string`

The original name of the uploaded file.

##### mimeType?

`string`

The MIME type of the file.

##### checkPath?

`boolean` = `true`

#### Returns

[`UploadedFile`](UploadedFile.md)

#### Overrides

[`File`](../../File/classes/File.md).[`constructor`](../../File/classes/File.md#constructors)

## Methods

### edit()

> **edit**(`callback`): `this`

Defined in: filesystem/src/file/File.ts:86

Edit file content.

#### Parameters

##### callback

(`content`) => `string`

The callback function to modify the file content.

#### Returns

`this`

The current File instance.

#### Inherited from

[`File`](../../File/classes/File.md).[`edit`](../../File/classes/File.md#edit)

***

### exists()

> **exists**(): `boolean`

Defined in: filesystem/src/file/File.ts:288

Check if the file exists.

#### Returns

`boolean`

True if the file exists, otherwise false.

#### Inherited from

[`File`](../../File/classes/File.md).[`exists`](../../File/classes/File.md#exists)

***

### getAbsolutePath()

> **getAbsolutePath**(`root`): `string`

Defined in: filesystem/src/file/File.ts:205

Get the absolute file path.

#### Parameters

##### root

`string` = `''`

The root directory to resolve from.

#### Returns

`string`

The absolute file path.

#### Inherited from

[`File`](../../File/classes/File.md).[`getAbsolutePath`](../../File/classes/File.md#getabsolutepath)

***

### getATime()

> **getATime**(): `undefined` \| `number` \| `bigint`

Defined in: filesystem/src/file/File.ts:261

Get the last access time of the file.

#### Returns

`undefined` \| `number` \| `bigint`

The last access time in milliseconds.

#### Inherited from

[`File`](../../File/classes/File.md).[`getATime`](../../File/classes/File.md#getatime)

***

### getBasename()

> **getBasename**(`exclude`): `string`

Defined in: filesystem/src/file/File.ts:225

Get the basename of the file.

#### Parameters

##### exclude

`string` = `''`

The file extension to exclude from the basename.

#### Returns

`string`

The basename of the file.

#### Inherited from

[`File`](../../File/classes/File.md).[`getBasename`](../../File/classes/File.md#getbasename)

***

### getClientMimeType()

> **getClientMimeType**(): `string`

Defined in: filesystem/src/file/UploadedFile.ts:63

Get the MIME type of the uploaded file.

#### Returns

`string`

The MIME type of the file.

***

### getClientOriginalExtension()

> **getClientOriginalExtension**(): `string`

Defined in: filesystem/src/file/UploadedFile.ts:54

Get the original file extension of the uploaded file.

#### Returns

`string`

The original file extension.

***

### getClientOriginalName()

> **getClientOriginalName**(): `string`

Defined in: filesystem/src/file/UploadedFile.ts:45

Get the original name of the uploaded file.

#### Returns

`string`

The original name of the file.

***

### getContent()

> **getContent**(`encoding`): `string`

Defined in: filesystem/src/file/File.ts:58

Get file content.

#### Parameters

##### encoding

`BufferEncoding` = `'utf-8'`

#### Returns

`string`

The content of the file as a string.

#### Inherited from

[`File`](../../File/classes/File.md).[`getContent`](../../File/classes/File.md#getcontent)

***

### getCTime()

> **getCTime**(): `undefined` \| `number` \| `bigint`

Defined in: filesystem/src/file/File.ts:279

Get the created time of the file.

#### Returns

`undefined` \| `number` \| `bigint`

The created time in milliseconds.

#### Inherited from

[`File`](../../File/classes/File.md).[`getCTime`](../../File/classes/File.md#getctime)

***

### getDirname()

> **getDirname**(): `string`

Defined in: filesystem/src/file/File.ts:177

Get the directory name of the file.

#### Returns

`string`

The directory name.

#### Inherited from

[`File`](../../File/classes/File.md).[`getDirname`](../../File/classes/File.md#getdirname)

***

### getEncodedAbsolutePath()

> **getEncodedAbsolutePath**(`root`): `string`

Defined in: filesystem/src/file/File.ts:215

Get the encoded absolute file path.

#### Parameters

##### root

`string` = `''`

The root directory to resolve from.

#### Returns

`string`

The encoded absolute file path.

#### Inherited from

[`File`](../../File/classes/File.md).[`getEncodedAbsolutePath`](../../File/classes/File.md#getencodedabsolutepath)

***

### getEncodedPath()

> **getEncodedPath**(): `string`

Defined in: filesystem/src/file/File.ts:195

Get the encoded file path.

#### Returns

`string`

The encoded file path.

#### Inherited from

[`File`](../../File/classes/File.md).[`getEncodedPath`](../../File/classes/File.md#getencodedpath)

***

### getExtension()

> **getExtension**(): `string`

Defined in: filesystem/src/file/File.ts:252

Get the file extension.

#### Returns

`string`

The file extension.

#### Inherited from

[`File`](../../File/classes/File.md).[`getExtension`](../../File/classes/File.md#getextension)

***

### getFilename()

> **getFilename**(): `string`

Defined in: filesystem/src/file/File.ts:234

Get the filename of the file.

#### Returns

`string`

The filename of the file.

#### Inherited from

[`File`](../../File/classes/File.md).[`getFilename`](../../File/classes/File.md#getfilename)

***

### getHashedContent()

> **getHashedContent**(`algo`): `string`

Defined in: filesystem/src/file/File.ts:132

Get the hashed content of the file.

#### Parameters

##### algo

`string` = `'sha256'`

The hashing algorithm to use.

#### Returns

`string`

The hashed content of the file as a hex string.

#### Inherited from

[`File`](../../File/classes/File.md).[`getHashedContent`](../../File/classes/File.md#gethashedcontent)

***

### getMimeType()

Get the MIME type of the file.

#### Param

A fallback MIME type if detection fails.

#### Call Signature

> **getMimeType**(): `undefined` \| `string`

Defined in: filesystem/src/file/File.ts:152

Get the MIME type of the file.

##### Returns

`undefined` \| `string`

The MIME type of the file.

The MIME type of the file.

##### Param

A fallback MIME type if detection fails.

##### Inherited from

[`File`](../../File/classes/File.md).[`getMimeType`](../../File/classes/File.md#getmimetype)

#### Call Signature

> **getMimeType**(`fallback`): `string`

Defined in: filesystem/src/file/File.ts:160

Get the MIME type of the file.

##### Parameters

###### fallback

`string`

A fallback MIME type if detection fails.

##### Returns

`string`

The MIME type of the file.

The MIME type of the file.

##### Param

A fallback MIME type if detection fails.

##### Inherited from

[`File`](../../File/classes/File.md).[`getMimeType`](../../File/classes/File.md#getmimetype)

***

### getMTime()

> **getMTime**(): `undefined` \| `number` \| `bigint`

Defined in: filesystem/src/file/File.ts:270

Get the last modified time of the file.

#### Returns

`undefined` \| `number` \| `bigint`

The last modified time in milliseconds.

#### Inherited from

[`File`](../../File/classes/File.md).[`getMTime`](../../File/classes/File.md#getmtime)

***

### getName()

> **getName**(): `string`

Defined in: filesystem/src/file/File.ts:243

Get the name of the file without extension.

#### Returns

`string`

The name of the file.

#### Inherited from

[`File`](../../File/classes/File.md).[`getName`](../../File/classes/File.md#getname)

***

### getPath()

> **getPath**(): `string`

Defined in: filesystem/src/file/File.ts:186

Get the file path.

#### Returns

`string`

The file path.

#### Inherited from

[`File`](../../File/classes/File.md).[`getPath`](../../File/classes/File.md#getpath)

***

### getSize()

> **getSize**(`formatted`): `undefined` \| `string` \| `number` \| `bigint`

Defined in: filesystem/src/file/File.ts:142

Get file size.

#### Parameters

##### formatted

`boolean` = `false`

Whether to return the file size as a formatted string.

#### Returns

`undefined` \| `string` \| `number` \| `bigint`

The file size as a string or number.

#### Inherited from

[`File`](../../File/classes/File.md).[`getSize`](../../File/classes/File.md#getsize)

***

### guessClientExtension()

> **guessClientExtension**(): `undefined` \| `string`

Defined in: filesystem/src/file/UploadedFile.ts:72

Guess the client file extension based on the MIME type.

#### Returns

`undefined` \| `string`

The guessed file extension.

***

### isAbsolute()

> **isAbsolute**(): `boolean`

Defined in: filesystem/src/file/File.ts:342

Check if the file path is absolute.

#### Returns

`boolean`

True if the file path is absolute, otherwise false.

#### Inherited from

[`File`](../../File/classes/File.md).[`isAbsolute`](../../File/classes/File.md#isabsolute)

***

### isCompressed()

> **isCompressed**(`extensions`): `boolean`

Defined in: filesystem/src/file/File.ts:306

Check if the file is compressed.

#### Parameters

##### extensions

`string`[] = `...`

#### Returns

`boolean`

True if the file is compressed, otherwise false.

#### Inherited from

[`File`](../../File/classes/File.md).[`isCompressed`](../../File/classes/File.md#iscompressed)

***

### isDir()

> **isDir**(): `boolean`

Defined in: filesystem/src/file/File.ts:315

Check if the file is a directory.

#### Returns

`boolean`

True if the file is a directory, otherwise false.

#### Inherited from

[`File`](../../File/classes/File.md).[`isDir`](../../File/classes/File.md#isdir)

***

### isExecutable()

> **isExecutable**(): `boolean`

Defined in: filesystem/src/file/File.ts:379

Check if the file is executable.

#### Returns

`boolean`

True if the file is executable, otherwise false.

#### Inherited from

[`File`](../../File/classes/File.md).[`isExecutable`](../../File/classes/File.md#isexecutable)

***

### isFile()

> **isFile**(): `boolean`

Defined in: filesystem/src/file/File.ts:324

Check if the file is a regular file.

#### Returns

`boolean`

True if the file is a regular file, otherwise false.

#### Inherited from

[`File`](../../File/classes/File.md).[`isFile`](../../File/classes/File.md#isfile)

***

### isLink()

> **isLink**(): `boolean`

Defined in: filesystem/src/file/File.ts:333

Check if the file is a symbolic link.

#### Returns

`boolean`

True if the file is a symbolic link, otherwise false.

#### Inherited from

[`File`](../../File/classes/File.md).[`isLink`](../../File/classes/File.md#islink)

***

### isPathPrefix()

> **isPathPrefix**(`prefix`): `boolean`

Defined in: filesystem/src/file/File.ts:297

Check if the file path starts with a provided prefix.

#### Parameters

##### prefix

`string`

#### Returns

`boolean`

True if the file path starts with the provided prefix, otherwise false.

#### Inherited from

[`File`](../../File/classes/File.md).[`isPathPrefix`](../../File/classes/File.md#ispathprefix)

***

### isReadable()

> **isReadable**(): `boolean`

Defined in: filesystem/src/file/File.ts:365

Check if the file is readable.

#### Returns

`boolean`

True if the file is readable, otherwise false.

#### Inherited from

[`File`](../../File/classes/File.md).[`isReadable`](../../File/classes/File.md#isreadable)

***

### isValid()

> **isValid**(): `boolean`

Defined in: filesystem/src/file/UploadedFile.ts:81

Check if the uploaded file is valid.

#### Returns

`boolean`

True if the file exists, otherwise false.

***

### isWritable()

> **isWritable**(): `boolean`

Defined in: filesystem/src/file/File.ts:351

Check if the file is writable.

#### Returns

`boolean`

True if the file is writable, otherwise false.

#### Inherited from

[`File`](../../File/classes/File.md).[`isWritable`](../../File/classes/File.md#iswritable)

***

### move()

> **move**(`directory`, `name`?): `this`

Defined in: filesystem/src/file/UploadedFile.ts:93

Move the uploaded file to a new directory.

#### Parameters

##### directory

`string`

The target directory.

##### name?

`string`

The new name for the file.

#### Returns

`this`

The current UploadedFile instance.

#### Throws

FileError if the file is not valid.

#### Overrides

[`File`](../../File/classes/File.md).[`move`](../../File/classes/File.md#move)

***

### remove()

> **remove**(`force`): `this`

Defined in: filesystem/src/file/File.ts:117

Remove file.

#### Parameters

##### force

`boolean` = `false`

Whether to forcefully remove the file.

#### Returns

`this`

The current File instance.

#### Inherited from

[`File`](../../File/classes/File.md).[`remove`](../../File/classes/File.md#remove)

***

### write()

> **write**(`content`): `this`

Defined in: filesystem/src/file/File.ts:71

Write content to file.

#### Parameters

##### content

`string`

The content to write to the file.

#### Returns

`this`

The current File instance.

#### Inherited from

[`File`](../../File/classes/File.md).[`write`](../../File/classes/File.md#write)

***

### create()

> `static` **create**(`path`, `checkPath`): [`File`](../../File/classes/File.md)

Defined in: filesystem/src/file/File.ts:36

Create a File.

#### Parameters

##### path

`string`

The file path.

##### checkPath

`boolean` = `true`

Whether to check if the file path is valid.

#### Returns

[`File`](../../File/classes/File.md)

A new File instance.

#### Inherited from

[`File`](../../File/classes/File.md).[`create`](../../File/classes/File.md#create)

***

### createFile()

> `static` **createFile**(`path`, `originalName`, `mimeType`?, `checkPath`?): [`UploadedFile`](UploadedFile.md)

Defined in: filesystem/src/file/UploadedFile.ts:23

Create an UploadedFile.

#### Parameters

##### path

`string`

The file path.

##### originalName

`string`

The original name of the uploaded file.

##### mimeType?

`string`

The MIME type of the file.

##### checkPath?

`boolean` = `true`

#### Returns

[`UploadedFile`](UploadedFile.md)

A new UploadedFile instance.

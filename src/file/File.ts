import mime from 'mime/lite'
import { filesize } from 'filesize'
import { createHash } from 'node:crypto'
import { FilesystemError } from '../errors/FilesystemError'
import { basename, dirname, extname, isAbsolute, join, resolve } from 'node:path'
import {
  statSync,
  existsSync,
  accessSync,
  constants,
  writeFileSync,
  readFileSync,
  mkdirSync,
  renameSync,
  chmodSync,
  rmSync,
  realpathSync
} from 'node:fs'

/**
 * Class representing a File.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 */
export class File {
  private readonly path: string
  private stats?: ReturnType<typeof statSync>

  /**
   * Create a File.
   *
   * @param path - The file path.
   * @param checkPath - Whether to check if the file path is valid.
   * @returns A new File instance.
   */
  static create (path: string, checkPath: boolean = true): File {
    return new this(path, checkPath)
  }

  /**
   * Create a File.
   *
   * @param path - The file path.
   * @param checkPath - Whether to check if the file path is valid.
   */
  protected constructor (path: string, checkPath: boolean = true) {
    this.path = path
    if (checkPath) {
      this.validateFile()
    }
  }

  /**
   * Get file content.
   *
   * @returns The content of the file as a string.
   */
  getContent (encoding: BufferEncoding = 'utf-8'): string {
    if (!this.isReadable()) {
      throw new FilesystemError(`Could not get the content of the file (${this.path}).`)
    }
    return readFileSync(this.path).toString(encoding)
  }

  /**
   * Write content to file.
   *
   * @param content - The content to write to the file.
   * @returns The current File instance.
   */
  write (content: string): this {
    if (!this.isWritable()) {
      throw new FilesystemError(`Could not write content to this file (${this.path}).`)
    }

    writeFileSync(this.path, content, 'utf-8')
    return this
  }

  /**
   * Edit file content.
   *
   * @param callback - The callback function to modify the file content.
   * @returns The current File instance.
   */
  edit (callback: (content: string) => string): this {
    return this.write(callback(this.getContent()))
  }

  /**
   * Move file to a new directory.
   *
   * @param directory - The target directory.
   * @param name - The new name for the file.
   * @returns The new File instance representing the moved file.
   * @throws FileError if the file could not be moved.
   */
  move (directory: string, name?: string): File {
    const target = this.getTargetFile(directory, name)

    try {
      renameSync(this.getPath(), target.getPath())
    } catch (error: any) {
      throw new FilesystemError(`Could not move the file "${this.getPath()}" to "${target.getPath()}" (${String(error.message)}).`)
    }

    chmodSync(target.getPath(), 0o666)
    return target
  }

  /**
   * Remove file.
   *
   * @param force - Whether to forcefully remove the file.
   * @returns The current File instance.
   */
  remove (force: boolean = false): this {
    try {
      rmSync(this.path, { force })
    } catch (error: any) {
      throw new FilesystemError(`Could not remove this file (${this.path}) (${String(error.message)}).`)
    }
    return this
  }

  /**
   * Get the hashed content of the file.
   *
   * @param algo - The hashing algorithm to use.
   * @returns The hashed content of the file as a hex string.
   */
  getHashedContent (algo: string = 'sha256'): string {
    return createHash(algo).update(this.getContent(), 'utf-8').digest('hex')
  }

  /**
   * Get file size.
   *
   * @param formatted - Whether to return the file size as a formatted string.
   * @returns The file size as a string or number.
   */
  getSize (formatted: boolean = false): string | number | bigint | undefined {
    const size = this.getStats()?.size
    return size !== undefined && formatted ? filesize(Number(size)) : size
  }

  /**
   * Get the MIME type of the file.
   *
   * @returns The MIME type of the file.
   */
  getMimeType (): string | undefined

  /**
   * Get the MIME type of the file.
   *
   * @param fallback - A fallback MIME type if detection fails.
   * @returns The MIME type of the file.
   */
  getMimeType (fallback: string): string

  /**
   * Get the MIME type of the file.
   *
   * @param fallback - A fallback MIME type if detection fails.
   * @returns The MIME type of the file.
   */
  getMimeType (fallback?: string): string | undefined {
    return mime.getType(this.path) ?? fallback
  }

  /**
   * Get the directory name of the file.
   *
   * @returns The directory name.
   */
  getDirname (): string {
    return dirname(this.path)
  }

  /**
   * Get the file path.
   *
   * @returns The file path.
   */
  getPath (): string {
    return this.path
  }

  /**
   * Get the encoded file path.
   *
   * @returns The encoded file path.
   */
  getEncodedPath (): string {
    return encodeURI(this.getPath())
  }

  /**
 * Get the absolute file path.
 *
 * @param root - The root directory to resolve from.
 * @returns The absolute file path.
 */
  getAbsolutePath (root: string = ''): string {
    return resolve(root, this.path)
  }

  /**
   * Get the encoded absolute file path.
   *
   * @param root - The root directory to resolve from.
   * @returns The encoded absolute file path.
   */
  getEncodedAbsolutePath (root: string = ''): string {
    return encodeURI(this.getAbsolutePath(root))
  }

  /**
   * Get the basename of the file.
   *
   * @param exclude - The file extension to exclude from the basename.
   * @returns The basename of the file.
   */
  getBasename (exclude: string = ''): string {
    return basename(this.path, exclude)
  }

  /**
   * Get the filename of the file.
   *
   * @returns The filename of the file.
   */
  getFilename (): string {
    return this.getBasename()
  }

  /**
   * Get the name of the file without extension.
   *
   * @returns The name of the file.
   */
  getName (): string {
    return this.getBasename(this.getExtension())
  }

  /**
   * Get the file extension.
   *
   * @returns The file extension.
   */
  getExtension (): string {
    return extname(this.path)
  }

  /**
   * Get the last access time of the file.
   *
   * @returns The last access time in milliseconds.
   */
  getATime (): number | bigint | undefined {
    return this.getStats()?.atimeMs
  }

  /**
   * Get the last modified time of the file.
   *
   * @returns The last modified time in milliseconds.
   */
  getMTime (): number | bigint | undefined {
    return this.getStats()?.mtimeMs
  }

  /**
   * Get the created time of the file.
   *
   * @returns The created time in milliseconds.
   */
  getCTime (): number | bigint | undefined {
    return this.getStats()?.ctimeMs
  }

  /**
   * Check if the file exists.
   *
   * @returns True if the file exists, otherwise false.
   */
  exists (): boolean {
    return existsSync(this.path)
  }

  /**
   * Check if the file path starts with a provided prefix.
   *
   * @returns True if the file path starts with the provided prefix, otherwise false.
   */
  isPathPrefix (prefix: string): boolean {
    return this.path.startsWith(realpathSync(prefix))
  }

  /**
   * Check if the file is compressed.
   *
   * @returns True if the file is compressed, otherwise false.
   */
  isCompressed (extensions: string[] = ['.br', '.brotli', '.gz', '.gzip']): boolean {
    return extensions.includes(this.getExtension())
  }

  /**
   * Check if the file is a directory.
   *
   * @returns True if the file is a directory, otherwise false.
   */
  isDir (): boolean {
    return this.getStats()?.isDirectory?.() ?? false
  }

  /**
   * Check if the file is a regular file.
   *
   * @returns True if the file is a regular file, otherwise false.
   */
  isFile (): boolean {
    return this.getStats()?.isFile?.() ?? false
  }

  /**
   * Check if the file is a symbolic link.
   *
   * @returns True if the file is a symbolic link, otherwise false.
   */
  isLink (): boolean {
    return this.getStats()?.isSymbolicLink?.() ?? false
  }

  /**
   * Check if the file path is absolute.
   *
   * @returns True if the file path is absolute, otherwise false.
   */
  isAbsolute (): boolean {
    return isAbsolute(this.path)
  }

  /**
   * Check if the file is writable.
   *
   * @returns True if the file is writable, otherwise false.
   */
  isWritable (): boolean {
    try {
      accessSync(this.path, constants.W_OK)
      return true
    } catch (_) {
      return false
    }
  }

  /**
   * Check if the file is readable.
   *
   * @returns True if the file is readable, otherwise false.
   */
  isReadable (): boolean {
    try {
      accessSync(this.path, constants.R_OK)
      return true
    } catch (e) {
      return false
    }
  }

  /**
   * Check if the file is executable.
   *
   * @returns True if the file is executable, otherwise false.
   */
  isExecutable (): boolean {
    try {
      accessSync(this.path, constants.X_OK)
      return true
    } catch (_) {
      return false
    }
  }

  /**
   * Get the file statistics.
   *
   * @returns The file statistics object.
   */
  private getStats (): ReturnType<typeof statSync> {
    if (this.stats === undefined) {
      this.stats = statSync(this.path)
    }
    return this.stats
  }

  /**
   * Validate if the file exists.
   *
   * @throws FileError if the file does not exist.
   */
  private validateFile (): void {
    if (!this.exists()) {
      throw new FilesystemError(`File not found. (${this.path})`)
    }
  }

  /**
   * Get the target file instance for moving or copying operations.
   *
   * @param directory - The target directory.
   * @param name - The new name for the file.
   * @returns A new File instance representing the target file.
   * @throws FileError if the directory cannot be created or is not writable.
   */
  private getTargetFile (directory: string, name: string | null = null): File {
    if (!existsSync(directory)) {
      try {
        mkdirSync(directory, { recursive: true })
      } catch (_) {
        throw new FilesystemError(`Unable to create the "${directory}" directory.`)
      }
    } else {
      try {
        accessSync(directory, constants.W_OK)
      } catch (_) {
        throw new FilesystemError(`Unable to write in the "${directory}" directory.`)
      }
    }

    return new File(join(directory, name ?? this.getFilename()), false)
  }
}

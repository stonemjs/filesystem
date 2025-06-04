import mime from 'mime'
import { File } from './File'
import { basename, extname } from 'node:path'
import { FilesystemError } from '../errors/FilesystemError'

/**
 * Class representing an UploadedFile.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 */
export class UploadedFile extends File {
  private readonly mimeType: string
  private readonly originalName: string

  /**
   * Create an UploadedFile.
   *
   * @param path - The file path.
   * @param originalName - The original name of the uploaded file.
   * @param mimeType - The MIME type of the file.
   * @returns A new UploadedFile instance.
   */
  static createFile (path: string, originalName: string, mimeType?: string, checkPath: boolean = true): UploadedFile {
    return new this(path, originalName, mimeType, checkPath)
  }

  /**
   * Create an UploadedFile.
   *
   * @param path - The file path.
   * @param originalName - The original name of the uploaded file.
   * @param mimeType - The MIME type of the file.
   */
  constructor (path: string, originalName: string, mimeType?: string, checkPath: boolean = true) {
    super(path, checkPath)
    this.originalName = basename(originalName)
    this.mimeType = mimeType ?? 'application/octet-stream'
  }

  /**
   * Get the original name of the uploaded file.
   *
   * @returns The original name of the file.
   */
  getClientOriginalName (): string {
    return this.originalName
  }

  /**
   * Get the original file extension of the uploaded file.
   *
   * @returns The original file extension.
   */
  getClientOriginalExtension (): string {
    return extname(this.originalName)
  }

  /**
   * Get the MIME type of the uploaded file.
   *
   * @returns The MIME type of the file.
   */
  getClientMimeType (): string {
    return this.mimeType
  }

  /**
   * Guess the client file extension based on the MIME type.
   *
   * @returns The guessed file extension.
   */
  guessClientExtension (): string | undefined {
    return mime.getExtension(this.getClientMimeType()) ?? undefined
  }

  /**
   * Check if the uploaded file is valid.
   *
   * @returns True if the file exists, otherwise false.
   */
  isValid (): boolean {
    return this.exists()
  }

  /**
   * Move the uploaded file to a new directory.
   *
   * @param directory - The target directory.
   * @param name - The new name for the file.
   * @returns The current UploadedFile instance.
   * @throws FileError if the file is not valid.
   */
  move (directory: string, name?: string): this {
    if (this.isValid()) {
      return super.move(directory, name) as this
    }

    throw new FilesystemError('No file was uploaded.')
  }
}

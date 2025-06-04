## Changelog

All notable changes to the "Stone.js Filesystem" extension will be documented in this file.

## Unreleased

## 1.0.0 (2025-06-04)


### Features

* initial implementation of filesystem module ([#1](https://github.com/stonemjs/filesystem/issues/1)) ([2597a7c](https://github.com/stonemjs/filesystem/commit/2597a7c743f8663979108758523e59426774e034))

Introduces the @stone-js/filesystem package with the following core features:

- File and UploadedFile classes for safe, contextual file operations
- Utilities for resolving project paths (basePath, tmpPath, appPath, etc.)
- Helpers for MIME detection, file hashing, and dynamic import
- Full ESM support with type safety
- Integrated with Stone.js error system via FilesystemError

This module is designed to abstract common filesystem logic across CLI tools, runtimes, and adapters in Stone.js applications.

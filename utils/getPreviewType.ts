import { getExtension } from './getFileIcon'

export const preview = {
  markdown: 'markdown',
  image: 'image',
  text: 'text',
  pdf: 'pdf',
  code: 'code',
  video: 'video',
  audio: 'audio',
  office: 'ms-office',
  epub: 'epub',
  url: 'url',
}

export const extensions = {

}

export function getPreviewType(extension: string, flags?: { video?: boolean }): string | undefined {
  let previewType = extensions[extension]
  if (!previewType) {
    return previewType
  }

  // Files with '.ts' extensions may be TypeScript files or TS Video files, we check for the flag 'video'
  // to determine what preview renderer to use for '.ts' files.
  if (extension === 'ts') {
    if (flags?.video) {
      previewType = preview.video
    }
  }

  return previewType
}

export function getLanguageByFileName(filename: string): string {
  const extension = getExtension(filename)
  switch (extension) {
    case 'ts':
    case 'tsx':
      return 'typescript'
    case 'rs':
      return 'rust'
    case 'js':
    case 'jsx':
      return 'javascript'
    case 'sh':
      return 'shell'
    case 'cs':
      return 'csharp'
    case 'py':
      return 'python'
    case 'yml':
      return 'yaml'
    default:
      return extension
  }
}

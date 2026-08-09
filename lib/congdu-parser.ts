// lib/congdu-parser.ts — File parsing for TXT, EPUB, PDF (congdu).
// Re-exports the shared reading parser.

export {
    decodeTxtArrayBuffer,
    parseTxtContent,
    parseEpubFile,
    inspectPdfFile,
    parsePdfPageRange,
    PDF_PAGES_PER_CHAPTER,
} from "./reading-parser";

export type {
    ParsedBook,
    ParsedChapter,
    ParsedPdfChunk,
    PdfParagraphMeta,
    TxtDecodeResult,
} from "./reading-parser";
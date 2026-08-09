// lib/congdu-storage.ts — Persistence for the Congdu (共读) feature.
// Shares the same IndexedDB storage as the built-in Reading app so books
// imported in either app are visible in both.

export {
    hydrateReadingStorage as hydrateCongduStorage,
    loadBooks,
    addBook,
    updateBook,
    deleteBook,
    saveChapters,
    loadChapters,
    loadProgress,
    saveProgress,
    loadAnnotations,
    saveAnnotations,
    saveAnnotation,
    deleteAnnotation,
    saveRawFile,
    deleteRawFile,
    loadRawFile,
    loadRawFileBlob,
    loadReadingInteractionConfig,
    saveReadingInteractionConfig,
    DEFAULT_READING_INTERACTION_CONFIG,
} from "./reading-storage";

export type { ReadingInteractionConfig as CongduInteractionConfig } from "./reading-storage";

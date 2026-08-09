// lib/congdu-types.ts — Type definitions for the Congdu (共读) feature.
// Re-exports the shared reading types so both apps stay in sync.

export type {
    Book,
    BookChapter,
    ReadingProgress as CongduProgress,
    ReadingAnnotation as CongduAnnotation,
} from "./reading-types";

export type { ReadingProgress, ReadingAnnotation } from "./reading-types";

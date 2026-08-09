// lib/congdu-engine.ts — LLM integration for the Congdu (共读) feature.
// Re-exports the shared reading engine (annotation batch + discuss chat).

export {
    generateAnnotations,
    generateAnnotationBatch,
    generateReadingChat,
    parseReadingDiscussResponse,
    previewReadingAnnotationPrompt,
    previewReadingDiscussPrompt,
} from "./reading-engine";

export type {
    ReadingDiscussAction,
    AnnotationTarget,
    ReadingDiscussContext,
} from "./reading-engine";
// lib/congdu-appearance.ts — Reading appearance for the Congdu (共读) feature.
// Shares the same appearance storage as the built-in Reading app.

export {
    READING_FONT_OPTIONS,
    DEFAULT_READING_APPEARANCE,
    resolveReadingFontFamily,
    loadReadingAppearance,
    saveReadingAppearance,
    saveReadingBackground,
    loadReadingBackground,
    saveReadingCustomFont,
    loadReadingCustomFont,
} from "./reading-appearance";

export type { ReadingAppearance as CongduAppearance, ReadingFontFamilyId } from "./reading-appearance";
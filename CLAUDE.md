# CLAUDE.md

Instructions for coding agents working in Aftal UI (design system package). The shared coding standard is `standards/coding.md` in aftal-dk/aftal-knowledge.

## Text and formats

All text this code shows or sends to people (UI, emails, PDFs, notifications, agent output) follows Aftal's writing standard: `standards/writing.md` and section 10 "Text shown to people" in `standards/coding.md` in aftal-dk/aftal-knowledge. The key rules:

- Dates `DD.MM.YYYY` (`03.11.2026`), times `HH:mm` with a colon (`15:00`), date and time `03.11.2026 15:00`, all in `Europe/Copenhagen`.
- Months written out: `november 2026`, never `2026-11` or `11/2026`.
- Amounts with Danish separators: `1.250.000 kr.`, `11.287,27 kr.`, `4,5 %`.
- Units in plain characters: `m2`, `m3`, `CO2`. No superscript or subscript characters.
- No en or em dashes anywhere, also not in code comments and commit messages. Use a hyphen, a colon or rewrite.
- UI text is Danish. Aftal "drifter" properties, never "driver".
- This repository has no shared formatting helper yet. Add one (e.g. `lib/format.ts`) the first time code shows a date, time, month or amount to people, and use it everywhere after that.

Machine formats stay ISO 8601: APIs, logs, file names, database values and configuration.

One-line: the callback form — name, phone, email, department, and a promise to call back.

```jsx
<CallbackForm lead="Fortæl os kort om opgaven - så ringer vi tilbage og finder ud af, hvor i Aftal den hører hjemme." />
<CallbackForm withMessage scope="Byggeri" />
```

- Never add fields beyond these five. The department select is always visible and pre-filled from the page.
- The success state replaces the whole card: GLØD check, "Tak for din besked.", and what happens next.
- Copy promises only what the company keeps: 24 hours, oftest samme dag.

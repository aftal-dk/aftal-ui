One-line: the form field — floating label inside the field, --panel-2 fill, GLØD focus border.

```jsx
<Field label="Navn" name="name" placeholder="Dit navn" required />
<Field label="Telefon" name="phone" type="tel" placeholder="23 97 99 46" required />
<Field label="Hvad drejer det sig om?" name="scope" type="select" options={['Udvikling', 'Byggeri', 'Drift', 'Ikke sikker endnu']} />
```

- The label rests full-size inside the field; on focus or content it floats up to an 11px label over the text (150ms). Selects keep the label floated, since they always hold a value.
- The placeholder appears only while the field is focused and empty — it never replaces the label.
- Focus swaps the border to GLØD, colours the floated label GLØD and lifts the fill to --panel-hi. No shadow, no glow.

One-line: the form field - floating label inside the field, --panel-2 fill, Glød focus border.

```jsx
<Field label="Navn" name="name" placeholder="Dit navn" required />
<Field label="Telefon" name="phone" type="tel" placeholder="12 34 56 78" required />
<Field label="Hvad drejer det sig om?" name="scope" type="select" options={['Byggeri', 'Drift', 'Ikke sikker endnu']} />
```

- The label rests full-size inside the field; on focus or content it floats up to an 11px label over the text (150ms). Selects keep the label floated, since they always hold a value.
- The placeholder appears only while the field is focused and empty - it never replaces the label.
- Focus swaps the border to Glød, colours the floated label `--accent-text`, lifts the fill to `--panel-hi` and doubles the border with a 1px ring, so focus is visible on both themes. No glow.

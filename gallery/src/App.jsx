import React from 'react';
import {
  Button, Badge, Icon, PinIcon, Logo,
  DeptCard, CategoryCard, WorkRow, RefCard, StepCard, Media,
  Field, Switch, SearchSelect, CallbackForm,
  Spinner, Skeleton, SkeletonList, LoadingBar,
  SectionHead, CtaBand, Stat, UspItem, TrustBand, RelatedLink,
} from '@aftal/ui';

const img = (n) => `/assets/images/ref-glhasseris-${n}.jpg`;

// The colour tables list tokens and read their values from the stylesheet,
// so they cannot drift from tokens/colors.css.
const PALETTE = [
  { name: 'Glød', token: '--glod', note: 'brandfarven og den aktive farve' },
  { name: 'Sort', token: '--sort', note: 'bunden i det mørke tema' },
  { name: 'Hvid', token: '--hvid', note: 'tekst på mørk bund og på Glød' },
];

const ROLES = [
  { token: '--bg', note: 'sidens bund' },
  { token: '--panel', note: 'kort og paneler' },
  { token: '--panel-2', note: 'inputfelter' },
  { token: '--panel-hi', note: 'hover' },
  { token: '--ink', note: 'overskrifter og primær tekst' },
  { token: '--ink-soft', note: 'brødtekst' },
  { token: '--mute', note: 'billedtekster og metadata' },
  { token: '--accent-text', note: 'links og lille tekst i brandfarven' },
  { token: '--ai', note: 'kun det, en AI har skrevet eller foreslår' },
];

/** Reads token values for both themes from probe elements, whatever theme the page is in. */
function useTokenValues(tokens) {
  const [values, setValues] = React.useState({ dark: {}, light: {} });
  React.useEffect(() => {
    const out = { dark: {}, light: {} };
    for (const theme of ['dark', 'light']) {
      const probe = document.createElement('div');
      probe.setAttribute('data-theme', theme);
      probe.style.display = 'none';
      document.body.appendChild(probe);
      const cs = getComputedStyle(probe);
      for (const t of tokens) out[theme][t] = cs.getPropertyValue(t).trim();
      probe.remove();
    }
    setValues(out);
  }, [tokens]);
  return values;
}

const TOKEN_NAMES = [...PALETTE, ...ROLES].map((r) => r.token);

const ICON_NAMES = ['arrow', 'check', 'chevron', 'menu', 'close', 'sun', 'moon', 'cookie', 'image', 'phone', 'mail'];

const ORDRER = [
  'Tagudskiftning, Eksempelby', 'Vinduesudskiftning, Prøveby', 'Tagpap, Eksempelby Syd',
  'Facaderenovering, Eksempelby Øst', 'Terrasse, Modelby', 'Kvist, Prøveby',
  'Solceller, Demostrup', 'Efterisolering, Modelby', 'Døre og vinduer, Testrup',
  'Carport, Demostrup', 'Tagrender, Testrup', 'Undertag, Prøveby',
  'Altandøre, Modelby', 'Gavlbeklædning, Testrup',
];

const NAV = [
  ['farver', 'Farver'], ['typografi', 'Typografi'], ['core', 'Core'],
  ['kort', 'Kort'], ['formularer', 'Formularer'], ['indlaesning', 'Indlæsning'], ['layout', 'Layout'],
];

function Section({ id, title, lead, children }) {
  return (
    <section id={id} className="g-section">
      <div className="wrap">
        <SectionHead title={title} lead={lead} />
        {children}
      </div>
    </section>
  );
}

function Block({ label, children }) {
  return (
    <div className="g-block">
      <span className="g-label">{label}</span>
      {children}
    </div>
  );
}

export function App() {
  const tokenValues = useTokenValues(TOKEN_NAMES);
  const [theme, setTheme] = React.useState(
    () => document.documentElement.getAttribute('data-theme') || 'dark'
  );
  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('aftal-ui-theme', next); } catch (e) { /* storage unavailable */ }
  };

  return (
    <>
      <header className="g-header">
        <div className="wrap g-header-inner">
          <Logo height={28} />
          <nav className="g-nav">
            {NAV.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
          </nav>
          <button className="g-theme-toggle" onClick={toggleTheme} aria-label={theme === 'dark' ? 'Skift til lyst tema' : 'Skift til mørkt tema'}>
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
          </button>
        </div>
      </header>

      <main>
        <section className="g-section">
          <div className="wrap">
            <h1 className="h1">Aftal UI.</h1>
            <p className="body-lg" style={{ marginTop: 16, maxWidth: 640 }}>
              Designsystemet bag det nye brand - tokens og 24 komponenter, som alle
              Aftals flader bygges af. Det du ser her, er den kode portalerne bruger.
            </p>
            <p className="body-sm" style={{ marginTop: 12, fontFamily: 'var(--font-mono)' }}>
              Når en aftal' er en aftal'
            </p>
          </div>
        </section>

        <Section id="farver" title="Farver." lead="Glød er brandfarven. Resten er sort, grå og hvid. Lilla er kun til AI.">
          <Block label="brandfarver">
            <div className="g-grid-3">
              {PALETTE.map((c) => (
                <div key={c.name} className="g-swatch">
                  <div className="g-swatch-fill" style={{ background: `var(${c.token})` }} />
                  <div className="g-swatch-meta">
                    <strong>{c.name}</strong>
                    <code>{tokenValues.dark[c.token]} · {c.note}</code>
                  </div>
                </div>
              ))}
            </div>
          </Block>
          <Block label="roller - de samme navne i begge temaer, værdien skifter">
            <div className="g-roles" role="table" aria-label="Farveroller">
              <div className="g-role g-role-head" role="row">
                <span role="columnheader">Token</span><span role="columnheader">Mørk</span><span role="columnheader">Lys</span><span role="columnheader">Brug</span>
              </div>
              {ROLES.map((r) => (
                <div key={r.token} className="g-role" role="row">
                  <code role="cell">{r.token}</code>
                  <span role="cell" className="g-chip"><i style={{ background: tokenValues.dark[r.token] }} />{tokenValues.dark[r.token]}</span>
                  <span role="cell" className="g-chip"><i style={{ background: tokenValues.light[r.token] }} />{tokenValues.light[r.token]}</span>
                  <span role="cell">{r.note}</span>
                </div>
              ))}
            </div>
          </Block>
          <Block label="glød som aktiv farve - knap, link, fokus og valgt tilstand">
            <div className="g-row">
              <Button>Få et tilbud</Button>
              <a className="inline-link" href="#farver">Læs mere om farverne</a>
              <Switch defaultChecked label="Valgt" />
            </div>
          </Block>
          <Block label="ai - lilla markerer det, en agent har skrevet eller foreslår, og står altid med ord">
            <div className="g-ai-box ai-surface">
              <span className="g-ai-tag ai-label">Forslag fra agent</span>
              <p className="body">Tagudskiftningen kan holde tidsplanen, hvis stilladset står torsdag.</p>
            </div>
          </Block>
          <Block label="status - farven betyder kun tilstand, og tilstanden står med ord">
            <div className="g-row">
              <Badge size="md" style={{ background: 'var(--status-success-bg)', color: 'var(--status-success)', borderColor: 'transparent' }}>Udført</Badge>
              <Badge size="md" style={{ background: 'var(--status-info-bg)', color: 'var(--status-info)', borderColor: 'transparent' }}>I gang</Badge>
              <Badge size="md" style={{ background: 'var(--status-warning-bg)', color: 'var(--status-warning)', borderColor: 'transparent' }}>Afventer</Badge>
              <Badge size="md" style={{ background: 'var(--status-error-bg)', color: 'var(--status-error)', borderColor: 'transparent' }}>Fejlet</Badge>
            </div>
          </Block>
        </Section>

        <Section id="typografi" title="Typografi." lead="Overskrifter i Gabarito 600 på alle niveauer, og hierarkiet skabes med størrelse. Brødtekst og brugerflade i Google Sans Flex. Tal og kode i Google Sans Code.">
          <Block label="h1 - gabarito 600, 72px">
            <p className="h1">Op til tiden. Ned til tiden.</p>
          </Block>
          <Block label="h2 - gabarito 600, 44px">
            <p className="h2">To afdelinger, ét hold.</p>
          </Block>
          <Block label="h3 - gabarito 600, 28px">
            <p className="h3">Alt samlet ét sted.</p>
          </Block>
          <Block label="h4 - gabarito 600, 20px">
            <p className="h4">Vi møder op, og vi gør det, vi har sagt.</p>
          </Block>
          <Block label="brødtekst - google sans flex 400">
            <p className="body" style={{ maxWidth: 640 }}>
              Med Aftal har du én fast part gennem hele ejendommens liv. Det betyder
              mindre koordinering for dig - og at intet falder mellem to stole.
            </p>
          </Block>
          <Block label="tal og kode - google sans code">
            <p className="body-sm" style={{ fontFamily: 'var(--font-mono)' }}>Hverdage 08:00-15:30 · Eksempelby</p>
          </Block>
        </Section>

        <Section id="core" title="Core." lead="Knapper, badges, ikoner og logo. Én primær knap pr. visning.">
          <Block label="button - primary / ghost / disabled">
            <div className="g-row">
              <Button size="lg">Få et uforpligtende tilbud <Icon name="arrow" size={15} /></Button>
              <Button>Bliv ringet op</Button>
              <Button variant="ghost">Se vores ydelser</Button>
              <Button disabled>Sender …</Button>
            </div>
          </Block>
          <Block label="button - onbrand (på Glød-flade)">
            <div className="g-brand-tile">
              <Button variant="onbrand">Kontakt os <Icon name="arrow" size={15} /></Button>
            </div>
          </Block>
          <Block label="badge">
            <div className="g-row">
              <Badge />
              <Badge size="md">Kommer snart</Badge>
            </div>
          </Block>
          <Block label="ikonsæt - 24×24, stroke 2, runde caps">
            <div className="g-grid-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))' }}>
              {ICON_NAMES.map((n) => (
                <div key={n} className="g-icon-cell">
                  <Icon name={n} size={20} />
                  <span>{n}</span>
                </div>
              ))}
              <div className="g-icon-cell">
                <PinIcon width={20} height={26} />
                <span>pin</span>
              </div>
            </div>
          </Block>
          <Block label="logo - følger temaet, og kan også sættes fast som hvid eller sort">
            <div className="g-dark-tile">
              <Logo variant="white" height={38} />
              <Logo variant="icon-white" height={34} />
              <Logo variant="app" height={48} />
              <Logo variant="app-black" height={48} />
            </div>
            <div className="g-light-tile" style={{ marginTop: 16 }}>
              <Logo variant="black" height={38} />
              <Logo variant="icon-black" height={34} />
            </div>
            <div className="g-brand-tile" style={{ marginTop: 16, justifyContent: 'flex-start' }}>
              <Logo variant="white" height={38} />
            </div>
          </Block>
        </Section>

        <Section id="kort" title="Kort." lead="Tint-fyld og hairline, ingen skygger. Hover er ren farve-fade - intet flytter sig.">
          <Block label="deptcard - to afdelinger">
            <div className="g-grid-2">
              <DeptCard name="Aftal Byggeri" tag="Egne håndværkere, fast byggeledelse" description="Opførelse med egne faggrupper og én ansvarlig byggeleder." />
              <DeptCard name="Aftal Drift" tag="Vi passer ejendommen efter aflevering" description="Teknisk vedligehold, service og akut udkald." />
            </div>
          </Block>
          <Block label="categorycard - 2-up">
            <div className="g-grid-2">
              <CategoryCard title="Tagdækning" description="Tætte, holdbare tage i alle materialer." services={['Tagpap', 'Bølgeplade', 'Teglsten', 'Solceller']} image={img(2)} />
              <CategoryCard title="Tømrer" description="Alt tømrerarbejde - fra nybyg til detaljen." services={['Renovering', 'Nybyg', 'Døre og vinduer', 'Terrasse']} image={img(3)} />
            </div>
          </Block>
          <Block label="workrow - tæt liste, Glød-tint ved hover">
            <div>
              <WorkRow title="Tagpap" description="Tæt, vedligeholdelsesfrit tag til flade og lave taghældninger." points={['Flade tage', 'Lav hældning', 'Inddækning']} image={img(1)} />
              <WorkRow title="Droner" description="Droneinspektion af tag og facade." points={['Tag & facade', 'Termografi']} soon />
            </div>
          </Block>
          <Block label="refcard - inkl. 'dit projekt her?'-varianten">
            <div className="g-grid-3">
              <RefCard title="Tagudskiftning i Eksempelby" meta="Byggeri · Eksempelby, 2026" image={img(1)} />
              <RefCard title="Tagudskiftning i Eksempelby" meta="Byggeri · Eksempelby, 2026" image={img(2)} />
              <RefCard smiley title="Dit projekt her?" meta="Vi tager gerne en uforpligtende snak." />
            </div>
          </Block>
          <Block label="stepcard - 3-up procestrin">
            <div className="g-grid-3">
              <StepCard title="Ring eller skriv">Fortæl os kort om opgaven - så ringer vi tilbage inden for 24 timer.</StepCard>
              <StepCard title="Vi kommer forbi">Vi ser på opgaven sammen og giver en fast pris uden overraskelser.</StepCard>
              <StepCard title="Vi udfører og afleverer">Vi møder op som aftalt og rydder op efter os selv.</StepCard>
            </div>
          </Block>
          <Block label="media - med billede og ærlig tom-tilstand">
            <div className="g-grid-2">
              <Media src={img(3)} alt="Tagudskiftning i Eksempelby" ratio="16 / 10" />
              <Media label="Foto på vej" ratio="16 / 10" />
            </div>
          </Block>
        </Section>

        <Section id="formularer" title="Formularer." lead="Flydende labels, Glød-kant ved fokus. Fejlede formularer viser telefonnummeret.">
          <Block label="field - text / email / select / textarea">
            <div className="g-grid-2">
              <Field label="Navn" name="d-name" placeholder="Dit navn" />
              <Field label="Email" name="d-email" type="email" placeholder="din@eksempel.dk" />
              <Field label="Hvad drejer det sig om?" name="d-scope" type="select" options={['Byggeri', 'Drift', 'Ikke sikker endnu']} />
              <Field label="Kort om opgaven" name="d-msg" type="textarea" placeholder="Et par linjer om hvad du har brug for" />
            </div>
          </Block>
          <Block label="searchselect - til lister over ~10 punkter">
            <div style={{ maxWidth: 380 }}>
              <SearchSelect label="Ordre" placeholder="Alle ordrer" options={ORDRER} />
            </div>
          </Block>
          <Block label="switch - låst / til / fra">
            <div className="g-row" style={{ gap: 32 }}>
              <Switch defaultChecked locked label="Nødvendige" />
              <Switch defaultChecked label="Statistik" />
              <Switch label="Marketing" />
            </div>
          </Block>
          <Block label="callbackform">
            <div style={{ maxWidth: 480 }}>
              <CallbackForm lead="Fortæl os kort om opgaven - så ringer vi tilbage." withMessage />
            </div>
          </Block>
        </Section>


        <Section id="indlaesning" title="Indlæsning." lead="Fire tilstande og ikke flere. Skeleton til indhold der ikke er kommet, spinner til en handling i gang, en tynd Glød-bar når synligt indhold opdateres. Alt venter 200 ms, så hurtige svar aldrig flimrer.">
          <Block label="skeleton - siden beholder ramme og titel, kun indholdet er placeholder">
            <div className="g-grid-3">
              <div style={{ background: 'var(--tint)', border: '1px solid var(--line)', borderRadius: 18, padding: 20 }}>
                <Skeleton width={140} height={20} />
                <Skeleton width="70%" style={{ marginTop: 12 }} />
                <Skeleton width="55%" style={{ marginTop: 8 }} />
                <Skeleton height={110} radius={12} style={{ marginTop: 16 }} />
              </div>
              <div style={{ background: 'var(--tint)', border: '1px solid var(--line)', borderRadius: 18, padding: 20 }}>
                <p className="body-sm" style={{ marginBottom: 14 }}>Ordrer</p>
                <SkeletonList rows={6} />
              </div>
              <div style={{ background: 'var(--tint)', border: '1px solid var(--line)', borderRadius: 18, padding: 20 }}>
                <p className="body-sm" style={{ marginBottom: 14 }}>Tagudskiftning, Eksempelby</p>
                <p className="body">Tømrerne er på pladsen fra mandag. Stillads står klar torsdag.</p>
                <p className="body-sm" style={{ marginTop: 14 }}>Skeleton bruges kun til det, der mangler - det her kort er kommet.</p>
              </div>
            </div>
          </Block>
          <Block label="spinner - arver farve, sr-only label som standard, synlig label ved behov">
            <div className="g-row" style={{ color: 'var(--ink-soft)' }}>
              <Spinner delay={0} />
              <Spinner size={24} delay={0} />
              <Spinner label="Henter ordrer…" showLabel delay={0} />
              <span style={{ color: 'var(--mute)', fontSize: 13 }}><Spinner size={13} label="Henter forslag…" showLabel delay={0} /></span>
            </div>
          </Block>
          <Block label="button loading - label bliver, spinner foran, disabled + aria-busy">
            <div className="g-row">
              <Button loading>Gem</Button>
              <Button variant="ghost" loading>Send tilbud</Button>
              <Button size="lg" loading>Ring mig op</Button>
              <Button disabled>Ikke tilgængelig</Button>
            </div>
          </Block>
          <Block label="loadingbar - 2px Glød i toppen af et panel der opdateres bag synligt indhold">
            <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--tint)', border: '1px solid var(--line)', borderRadius: 18, padding: 20 }}>
              <LoadingBar delay={0} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', rowGap: 10, columnGap: 20 }}>
                {ORDRER.slice(0, 5).map((o) => (
                  <React.Fragment key={o}>
                    <span className="body">{o}</span>
                    <span className="body-sm" style={{ fontFamily: 'var(--font-mono)' }}>12 timer</span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </Block>
          <Block label="tekst - ét verbum, ét ellipsis-tegn">
            <div className="g-row">
              <Badge size="md" style={{ background: 'var(--status-success-bg)', color: 'var(--status-success)', borderColor: 'transparent' }}>Henter…</Badge>
              <Badge size="md" style={{ background: 'var(--status-success-bg)', color: 'var(--status-success)', borderColor: 'transparent' }}>Henter ordrer…</Badge>
              <Badge size="md" style={{ background: 'var(--status-error-bg)', color: 'var(--status-error)', borderColor: 'transparent' }}>Indlæser...</Badge>
              <Badge size="md" style={{ background: 'var(--status-error-bg)', color: 'var(--status-error)', borderColor: 'transparent' }}>Loading</Badge>
              <Badge size="md" style={{ background: 'var(--status-error-bg)', color: 'var(--status-error)', borderColor: 'transparent' }}>Gemmer…</Badge>
            </div>
          </Block>
        </Section>

        <Section id="layout" title="Layout." lead="Sektionshoveder, nøgletal og de to bånd.">
          <Block label="stat - nøgletal">
            <div className="g-grid-4">
              <Stat value="12" label="faste folk" />
              <Stat value="2" label="afdelinger" />
              <Stat value="30+" label="ejendomme i drift" />
              <Stat value="300+" label="lejemål" />
            </div>
          </Block>
          <Block label="uspitem - check som eneste bullet">
            <div style={{ display: 'grid', gap: 12, maxWidth: 480 }}>
              <UspItem>Én fast kontaktperson gennem hele forløbet</UspItem>
              <UspItem>Fast pris - ingen overraskelser</UspItem>
              <UspItem>Vi vender tilbage inden for 24 timer</UspItem>
            </div>
          </Block>
          <Block label="relatedlink">
            <div className="g-row" style={{ gap: 28 }}>
              <RelatedLink>Se vores referencer</RelatedLink>
              <RelatedLink>Læs om Aftal Drift</RelatedLink>
            </div>
          </Block>
          <Block label="trustband - medlemsmærker">
            <TrustBand text="Vi er medlem af Byg Garanti og DI Byggeri." />
          </Block>
          <Block label="ctaband - sidens eneste breaker, altid fuldbredde">
            <div style={{ width: '100vw', marginLeft: 'calc(50% - 50vw)' }}>
              <CtaBand title="Klar til at komme i gang?" />
            </div>
          </Block>
        </Section>
      </main>

      <footer className="g-footer">
        <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <Logo height={22} />
          <p className="body-sm" style={{ fontFamily: 'var(--font-mono)' }}>Når en aftal' er en aftal'</p>
        </div>
      </footer>
    </>
  );
}

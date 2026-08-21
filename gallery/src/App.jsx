import React from 'react';
import {
  Button, Badge, Icon, PinIcon, Logo,
  DeptCard, CategoryCard, WorkRow, RefCard, StepCard, Media,
  Field, Switch, SearchSelect, CallbackForm,
  SectionHead, CtaBand, Stat, UspItem, TrustBand, RelatedLink,
} from '@aftal/ui';

const img = (n) => `/assets/images/ref-glhasseris-${n}.jpg`;

const BRAND_COLOURS = [
  { name: 'GLØD', hex: '#D44016', note: 'digital accent' },
  { name: 'KALK', hex: '#EDEBE8', note: 'default baggrund' },
  { name: 'SKIFFER', hex: '#8F887C', note: 'neutral' },
  { name: 'KULSORT', hex: '#000000', note: 'tekst' },
  { name: 'TEGLSTEN', hex: '#B84C32', note: 'kun print' },
];

const ICON_NAMES = ['arrow', 'check', 'chevron', 'menu', 'close', 'sun', 'moon', 'cookie', 'image', 'phone', 'mail'];

const ORDRER = [
  'Tagudskiftning, Gl. Hasseris', 'Vinduesudskiftning, Hobro', 'Tagpap, Aars Syd',
  'Facaderenovering, Aalborg Ø', 'Terrasse, Støvring', 'Kvist, Nibe',
  'Solceller, Svenstrup', 'Efterisolering, Skørping', 'Døre og vinduer, Terndrup',
  'Carport, Suldrup', 'Tagrender, Haverslev', 'Undertag, Arden',
  'Altandøre, Vodskov', 'Gavlbeklædning, Brønderslev',
];

const NAV = [
  ['farver', 'Farver'], ['typografi', 'Typografi'], ['core', 'Core'],
  ['kort', 'Kort'], ['formularer', 'Formularer'], ['layout', 'Layout'],
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
  const [theme, setTheme] = React.useState(
    () => document.documentElement.getAttribute('data-theme') || 'light'
  );
  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('aftal-theme', next);
  };

  return (
    <>
      <header className="g-header">
        <div className="wrap g-header-inner">
          <Logo variant={theme === 'dark' ? 'white' : 'primary'} height={28} />
          <nav className="g-nav">
            {NAV.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
          </nav>
          <button className="g-theme-toggle" onClick={toggleTheme} aria-label="Skift tema">
            <Icon name={theme === 'light' ? 'moon' : 'sun'} size={18} />
          </button>
        </div>
      </header>

      <main>
        <section className="g-section">
          <div className="wrap">
            <h1 className="h1">Aftal UI.</h1>
            <p className="body-lg" style={{ marginTop: 16, maxWidth: 640 }}>
              Designsystemet bag det nye brand - tokens og 19 komponenter, som alle
              Aftals flader bygges af. Det du ser her, er den kode portalerne bruger.
            </p>
            <p className="body-sm" style={{ marginTop: 12, fontFamily: 'var(--font-mono)' }}>
              Når en aftal' er en aftal'
            </p>
          </div>
        </section>

        <Section id="farver" title="Farver." lead="Fem brandfarver. Alt andet er roller og tints, der peger på dem.">
          <Block label="brandpalette">
            <div className="g-grid-4">
              {BRAND_COLOURS.map((c) => (
                <div key={c.name} className="g-swatch">
                  <div className="g-swatch-fill" style={{ background: c.hex }} />
                  <div className="g-swatch-meta">
                    <strong>{c.name}</strong>
                    <code>{c.hex} · {c.note}</code>
                  </div>
                </div>
              ))}
            </div>
          </Block>
          <Block label="statusfarver - dæmpede, så de ikke konkurrerer med GLØD">
            <div className="g-row">
              <Badge style={{ background: 'var(--status-success-bg)', color: 'var(--status-success)' }}>Udført</Badge>
              <Badge style={{ background: 'var(--status-info-bg)', color: 'var(--status-info)' }}>I gang</Badge>
              <Badge style={{ background: 'var(--status-warning-bg)', color: 'var(--status-warning)' }}>Afventer</Badge>
              <Badge style={{ background: 'var(--status-error-bg)', color: 'var(--status-error)' }}>Fejlet</Badge>
            </div>
          </Block>
        </Section>

        <Section id="typografi" title="Typografi." lead="Google Sans Flex bærer alt. Strait til én condensed overskrift ad gangen, Google Sans Code til småtryk.">
          <Block label="display / h1">
            <p className="h1">Op til tiden. Ned til tiden.</p>
          </Block>
          <Block label="h2">
            <p className="h2">Tre afdelinger, ét hold.</p>
          </Block>
          <Block label="h3">
            <p className="h3">Alt samlet ét sted.</p>
          </Block>
          <Block label="strait - condensed accent, kun Regular, højst én pr. side">
            <p className="h2" style={{ fontFamily: 'var(--font-accent)', fontWeight: 400, letterSpacing: 0 }}>
              Vi møder op, og vi gør det, vi har sagt.
            </p>
          </Block>
          <Block label="brødtekst">
            <p className="body" style={{ maxWidth: 640 }}>
              Med Aftal har du én fast part gennem hele ejendommens liv. Det betyder
              mindre koordinering for dig - og at intet falder mellem to stole.
            </p>
          </Block>
          <Block label="småtryk - google sans code">
            <p className="body-sm" style={{ fontFamily: 'var(--font-mono)' }}>Hverdage 8-15:30 · Aars, Nordjylland</p>
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
          <Block label="button - onbrand (på GLØD-flade)">
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
          <Block label="logo - lockups og afdelinger">
            <div className="g-light-tile">
              <Logo height={38} />
              <Logo variant="byggeri" height={30} />
              <Logo variant="udvikling" height={30} />
              <Logo variant="drift" height={30} />
              <Logo variant="icon" height={34} />
            </div>
            <div className="g-dark-tile" style={{ marginTop: 16 }}>
              <Logo variant="white" height={38} />
              <Logo variant="icon-white" height={34} />
            </div>
          </Block>
        </Section>

        <Section id="kort" title="Kort." lead="Tint-fyld og hairline, ingen skygger. Hover er ren farve-fade - intet flytter sig.">
          <Block label="deptcard - 3-up">
            <div className="g-grid-3">
              <DeptCard name="Aftal Udvikling" tag="Fra grund til færdigt projekt" description="Fra idé og grundkøb gennem myndigheder, økonomi og design." />
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
          <Block label="workrow - tæt liste, GLØD-tint ved hover">
            <div>
              <WorkRow title="Tagpap" description="Tæt, vedligeholdelsesfrit tag til flade og lave taghældninger." points={['Flade tage', 'Lav hældning', 'Inddækning']} image={img(1)} />
              <WorkRow title="Droner" description="Droneinspektion af tag og facade." points={['Tag & facade', 'Termografi']} soon />
            </div>
          </Block>
          <Block label="refcard - inkl. 'dit projekt her?'-varianten">
            <div className="g-grid-3">
              <RefCard title="Tagudskiftning i Gl. Hasseris" meta="Byggeri · Aalborg, 2026" image={img(1)} />
              <RefCard title="Tagudskiftning i Gl. Hasseris" meta="Byggeri · Aalborg, 2026" image={img(2)} />
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
              <Media src={img(3)} alt="Tagudskiftning i Gl. Hasseris" ratio="16 / 10" />
              <Media label="Foto på vej" ratio="16 / 10" />
            </div>
          </Block>
        </Section>

        <Section id="formularer" title="Formularer." lead="Flydende labels, GLØD-kant ved fokus. Fejlede formularer viser telefonnummeret.">
          <Block label="field - text / email / select / textarea">
            <div className="g-grid-2">
              <Field label="Navn" name="d-name" placeholder="Dit navn" />
              <Field label="Email" name="d-email" type="email" placeholder="din@mail.dk" />
              <Field label="Hvad drejer det sig om?" name="d-scope" type="select" options={['Udvikling', 'Byggeri', 'Drift', 'Ikke sikker endnu']} />
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

        <Section id="layout" title="Layout." lead="Sektionshoveder, nøgletal og de to bånd.">
          <Block label="stat - de fire rigtige tal">
            <div className="g-grid-4">
              <Stat value="9" label="faste folk" />
              <Stat value="3" label="afdelinger" />
              <Stat value="40+" label="ejendomme i drift" />
              <Stat value="450+" label="lejemål" />
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
          <Block label="trustband - mørkt medlemsbånd">
            <TrustBand text="Vi er medlem af Byg Garanti og DI Byggeri." />
          </Block>
          <Block label="ctaband - sidens eneste breaker">
            <CtaBand title="Klar til at komme i gang?" />
          </Block>
        </Section>
      </main>

      <footer className="g-footer">
        <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <Logo variant={theme === 'dark' ? 'white' : 'primary'} height={22} />
          <p className="body-sm" style={{ fontFamily: 'var(--font-mono)' }}>Når en aftal' er en aftal'</p>
        </div>
      </footer>
    </>
  );
}

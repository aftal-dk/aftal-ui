// @aftal/ui - barrel export. Components ship as source JSX; Next.js consumers
// add `transpilePackages: ['@aftal/ui']`, Vite consumers work out of the box.

// core
export { Button } from './components/core/Button.jsx';
export { Badge } from './components/core/Badge.jsx';
export { Icon, PinIcon } from './components/core/Icon.jsx';
export { Logo } from './components/core/Logo.jsx';

// loading
export { Spinner } from './components/loading/Spinner.jsx';
export { Skeleton, SkeletonList } from './components/loading/Skeleton.jsx';
export { LoadingBar } from './components/loading/LoadingBar.jsx';

// cards
export { DeptCard } from './components/cards/DeptCard.jsx';
export { CategoryCard } from './components/cards/CategoryCard.jsx';
export { WorkRow } from './components/cards/WorkRow.jsx';
export { RefCard } from './components/cards/RefCard.jsx';
export { StepCard } from './components/cards/StepCard.jsx';
export { Media } from './components/cards/Media.jsx';

// forms
export { Field } from './components/forms/Field.jsx';
export { Switch } from './components/forms/Switch.jsx';
export { SearchSelect } from './components/forms/SearchSelect.jsx';
export { CallbackForm } from './components/forms/CallbackForm.jsx';

// layout
export { SectionHead } from './components/layout/SectionHead.jsx';
export { CtaBand } from './components/layout/CtaBand.jsx';
export { Stat } from './components/layout/Stat.jsx';
export { UspItem } from './components/layout/UspItem.jsx';
export { TrustBand } from './components/layout/TrustBand.jsx';
export { RelatedLink } from './components/layout/RelatedLink.jsx';

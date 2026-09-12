import Button from './components/atoms/Button';
import Typography from './components/atoms/Typography';
import HeritageGrid from './components/organisms/HeritageGrid';
import { heritageSites } from './data/heritageSites';

export default function HomePage() {
  return (
    <>
      <section className="bg-primary">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-16 md:px-6 md:py-24">
          <Typography variant="h1" className="text-white">
            Discover Pangasinan&apos;s Living Heritage
          </Typography>
          <Typography variant="body" className="max-w-2xl text-neutral-100">
            From the hundred limestone islands of Alaminos to the historic lighthouse of Bolinao and the
            healing springs of Balungao — explore the province&apos;s most iconic destinations, optimized
            for browsing even on limited mobile data.
          </Typography>
          <div>
            <Button variant="secondary" size="lg">
              Start Exploring
            </Button>
          </div>
        </div>
      </section>

      <HeritageGrid sites={heritageSites} />
    </>
  );
}

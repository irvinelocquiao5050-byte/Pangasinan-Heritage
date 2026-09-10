import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';
import { HeritageGrid } from '@/components/organisms/HeritageGrid';
import { heritageSites } from '@/data/heritageSites';

export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-heritage-50 to-white py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Typography variant="caption" className="text-sand-600">
            Pangasinan Provincial Tourism Office
          </Typography>
          <Typography variant="display" className="mt-3">
            The Pangasinan Heritage Digital Showcase
          </Typography>
          <Typography variant="body" className="mx-auto mt-4 max-w-2xl text-lg">
            A fast, mobile-first guide to the province&apos;s most iconic
            heritage sites — from the 124 islands of Alaminos to the
            century-old lighthouse of Bolinao and the warm springs of
            Balungao.
          </Typography>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="#heritage-grid-heading" variant="primary" size="lg">
              Explore heritage sites
            </Button>
          </div>
        </div>
      </section>

      <HeritageGrid sites={heritageSites} />
    </>
  );
}

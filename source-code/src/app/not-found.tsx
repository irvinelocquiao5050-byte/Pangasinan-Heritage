import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center">
      <Typography variant="h1">Page not found</Typography>
      <Typography variant="body" className="mt-3">
        The heritage site or page you&apos;re looking for doesn&apos;t exist.
      </Typography>
      <div className="mt-6">
        <Button href="/" variant="primary">
          Back to homepage
        </Button>
      </div>
    </div>
  );
}

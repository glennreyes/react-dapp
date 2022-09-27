import { Link } from 'react-router-dom';
import { useTitle } from 'react-use';

import { Divider } from '../ui/Divider';
import { Subheading } from '../ui/SubHeading';

export function NotFoundPage() {
  useTitle('Not Found | React Dapp');

  return (
    <>
      <Subheading>Something went wrong</Subheading>
      <h1>Page not found</h1>
      <p>
        The page you are looking for does not exist. Please check the URL and
        try again.
      </p>
      <Divider />
      <Link className="btn btn-lg btn-primary normal-case" to="/">
        Go back to the home page
      </Link>
    </>
  );
}

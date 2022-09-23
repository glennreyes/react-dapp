import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <>
      <h1>Page not found</h1>
      <p>
        The page you are looking for does not exist. Please check the URL and
        try again.
      </p>
      <Link className="btn btn-lg btn-primary normal-case" to="/">
        Go back to the home page
      </Link>
    </>
  );
}

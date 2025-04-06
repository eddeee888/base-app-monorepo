import { Home } from './_components/Home';

export default async function Page(): Promise<JSX.Element> {
  return (
    <div>
      <h1>Welcome!</h1>
      <Home />
    </div>
  );
}

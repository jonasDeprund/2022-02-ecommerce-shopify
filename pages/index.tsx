import { useEffect } from 'react';
import play from '../playground';

export default function Home() {
  useEffect(() => {
    play();
  }, []);

  const message: string = 'Bonjour';
  return <div>{message}</div>;
}

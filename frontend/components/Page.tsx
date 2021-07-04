import { FC } from 'react';

interface PageProps {
  cool?: string;
  // optional children of type reactNode
  // children?: React.ReactNode;
}

const Page: FC<PageProps>  = ({ children, cool }) => (
  <div>
    <h2>I am the page component</h2>
    {children}
    <h3>{cool}</h3>
  </div>
);

export default Page;

import { FC } from 'react';

interface PageProps {
  children: any;
  cool: string;
}
const Page: FC<PageProps> = ({ children, cool }:{children: React.ReactElement[], cool: string}) => (
  <div>
    <h2>I am the page component</h2>
    {children}
    <h3>{cool}</h3>
  </div>
);

export default Page;

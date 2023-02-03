import type { ChildrenProps } from 'react';

export default function Layout({ children }: ChildrenProps) {
  return (
    <div className="md:bg-transperent carousel flex h-screen w-screen flex-col bg-black md:items-center md:justify-center">
      {children}
    </div>
  );
}

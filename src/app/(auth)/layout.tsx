const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex w-full max-w-xl flex-col items-center rounded-md border border-zinc-700 bg-fill-dark px-10 py-5 md:py-10">
        {children}
      </div>
    </div>
  );
};

export default Layout;

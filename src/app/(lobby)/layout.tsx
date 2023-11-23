import { getUser } from "@/lib/auth";
import { Footer } from "@/components/footer";
import { LobbyNavbar } from "@/components/site-header/lobby-navbar";

type LobbyLayoutProps = {
  children: React.ReactNode;
};

export default async function LobbyLayout({ children }: LobbyLayoutProps) {
  const user = await getUser();

  return (
    <div className="flex min-h-screen flex-col">
      <LobbyNavbar user={user} />
      <div className="z-0 flex-1">{children}</div>
      <Footer />
    </div>
  );
}

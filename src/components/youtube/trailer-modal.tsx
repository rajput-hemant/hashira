import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { H2 } from "../ui/topography";

type TrailerModelProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

const TrailerModel = ({ id, title, children }: TrailerModelProps) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
        <H2 className="truncate pt-4">{title}</H2>

        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="aspect-video h-full w-full rounded-md"
        />
      </DialogContent>
    </Dialog>
  );
};

export default TrailerModel;

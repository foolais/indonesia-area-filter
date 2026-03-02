import { ArrowDown } from "lucide-react";
import type { IDataRegion } from "../page/FilterPage";

type IProps = {
  dataRegion: IDataRegion;
};

const MainContent = ({ dataRegion }: IProps) => {
  const { provinces, regencies, districts } = dataRegion;
  return (
    <main className="flex flex-col gap-12 items-center justify-center flex-1">
      {provinces && (
        <div className="space-y-2 flex items-center flex-col">
          <span className="text-blue-500 uppercase font-semibold text-xs tracking-widest">
            Provinsi
          </span>
          <h2 className="text-5xl font-bold">{provinces.name}</h2>
        </div>
      )}
      {regencies && (
        <>
          <ArrowDown className="size-8 text-slate-300" />
          <div className="space-y-2 flex items-center flex-col">
            <span className="text-blue-500 uppercase font-semibold text-xs tracking-widest">
              Kabupaten/Kota
            </span>
            <h2 className="text-5xl font-bold">{regencies.name}</h2>
          </div>
        </>
      )}
      {districts && (
        <>
          <ArrowDown className="size-8 text-slate-300" />
          <div className="space-y-2 flex items-center flex-col">
            <span className="text-blue-500 uppercase font-semibold text-xs tracking-widest">
              Kabupaten/Kota
            </span>
            <h2 className="text-5xl font-bold">{districts.name}</h2>
          </div>
        </>
      )}
    </main>
  );
};

export default MainContent;

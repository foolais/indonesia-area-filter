import { ChevronRight } from "lucide-react";
import type { IDataRegion } from "../page/FilterPage";

type IProps = {
  dataRegion: IDataRegion;
};

const Header = ({ dataRegion }: IProps) => {
  const { provinces, regencies, districts } = dataRegion;
  return (
    <header className=" bg-white h-20 border-b-2 border-slate-200 flex items-center px-8">
      <nav className="breadcrumb">
        <ol className="flex items-center justify-center gap-2 font-semibold text-slate-500">
          <li>Indonesia</li>
          {provinces && (
            <>
              <ChevronRight className="size-4" />
              <li className={`${!regencies && !districts && "text-blue-500"}`}>
                {provinces.name}
              </li>
            </>
          )}
          {regencies && (
            <>
              <ChevronRight className="size-4" />
              <li className={`${!districts && "text-blue-500"}`}>
                {regencies.name}
              </li>
            </>
          )}
          {districts && (
            <>
              <ChevronRight className="size-4" />
              <li className="text-blue-500">{districts.name}</li>
            </>
          )}
        </ol>
      </nav>
    </header>
  );
};

export default Header;

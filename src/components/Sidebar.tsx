import { Earth, FunnelX } from "lucide-react";
import ComboboxRegions from "./ComboboxRegions";
import type { IDistricts, IProvince, IRegencies } from "../page/FilterPage";

type IProps = {
  province: string;
  regency: string;
  district: string;
  proviceList: IProvince[];
  regencyList: IRegencies[];
  districtList: IDistricts[];
  handleProvinceChange: (value: string) => void;
  handleRegencyChange: (value: string) => void;
  handleDistrictChange: (value: string) => void;
  handleResetFilter: () => void;
};

export default function Sidebar({
  province,
  regency,
  district,
  proviceList,
  regencyList,
  districtList,
  handleProvinceChange,
  handleRegencyChange,
  handleDistrictChange,
  handleResetFilter,
}: IProps) {
  return (
    <aside className="px-8 py-4 border-r-2 border-r-slate-200 h-full space-y-14">
      {/* Title */}
      <div className="flex items-center gap-2">
        <div className="bg-blue-100 flex items-center justify-center rounded-full w-max p-2">
          <Earth className="text-blue-500" />
        </div>
        <h1 className="font-bold text-xl">Frontend Assessment</h1>
      </div>
      {/* Filter */}
      <div>
        <span className="text-slate-500">Filter Wilayah</span>
        <div className="space-y-8 mt-10">
          <ComboboxRegions
            label="Provinsi"
            name="province"
            placeholder="Pilih Provinsi"
            options={proviceList}
            value={province}
            onChange={handleProvinceChange}
          />
          <ComboboxRegions
            label="Kota/Kabupaten"
            name="regency"
            placeholder="Pilih Kota/Kabupaten"
            options={regencyList}
            value={regency}
            onChange={handleRegencyChange}
            disabled={!province}
          />
          <ComboboxRegions
            label="Kecamatan"
            name="district"
            placeholder="Pilih Kecamatan"
            options={districtList}
            value={district}
            onChange={handleDistrictChange}
            disabled={!regency}
          />
        </div>
      </div>
      <button
        onClick={handleResetFilter}
        className="w-full px-8 py-4 border-2 border-blue-500 rounded-xl  cursor-pointer hover:bg-slate-100 flex items-center justify-center gap-2 font-semibold disabled:cursor-not-allowed"
        disabled={!province && !regency && !district}
      >
        <FunnelX className="size-5 text-slate-500" />
        Reset
      </button>
    </aside>
  );
}

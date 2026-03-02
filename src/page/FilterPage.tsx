import { useLoaderData, useSearchParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export type IProvince = {
  id: number;
  name: string;
};

export type IRegencies = {
  id: number;
  name: string;
  province_id: number;
};

export type IDistricts = {
  id: number;
  name: string;
  regency_id: number;
};

export type IRegionLoaderData = {
  provinces: IProvince[];
  regencies: IRegencies[];
  districts: IDistricts[];
};

export type IDataRegion = {
  provinces: IProvince | null;
  regencies: IRegencies | null;
  districts: IDistricts | null;
};

export default function FilterPage() {
  const {
    provinces: provinceList,
    regencies: regencyList,
    districts: districtList,
  } = useLoaderData() as IRegionLoaderData;
  const [searchParams, setSearchParams] = useSearchParams();

  const province = searchParams.get("province") || "";
  const regency = searchParams.get("regency") || "";
  const district = searchParams.get("district") || "";

  const filteredRegency = regencyList.filter(
    (item) => item.province_id === +province
  );

  const filteredDistrict = districtList.filter(
    (item) => item.regency_id === +regency
  );

  const dataRegion: IDataRegion = {
    provinces:
      (provinceList.find((item) => item.id === +province) as IProvince) ?? null,
    regencies:
      (filteredRegency.find((item) => item.id === +regency) as IRegencies) ??
      null,
    districts:
      (filteredDistrict.find((item) => item.id === +district) as IDistricts) ??
      null,
  };

  const handleProvinceChange = (value: string) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      console.log({ params });

      if (value) {
        params.set("province", value);
        params.delete("regency");
        params.delete("district");
      } else {
        params.delete("province");
        params.delete("regency");
        params.delete("district");
      }

      return params;
    });
  };

  const handleRegencyChange = (value: string) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);

      if (value) {
        params.set("regency", value);
        params.delete("district");
      } else {
        params.delete("regency");
        params.delete("district");
      }

      return params;
    });
  };

  const handleDistrictChange = (value: string) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);

      if (value) {
        params.set("district", value);
      } else {
        params.delete("district");
      }

      return params;
    });
  };

  const handleResetFilter = () => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.delete("province");
      params.delete("regency");
      params.delete("district");
      return params;
    });
  };

  return (
    <div className="min-h-screen min-w-screen grid grid-cols-4">
      <Sidebar
        province={province}
        regency={regency}
        district={district}
        proviceList={provinceList}
        regencyList={filteredRegency}
        districtList={filteredDistrict}
        handleProvinceChange={handleProvinceChange}
        handleRegencyChange={handleRegencyChange}
        handleDistrictChange={handleDistrictChange}
        handleResetFilter={handleResetFilter}
      />
      <div className="grid grid-rows-2 col-span-3">
        <Header dataRegion={dataRegion} />
        <div>content</div>
      </div>
    </div>
  );
}

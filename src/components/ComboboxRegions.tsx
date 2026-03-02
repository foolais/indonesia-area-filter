import { ChevronDown, Map } from "lucide-react";

type IOption = {
  id: number;
  name: string;
  regency_id?: number;
  province_id?: number;
};

type IProps = {
  label: string;
  name: string;
  placeholder: string;
  options: IOption[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
};

export default function ComboboxRegions({
  label,
  name,
  placeholder,
  options,
  value,
  onChange,
  disabled,
}: IProps) {
  return (
    <div className="space-y-2 grid">
      <label
        htmlFor={name}
        className="text-slate-500 font-bold uppercase tracking-wider"
      >
        {label}
      </label>
      <div className="relative hover:bg-slate-100">
        <Map className="absolute top-5 left-4 size-5 text-slate-500" />
        <select
          id={name}
          name={name}
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-8 py-4 border-2 border-slate-500 rounded-xl shadow-sm appearance-none cursor-pointer pl-12 pr-10 font-semibold disabled:cursor-not-allowed"
        >
          <option value="" disabled className="">
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute top-5 right-4 size-5 text-slate-500" />
      </div>
    </div>
  );
}

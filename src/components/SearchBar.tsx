// SearchBar.tsx
import React from "react";
import Button from "@/components/common/Button";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onSearch }) => {
  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Buscar..."
        className="w-full p-3 rounded-lg border-2 border-gray-300"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <Button onClick={onSearch} className="text-white p-2 ml-3">
        Buscar
      </Button>
    </div>
  );
};

export default SearchBar;

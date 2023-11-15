
import Select from 'react-select';
import './Select.css';

interface OptionType {
  label: string;
  value: string;
}

const suppliers: OptionType[] = [
  { label: 'Inicio', value: 'Inicio' },
  { label: 'Moneda divisa', value: 'Moneda divisa' },
  { label: 'Cripto moneda', value: 'Cripto moneda' },
  { label: 'Graficcos', value: 'Graficcos' },
  { label: 'Sobre nosotros', value: 'Sobre nosotros' },
];

export default function SelectOption() {
  const handleSelectChange = (selectedOption:any) => {
    // selectedOption tiene el tipo ValueType<OptionType>
    if (selectedOption) {
      console.log((selectedOption as OptionType).value);
    }
  };

  return (
    <div>
      <Select
        options={suppliers}
        onChange={handleSelectChange}
      />
    </div>
  );
}
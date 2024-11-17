import { Menu } from 'antd';
import Link from 'next/link';

const items = [
  {
    label: 'L',
    key: 'home_idx_1',
    icon: "",
  },
  {
    label: '<3',
    key: 'home_idx_2',
    icon: "", // Correct path to public folder
  },
  {
    label: 'V',
    key: 'home_idx_3',
    icon: "",
  },
  {
    label: 'E',
    key: 'home_idx_4',
    icon: "",
  },
  {
    label: 'Bae',
    key: 'home_idx_5',
    icon: "",
  },
];

const Navbar = () => {
  return (
    <div className="bg-white shadow">
      <Menu mode="horizontal" style={{ justifyContent: 'center' }} items={items} />
    </div>
  );
};

export default Navbar;

import React from 'react';
import {LeftMenuBox} from './LeftMenu.style';
import {FruitsVegetable,} from 'components/AllSvgIcon';
import {GROCERY_PAGE} from 'constants/navigation';
import {useRouter} from 'next/router';

import Logo from 'components/Logo/Logo';
const MENU_ITEMS = [
  {
    link: GROCERY_PAGE,
    icon: <FruitsVegetable />,
    label: 'Grocery test',
    intlId: 'navGroceryMenu',
  },
];
type Props = {
  logo: string;
};

export const LeftMenu: React.FC<Props> = ({ logo }) => {
  const { pathname } = useRouter();
  const initialMenu = MENU_ITEMS.find((item) => item.link === pathname);
  const [activeMenu, setActiveMenu] = React.useState(initialMenu ?? MENU_ITEMS[0]);

  return (
    <LeftMenuBox>
      <Logo
        imageUrl={logo}
        alt={'Shop Logo'}
        onClick={() => setActiveMenu(MENU_ITEMS[0])}
      />
    </LeftMenuBox>
  );
};

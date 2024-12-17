import { Menu as MenuComponent, MenuProps } from 'antd';

const Menu = ({ onClick, mode, defaultSelectedKeys, children, ...otherProps }: MenuProps) => (
  <MenuComponent
    mode={mode}
    onClick={onClick}
    defaultSelectedKeys={defaultSelectedKeys}
    {...otherProps}
  >
    {children}
  </MenuComponent>
);

export default Menu;

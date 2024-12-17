import { Menu, MenuItemProps } from 'antd';

const MenuItem = ({ onClick, key, children, ...otherProps }: MenuItemProps & { key: string }) => (
  <Menu.Item onClick={onClick} key={key} {...otherProps}>
    {children}
  </Menu.Item>
);

export default MenuItem;

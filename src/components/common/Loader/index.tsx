import { Spin, SpinProps } from 'antd';
import { styles } from './styles';

const Loader = ({ size, ...otherProps }: SpinProps) => {
  return (
    <div style={styles.loaderLayout}>
      <Spin size={size} {...otherProps} />
    </div>
  );
};

Loader.defaultProps = {
  size: 'large',
};

export default Loader;

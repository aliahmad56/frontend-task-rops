import { labelInputInterface } from './label.interface';
export default function Label({ styles, text }: labelInputInterface) {
  return <span style={styles}>{text} :</span>;
}

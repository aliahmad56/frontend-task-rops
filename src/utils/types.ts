/**
 * interfaces
 */
import { SelectProps } from 'antd';
import { AxiosRequestHeaders } from 'axios';

export type OptionType = SelectProps['options'];

export type CreateRequestConfigParams = Partial<{
  baseURL: string;
  headers: AxiosRequestHeaders;
  data: object;
}> & { withAuth: boolean };

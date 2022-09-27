import type { TextInputProps } from './TextInput';
import { TextInput } from './TextInput';

type AddressInputProps = TextInputProps;

export function AddressInput(props: AddressInputProps) {
  return <TextInput pattern="^0x[0-9a-fA-F]{40}$" {...props} />;
}

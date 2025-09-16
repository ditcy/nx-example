import { getRandomAnimal } from '@nx-example/animal';
import { formatMessage } from '@nx-example/util';

export function getZoo(): string {
  const result = getRandomAnimal();
  const message = `${result.name} says ${result.sound}!`;
  return formatMessage('ZOO', message);
}

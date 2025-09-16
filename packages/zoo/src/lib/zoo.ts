import { getRandomAnimal } from "@nx-example/animal";

export function zoo(): string {
  const result = getRandomAnimal();
  return `From the zoo: ${result.name} says ${result.sound}!`;
}
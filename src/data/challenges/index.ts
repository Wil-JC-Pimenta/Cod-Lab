
import { Challenge } from '../../types/challenge';
import { stringChallenges } from './string-challenges';
import { arrayChallenges } from './array-challenges';
import { algorithmChallenges } from './algorithm-challenges';
import { mathChallenges } from './math-challenges';
import { advancedChallenges } from './advanced-challenges';

export const challenges: Challenge[] = [
  ...stringChallenges,
  ...arrayChallenges,
  ...algorithmChallenges,
  ...mathChallenges,
  ...advancedChallenges,
];


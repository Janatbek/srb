import {
  GROCERY_PAGE
} from 'constants/navigation';
const arr = [
  GROCERY_PAGE
];
export function isCategoryPage(pathname) {
  return arr.includes(pathname);
}

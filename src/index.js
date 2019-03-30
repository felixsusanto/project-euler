import afunc, { addOnlyEvenMembers } from './002/002';

console.log(afunc(10));
console.log(afunc(10).reduce(addOnlyEvenMembers));
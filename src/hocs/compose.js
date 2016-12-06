import _ from 'lodash';

export default function compose(...fns) {
  return Component => _.reduceRight(fns, (sum, fn) => fn(sum), Component);
}

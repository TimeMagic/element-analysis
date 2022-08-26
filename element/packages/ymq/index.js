import Ymq from './src/main';

/* istanbul ignore next */
Ymq.install = function(Vue) {
  Vue.component(Ymq.name, Ymq);
};

export default Ymq;

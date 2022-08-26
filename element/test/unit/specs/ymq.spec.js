import { createTest, destroyVM } from '../util';
import Ymq from 'packages/ymq';

describe('Ymq', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Ymq, true);
    expect(vm.$el).to.exist;
  });
});


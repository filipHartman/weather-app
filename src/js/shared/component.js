import { compose } from 'stampit';
import Required, { required } from '@stamp/required';

function componentInitializer({ id }) {
  this.id = id;
}

export const Component = compose(
  {
    init: componentInitializer,
  },
  required({ methods: { create: Required, update: Required } }),
);

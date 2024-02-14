import { Block } from '@/shared/utils/block';
import { RefType } from '@/shared/utils/block/block';
import { isEqual } from '@/shared/utils/is-equal';
import { StoreEvents } from '@/shared/utils/store/store';
import { AppState } from '@/types';

export function connect(
  mapStateToProps: (state: AppState) => Partial<AppState>,
) {
  return function <P extends object, R extends RefType>(
    Component: typeof Block<P, R>,
  ) {
    return class extends Component {
      private onChangeStoreCallback: () => void;

      constructor(props: P) {
        const { store } = window;
        let state = mapStateToProps(store.getState());

        super({ ...props, ...state });

        this.onChangeStoreCallback = () => {
          const newState = mapStateToProps(store.getState());

          if (!isEqual(state, newState)) {
            this.setProps({ ...(newState as P) });
          }

          state = newState;
        };

        store.on(StoreEvents.Updated, this.onChangeStoreCallback);
      }

      componentWillUnmount() {
        super.componentWillUnmount();
        window.store.off(StoreEvents.Updated, this.onChangeStoreCallback);
      }
    };
  };
}

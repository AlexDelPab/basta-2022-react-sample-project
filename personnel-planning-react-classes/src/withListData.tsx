import { Component, ReactNode } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { Store } from "./services/Store";

export interface IListState<T> {
    isLoading: boolean;
    data: T[];
}

function withListData<T>(WrappedComponent: any, store: Store<T>) {
    return class extends Component<{}, IListState<T>> {
        constructor(props: {}) {
            super(props);
            
            this.state = {
                isLoading: true,
                data: []
            }
        }

        async componentDidMount(): Promise<void> {
            await store.loadAll();
            this.setState({
                isLoading: false,
                data: store.elements
            })
        }

        render(): ReactNode {
            if (this.state.isLoading) {
                return <LoadingSpinner />
            }

            return <WrappedComponent data={this.state.data} {...this.props} />;
        }
    }
}

export default withListData;
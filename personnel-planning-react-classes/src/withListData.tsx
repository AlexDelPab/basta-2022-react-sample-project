import { Component, ReactNode } from "react";
import LoadingSpinner from "./LoadingSpinner";

export interface IListState<T> {
    isLoading: boolean;
    data: T[];
}

function withListData<T>(WrappedComponent: any, loadData: () => Promise<T[]>) {
    return class extends Component<{}, IListState<T>> {
        constructor(props: {}) {
            super(props);
            
            this.state = {
                isLoading: true,
                data: []
            }
        }

        async componentDidMount(): Promise<void> {
            const data = await loadData();
            this.setState({
                isLoading: false,
                data: data
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
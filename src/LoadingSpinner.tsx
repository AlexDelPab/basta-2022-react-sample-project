import { Component, ReactNode } from "react";

class LoadingSpinner extends Component<{}, {}> {

    constructor(props: {}) {
        super(props);
    }

    render(): ReactNode {
        return <>...isLoading</>
    }
}

export default LoadingSpinner;
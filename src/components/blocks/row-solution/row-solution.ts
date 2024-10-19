import Component, { ComponentProps } from '@/base/component';

type RowSolutionOptions = {

}

export default class RowSolution extends Component<HTMLElement, RowSolutionOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

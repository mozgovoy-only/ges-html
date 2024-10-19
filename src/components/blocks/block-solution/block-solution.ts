import Component, { ComponentProps } from '@/base/component';

type BlockSolutionOptions = {

}

export default class BlockSolution extends Component<HTMLElement, BlockSolutionOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

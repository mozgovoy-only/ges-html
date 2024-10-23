import Component, { ComponentProps } from '@/base/component';

type BlockStatisticOptions = {

}

export default class BlockStatistic extends Component<HTMLElement, BlockStatisticOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

import Component, { ComponentProps } from '@/base/component';

type BlockEventOptions = {

}

export default class BlockEvent extends Component<HTMLElement, BlockEventOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

import Component, { ComponentProps } from '@/base/component';

type BlockEsgOptions = {

}

export default class BlockEsg extends Component<HTMLElement, BlockEsgOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

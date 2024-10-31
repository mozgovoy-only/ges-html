import Component, { ComponentProps } from '@/base/component';

type BlockChipsOptions = {

}

export default class BlockChips extends Component<HTMLElement, BlockChipsOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

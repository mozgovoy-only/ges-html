import Component, { ComponentProps } from '@/base/component';

type BlockHeadingOptions = {

}

export default class BlockHeading extends Component<HTMLElement, BlockHeadingOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

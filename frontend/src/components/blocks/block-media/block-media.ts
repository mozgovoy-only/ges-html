import Component, { ComponentProps } from '@/base/component';

type BlockMediaOptions = {

}

export default class BlockMedia extends Component<HTMLElement, BlockMediaOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

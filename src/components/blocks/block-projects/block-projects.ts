import Component, { ComponentProps } from '@/base/component';

type BlockProjectOptions = {

}

export default class BlockProject extends Component<HTMLElement, BlockProjectOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

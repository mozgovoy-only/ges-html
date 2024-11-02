import Component, { ComponentProps } from '@/base/component';

type BlockAboutOptions = {

}

export default class BlockAbout extends Component<HTMLElement, BlockAboutOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

import Component, { ComponentProps } from '@/base/component';

type BlockHeroOptions = {

}

export default class BlockHero extends Component<HTMLElement, BlockHeroOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

import Component, { ComponentProps } from '@/base/component';

type BlockHeroSliderOptions = {

}

export default class BlockHeroSlider extends Component<HTMLElement, BlockHeroSliderOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

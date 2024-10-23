import Component, { ComponentProps } from '@/base/component';

type SectionHeroSliderOptions = {

}

export default class SectionHeroSlider extends Component<HTMLElement, SectionHeroSliderOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

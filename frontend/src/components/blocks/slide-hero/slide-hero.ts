import Component, { ComponentProps } from '@/base/component';

type SlideHeroOptions = {

}

export default class SlideHero extends Component<HTMLElement, SlideHeroOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

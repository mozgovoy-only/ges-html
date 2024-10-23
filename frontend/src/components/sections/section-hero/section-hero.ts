import Component, { ComponentProps } from '@/base/component';

type SectionHeroOptions = {

}

export default class SectionHero extends Component<HTMLElement, SectionHeroOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

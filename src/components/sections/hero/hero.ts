import Component, { ComponentProps } from '@/base/component';

type HeroOptions = {

}

export default class Hero extends Component<HTMLElement, HeroOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

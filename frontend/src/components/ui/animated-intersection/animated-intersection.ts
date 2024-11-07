import Component, { ComponentProps } from '@/base/component';

type AnimatedIntersectionOptions = {

}

export default class AnimatedIntersection extends Component<HTMLElement, AnimatedIntersectionOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);

        this.observe();
    }

    destroy() {
        // Destroy function
    }
}

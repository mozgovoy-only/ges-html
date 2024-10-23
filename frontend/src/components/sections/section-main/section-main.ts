import Component, { ComponentProps } from '@/base/component';

type SectionMainOptions = {

}

export default class SectionMain extends Component<HTMLElement, SectionMainOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

import Component, { ComponentProps } from '@/base/component';

type SectionStatusOptions = {

}

export default class SectionStatus extends Component<HTMLElement, SectionStatusOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

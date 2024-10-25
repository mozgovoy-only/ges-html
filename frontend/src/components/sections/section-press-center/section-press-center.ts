import Component, { ComponentProps } from '@/base/component';

type SectionPressCenterOptions = {

}

export default class SectionPressCenter extends Component<HTMLElement, SectionPressCenterOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

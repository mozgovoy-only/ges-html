import Component, { ComponentProps } from '@/base/component';

type SectionWideOptions = {

}

export default class SectionWide extends Component<HTMLElement, SectionWideOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

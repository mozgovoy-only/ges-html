import Component, { ComponentProps } from '@/base/component';

type SectionAboutOptions = {

}

export default class SectionAbout extends Component<HTMLElement, SectionAboutOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

import Component, { ComponentProps } from '@/base/component';

type SectionContactsOptions = {

}

export default class SectionContacts extends Component<HTMLElement, SectionContactsOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

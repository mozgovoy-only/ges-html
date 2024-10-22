import Component, { ComponentProps } from '@/base/component';

type SectionDocumentsOptions = {

}

export default class SectionDocuments extends Component<HTMLElement, SectionDocumentsOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

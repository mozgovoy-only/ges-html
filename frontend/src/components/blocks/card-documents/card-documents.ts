import Component, { ComponentProps } from '@/base/component';

type CardDocumentsOptions = {

}

export default class CardDocuments extends Component<HTMLElement, CardDocumentsOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

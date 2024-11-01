import Component, { ComponentProps } from '@/base/component';

type CardNextOptions = {

}

export default class CardNext extends Component<HTMLElement, CardNextOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

import Component, { ComponentProps } from '@/base/component';

type CardBrandOptions = {

}

export default class CardBrand extends Component<HTMLElement, CardBrandOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

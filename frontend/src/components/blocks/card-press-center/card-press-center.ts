import Component, { ComponentProps } from '@/base/component';

type CardPressCenterOptions = {

}

export default class CardPressCenter extends Component<HTMLElement, CardPressCenterOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

import Component, { ComponentProps } from '@/base/component';

type CardEventOptions = {

}

export default class CardEvent extends Component<HTMLElement, CardEventOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

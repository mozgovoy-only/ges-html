import Component, { ComponentProps } from '@/base/component';

type CardMediaOptions = {

}

export default class CardMedia extends Component<HTMLElement, CardMediaOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

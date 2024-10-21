import Component, { ComponentProps } from '@/base/component';

type CardProjectOptions = {

}

export default class CardProject extends Component<HTMLElement, CardProjectOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

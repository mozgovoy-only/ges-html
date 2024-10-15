import Component, { ComponentProps } from '@/base/component';

type ButtonMainOptions = {

}

export default class ButtonMain extends Component<HTMLElement, ButtonMainOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

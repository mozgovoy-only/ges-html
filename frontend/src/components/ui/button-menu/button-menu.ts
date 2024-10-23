import Component, { ComponentProps } from '@/base/component';

type ButtonMenuOptions = {

}

export default class ButtonMenu extends Component<HTMLElement, ButtonMenuOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

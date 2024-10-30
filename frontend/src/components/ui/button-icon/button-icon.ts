import Component, { ComponentProps } from '@/base/component';

type ButtonIconOptions = {

}

export default class ButtonIcon extends Component<HTMLElement, ButtonIconOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

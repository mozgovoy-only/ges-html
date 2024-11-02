import Component, { ComponentProps } from '@/base/component';

type ButtonOffcutOptions = {

}

export default class ButtonOffcut extends Component<HTMLElement, ButtonOffcutOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

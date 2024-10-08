import Component, { ComponentProps } from '@/base/component';

type HeaderMenuOptions = {

}

export default class HeaderMenu extends Component<HTMLElement, HeaderMenuOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

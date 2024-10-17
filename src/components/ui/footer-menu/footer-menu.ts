import Component, { ComponentProps } from '@/base/component';

type FooterMenuOptions = {

}

export default class FooterMenu extends Component<HTMLElement, FooterMenuOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

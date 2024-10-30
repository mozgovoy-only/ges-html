import Component, { ComponentProps } from '@/base/component';

type SelectCustomOptions = {

}

export default class SelectCustom extends Component<HTMLElement, SelectCustomOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

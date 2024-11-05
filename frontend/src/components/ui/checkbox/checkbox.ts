import Component, { ComponentProps } from '@/base/component';

type CheckboxOptions = {

}

export default class Checkbox extends Component<HTMLElement, CheckboxOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

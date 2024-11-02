import Component, { ComponentProps } from '@/base/component';

type InputOptions = {

}

export default class Input extends Component<HTMLElement, InputOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

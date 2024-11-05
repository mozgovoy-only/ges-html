import Component, { ComponentProps } from '@/base/component';

type TextareaOptions = {

}

export default class Textarea extends Component<HTMLElement, TextareaOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

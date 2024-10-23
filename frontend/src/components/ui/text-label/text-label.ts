import Component, { ComponentProps } from '@/base/component';

type TextLabelOptions = {

}

export default class TextLabel extends Component<HTMLElement, TextLabelOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

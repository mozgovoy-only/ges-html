import Component, { ComponentProps } from '@/base/component';

type TextIndentOptions = {

}

export default class TextIndent extends Component<HTMLElement, TextIndentOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}

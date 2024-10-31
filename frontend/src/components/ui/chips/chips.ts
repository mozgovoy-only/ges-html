import Component, { ComponentProps } from '@/base/component';

type ChipsOptions = {

}

export default class Chips extends Component<HTMLElement, ChipsOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}
